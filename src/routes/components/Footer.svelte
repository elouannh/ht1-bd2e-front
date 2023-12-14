<script>
    import images from '../../lib/imageExports.js';
</script>

<section>
    <div class="divider"></div>

    <div class="flex-container footer">
        <div class="zbeub">
            <h2><strong>Aide</strong></h2>
            <p>nous contacter</p>
            <p>qui sommes nous</p>
        </div>
        <div class="zbeub">
            <a href="https://www.estiam.education/">
                <img src={images.lib.bde} alt="estiam_logo_LYON" height="50px"/>
            </a>
        </div>
        <div class="gaef">
            <h2><strong>Suivez nous!</strong></h2>
            <img src={images.icons.instagram} alt="logo_insta" height="50px"/>
        </div>
    </div>

    <div class="dividerbot"></div>

    <div class="container-ment footer">
        <div class="ment">Politique de confidentialité</div>
        <div class="ment">Mentions Légales</div>
    </div>
</section>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    section {
        border-right: 1px solid white;
        height: 100vh;
        scroll-snap-align: start;
        text-align: center;
    }

    .flex-container {
        display: flex;
        padding-top: 10px;
        border-color: #000033;
        justify-content: space-around;
        color: white;
    }

    .zbeub {
        width: 30%;
        text-align: center;
    }

    .gaef {
        width: 30%;
        text-align: center;
    }

    .divider {
        border: 1px solid #dadada;
        width: 100%;
    }

    .dividerbot{
        border: 1px solid #6d4e77;
        width: 100%;
    }

    .footer {
        background:rgb(76, 10, 137);
    }

    .container-ment{
        display: flex;
        justify-content:center ;
        color: white;
    }
    .ment{
        padding-right: 20px;
    }
</style>