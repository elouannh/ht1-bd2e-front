<script>
    import images from '../../lib/imageExports.js';
    import {logout, renderName} from '../../utils.js';
    /**
     * @type {import('../../utils.js').SolutionObject | null}
     */
    let localData;

    setInterval(() => {
        try {
            if (window) localData = window.localStorage;
        }
        catch (err) {
            void err;
        }
    }, 200);

    const disconnect = () => {
        logout(window);
    }
</script>

<section>
    <h1 class="titre">
        BDE ÉSTIAM LYON
    </h1>

    <div class="barre">
        <a href="/"> <button class="but"> <img src={images.icons.home} alt="home" width="20" height="20"/> </button> </a>
        <a href="/events"> <button class="but">Événements</button> </a>
        <a href="/informations"> <button class="but">Informations</button> </a>
        <a href="/partenaires"> <button class="but">Partenaires</button> </a>
        <a href="/contact"> <button class="but">Nous Contacter</button> </a>

        {#if localData?._first_name}
            <h2 class="loggedinas">{renderName(localData._last_name, localData._first_name)}</h2>
            <button class="but" on:click={disconnect}>Se déconnecter</button>
        {:else}
            <a href="/connexion"> <button class="but">Connexion</button> </a>
        {/if}
    </div>
</section>

<style>
    .loggedinas {
        color: white;
        font-size: 20px;
        padding: 10px;
        font-family: "IBM Plex Sans","sans-serif";
    }
    * {
        margin: 0;
        padding: 0;
    }
    .but {
        text-align: center;
        background-color: rgb(97, 13, 176);
        border: none;
        font-size: 20px;
        padding: 10px;
        color:white;
        transition: box-shadow 0.3s ease;
    }
    .but:hover {
        background-color:rgb(76, 10, 137);
    }

    .titre    {
        text-align: center;
        padding: 5px;
        color:white;
        font-family: "IBM Plex Sans","sans-serif";
        background-color: #000033;
    }

    .barre {
        display: flex;
        justify-content: space-between;
        margin: 0;
        width: 100%;
        background-color: rgb(97, 13, 176);
    }
    section {
        border-right: 1px solid white;
        scroll-snap-align: start;
        text-align: center;
    }
</style>