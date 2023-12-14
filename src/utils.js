import { baseURL } from "./constants.json";
import {navigate} from 'svelte-routing'

import image from './lib/imageExports.js';
/**
 * @typedef {{ [key: string]: any }} SolutionObject
 */

/**
 * @param {string} url
 * @param {SolutionObject} headers
 * @param {SolutionObject} body
 * @returns {Promise<SolutionObject>}
 */
export const POST = async (url, headers, body) => {
    const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    });
    return response.json();
}

/**
 * @param {string} url
 * @param {SolutionObject} data
 * @returns {Promise<SolutionObject>}
 */
export const GET = async (url, data) => {
    const response = await fetch(`${url}/${data}`);
    return response.json();
}

/**
 * @param {Window} window
 * @param {SolutionObject} data
 * @param {"remove" | "set"} type
 */
export const manageData = (window, data, type) => {
    if (type === "set") window.localStorage.setItem('token', data.id);
    const body = data.data;

    for (const dataKey of Object.keys(body)) {
        if (type === "remove") {
            window.localStorage.removeItem(`_${dataKey}`);
            continue;
        }
        if (dataKey === "id" || dataKey === "status") continue;
        window.localStorage.setItem(`_${dataKey}`, body[dataKey]);
    }
}

/**
 * @param {Window} window
 * @param {string} email
 * @param {string} passwd
 * @returns {Promise<SolutionObject>}
 */
export const login = async (window, email, passwd) => {
    const received = await POST(
        `${baseURL}guest/`,
        {
            'Content-Type': 'application/json'
        },
        {
            "email": email,
            "passwd": passwd,
            "methodType": 'login',
        }
    );

    if (received.status === "success") {
        manageData(window, received, "set");

        navigate('/');
window.location.reload();
    }
    navigate('/');
window.location.reload();
    return received;
}

/**
 * @param {Window} window
 * @returns {Promise<void>}
 */
export const logout = window => {
    window.localStorage.clear();
    navigate('/');
    window.location.reload();
}

/**
 * @returns {Promise<SolutionObject[]>}
 */
export const getGuests = async () => {
    return await POST(
        `${baseURL}guest/`,
        {
            'Content-Type': 'application/json'
        },
        {
            "methodType": "all"
        }
    );
}

/**
 * @returns {Promise<SolutionObject[]>}
 */
export const getPartners = async () => {
    return await POST(
        `${baseURL}partner/`,
        {
            'Content-Type': 'application/json'
        },
        {
            "methodType": "all"
        }
    );
}

/**
 * @returns {Promise<SolutionObject[]>}
 */
export const getEvents = async () => {
    return await POST(
        `${baseURL}event/`,
        {
            'Content-Type': 'application/json'
        },
        {
            "methodType": "chzgjkhi"
        }
    );
}

/**
 * @param {string} imageEndpoint
 * @returns {string}
 */
export const renderImage = imageEndpoint => {
    return image.baseURL + imageEndpoint;
}

/**
  * @param {string} lastName
  * @param {string} firstName
 * @returns {string}
  */
export const renderName = (lastName, firstName) => {
    return `${lastName.toUpperCase()} ${firstName.split(" ").map(name => name[0].toUpperCase() + name.slice(1)).join(" ")}`;
}

/**
 * @param {string} rawRole
 * @param {boolean} simplify
 * @returns {string[]}
 */
export const getRole = (rawRole, simplify) => {
    let roles = rawRole.split("::");

    roles = roles.map(role => {
        return {
            pre: 'Président(e)',
            vp: 'Vice-Président(e)',
            revent: 'Responsable Événementiel',
            rpart: 'Responsable Partenariat',
            rcom: 'Responsable Communication',
            racc: 'Responsable Trésorerie',
            sec: 'Secrétariat',
            event: 'Événementiel',
            part: 'Partenariat',
            com: 'Communication',
            acc: 'Trésorerie',
            und: 'Membre Indéfini'
        }[role]
    });

    if (simplify) {
        roles = roles.filter(role => {
            return role.includes('Président') || role.includes('Secrétariat') || role.includes('Responsable');
        });
    }

    return roles;
}

/**
 * @param {SolutionObject[]} list
 * @returns {{ category: string, members: SolutionObject[] }[]} list
 */
export const sortRoles = list => {
    const categories = {
        "p::vp::sec": [],
        "acc": [],
        "com": [],
        "part": [],
        "event": []
    };
    for (const bdeMember of list) {
        if (bdeMember.role.includes('pre') || bdeMember.role.includes('vp') || bdeMember.role.includes('sec')) {
            categories['p::vp::sec'].push(bdeMember);
        }
        if (bdeMember.role.includes('event')) categories['event'].push(bdeMember);
        if (bdeMember.role.includes('com')) categories['com'].push(bdeMember);
        if (bdeMember.role.includes('part')) categories['part'].push(bdeMember);
        if (bdeMember.role.includes('acc')) categories['acc'].push(bdeMember);
    }
    const categoriesToSort = Object.entries(categories).map(cat => {
        return {
            category: {
                "p::vp::sec": "Présidence",
                "event": 'Événementiel',
                "part": 'Partenariat',
                "com": 'Communication',
                "acc": 'Trésorerie',
            }[cat[0]],
            members: cat[1],
        }
    });

    // Mettre la présidente en premier, le vice président ensuite, et les responsables de chaque pôle
    categoriesToSort[0].members.sort((a, b) => {
        if (a.role.includes('pre')) return -1;
        if (a.role.includes('vp')) return 1;
        if (a.role.includes('sec')) return 1;
        return 0;
    });

    let i = 1;
    while (i < categoriesToSort.length) {
        console.log(i);
        categoriesToSort[i].members.sort((a, b) => {
            console.log(a.role);
            if (a.role.startsWith('r')) return -1;
            return 1;
        });
        i++;
    }

    return categoriesToSort;
}