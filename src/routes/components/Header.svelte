<script>
    import images from '../../lib/imageExports.js';
</script>

<section>
    <h1 class="titre">
        BDE ÉSTIAM LYON
    </h1>

    <div class="barre">
        <a href="/"> <button class="but"> <img src={images.icons.logo} alt="home" width="20" height="20"/> </button> </a>
        <a href="/evenement"> <button class="but">Evènement</button> </a>
        <a href="/information"> <button class="but">Information</button> </a>
        <a href="/partenariat"> <button class="but">Nos Partenariat</button> </a>
        <a href="/rejoindre_contacter"> <button class="but">Nous contacter / Nous rejoindre</button> </a>
        <a href="/connexion"> <button class="but">Connexion</button> </a>
    </div>
</section>

<style>
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
        height: 100 vh;
        scroll-snap-align: start;
        text-align: center;
    }
</style>