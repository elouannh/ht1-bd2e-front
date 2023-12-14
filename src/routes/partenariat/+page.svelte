<svelte:head>
    <title>Partenriat</title>
</svelte:head>

<!-----------------------------------------------------------------SCRIPT------------------------------------------------------------->
<script> 
    let insta = '/insta.jpg';
    let keeep = '/keepcool.png';
    let momie = '/momie.jpeg';
    let kamon = '/kamon.png';

    let home = '/home.png';

    let estiam = '/logo_el.png';

    let sections =[
        "/momielib.jpg",
        "/kamonlib.jpg",
        "/keep1.jpg",
        "/keep2.jpg",
        "/keep3.jpg",
    ]
</script>
<!--------------------------------------------------------------FIN SCRIPT----------------------------------------------------------->
<!--------------------------------------------------------------AFFICHAGE------------------------------------------------------------>
<!--------------------------------------------------------------barre site----------------------------------------------------------->

<h1 class="titre">
    ÉSTIAM LYON
</h1>

<div class="barre">
    <a href="/"> <button class="but"> <img src={home} alt="home" width="20" height="20"/> </button> </a>
    <a href="/evenement"> <button class="but">Evènement</button> </a>
    <a href="/information"> <button class="but">Information</button> </a>
    <a href="/partenariat"> <button class="but">Nos Partenariat</button> </a>
    <a href="/rejoindre_contacter"> <button class="but">Nous contacter / Nous rejoindre</button> </a>
    <a href="/connexion"> <button class="but">Connexion</button> </a>
</div>     
<!--------------------------------------------------------------FIN barre site------------------------------------------------------>

<!----------------------------------------------------------------CODE-------------------------------------------------------------->
<h3 class="part"><strong>NOS PARTENAIRES</strong></h3>
<div class="slider">  <!--------slide image-------->
    {#each sections as section}
        <section>
            <img src={section} alt="image_des_partenaires" height="500px"/>
        </section>    
    {/each}
</div>
<div class="divider"></div> <!-------- fin slide image-------->
<div class="desc espac">   <!-------- partenaires explication-------->   
    <div>    <!--Momie-->
        <img src={momie} alt="logo_momie" height="75px" />
        <p><strong> Momie Librairie</strong></p>
        <p> -5% Sur l'ensemble des boutiques</p>
    </div>    <!--fin Momie-->
        <div>   <!--kamon shoten-->
            <img src={kamon} alt="logo_kamon" height="75px" />
            <p><strong> Kamon Shoten</strong></p>
            <p> -5% sur la ventre de manga </p>
            <p> -5% sur la restauration </p>
        </div><!--fin kamon shoten-->
            <div>    <!--keepcool-->
                <img src={keeep} alt="logo_keep" height="75px"/>
                <p><strong> Keepcool</strong></p>
                <p> Les 3 premiers mois à 9,90€</p>
            </div><!--fin keepcool-->
</div>     <!--------fin partenaires explication-------->   
<!--------------------------------------------------------------FIN CODE------------------------------------------------------------>
<!--------------------------------------------------------------pied de page-------------------------------------------------------->

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
<!--------------------------------------------------------------FIN pied de page----------------------------------------------------->
<!---------------------------------------------------------FIN AFFICHAGE------------------------------------------------------------->
<!-----------------------------------------------------------------STYLE------------------------------------------------------------->
<style>
    * {
        margin: 0;
        padding: 0;
    }
    
    .espac{
        justify-content: space-around;
    }

    .desc{
        display: flex;
        padding: 10px;
    }

    .part{
        text-align: center;
        padding-bottom: 20px;
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
        height: 100vh;
        scroll-snap-align: start;
        text-align: center;
    }
    .slider {
        font-family: sans-serif;
        scroll-snap-type: x mandatory;    
        display: flex;
        -webkit-overflow-scrolling: touch;
        overflow-x: scroll;
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
</style><!------------------------------------------------------FIN STYLE------------------------------------------------------------->

