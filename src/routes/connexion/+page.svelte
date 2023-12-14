<svelte:head>
    <title>Connexion</title>
</svelte:head>

<!-----------------------------------------------------------------SCRIPT------------------------------------------------------------->
<script> 
    let insta = '/insta.jpg';
    let estiam = '/logo_el.png';
    let home = '/home.png';

</script>
<!--------------------------------------------------------------FIN SCRIPT----------------------------------------------------------->
<!--------------------------------------------------------------AFFICHAGE------------------------------------------------------------>
<h1 class="titre">
    BDE ESTIAM LYON
</h1>

<div class="barre">
    <a href="/"> <button class="but"> <img src={home} alt="home" width="20" height="20"/> </button> </a>
    <a href="/evenement"> <button class="but">Evènement</button> </a>
    <a href="/information"> <button class="but">Information</button> </a>
    <a href="/partenariat"> <button class="but">Nos Partenariat</button> </a>
    <a href="/rejoindre_contacter"> <button class="but">Nous contacter / Nous rejoindre</button> </a>
    <a href="/connexion"> <button class="but">Connexion</button> </a>
</div>   

<!----------------------------------------------------------------code-------------------------------------------------------------->
<section class="container">
    <div class="form-container">
        <div class="coco">
            <h3><strong>Connexion</strong></h3>
        </div>
        <form>
            <label>
                Identifiants:
                <input type="email" name="email" />
            </label>
            <label>
                Mot de passe:
                <input type="password" name="password" />
            </label>
            <button type="submit">Se connecter</button>
        </form>
    </div>
</section>
<!--------------------------------------------------------------fin code------------------------------------------------------------>
<div class="divider"></div>

<div class="flex-container footer">
    <div class="zbeub">
        <h2><strong>Aide</strong></h2>
        <p>nous contacter</p>
        <p>qui sommes nous</p>
    </div>
    <div class="zbeub">
        <a href="https://www.estiam.education/">
            <img src={estiam} alt="estiam_logo_LYON" height="50px"/>
        </a>
    </div>
    <div class="gaef">
        <h2><strong>Suivez nous!</strong></h2>
        <img src={insta} alt="logo_insta" height="50px"/>
    </div>
</div>

<div class="dividerbot"></div>

<div class="container-ment footer">
	<div class="ment">Politique de confidentialité</div>
	<div class="ment">Mentions Légales</div>
</div>
<!---------------------------------------------------------Fin Affichage------------------------------------------------------------->
<!-----------------------------------------------------------------style------------------------------------------------------------->
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
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 0.6;
        background-image: url('https://media.botmarket.ovh/xttn4m.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 1200px 800px;
        color: white;
        padding: 40px;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .container {
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
    .coco{
        margin-bottom: 50px;
    }
    .dividerbot{
        border: 1px solid #6d4e77;
        width: 100%; 
    }
	.container-ment{
		display: flex;
		justify-content:center ;
	}
	.ment{
		padding-right: 20px;
	}

    .form-container {
        margin-top: 20px;
        background-color: rgb(97, 13, 176);
        padding: 80px;
        border-radius: 8px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    }

    label { 
        display: block;
        margin-bottom: 10px;
		color: white;
    }

    input {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid blueviolet;
        border-radius: 4px;
    }

    .container-ment{
		display: flex;
		justify-content:center ;
        color: white;
	}

    button {
        background-color: rgb(4, 1, 8);
        color: white;
        padding: 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .footer {
        background:rgb(76, 10, 137);
    }
</style>