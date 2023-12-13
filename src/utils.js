import { baseURL } from "./constants.json";
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
    console.log(response);
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

        window.location.href = "/";
        window.location.reload();
    }
    return received;
}

/**
 * @param {Window} window
 * @returns {Promise<void>}
 */
export const logout = window => {
    window.localStorage.clear();
    window.location.href = "/";
    window.location.reload();
}