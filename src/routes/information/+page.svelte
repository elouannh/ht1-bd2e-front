<svelte:head>
    <title>Home</title>
</svelte:head>

<!-----------------------------------------------------------------script------------------------------------------------------------->
<script> 
    import ContactContainer from "../components/ContactContainer.svelte";

    let insta = '/insta.jpg';
    let salwa = '/salwa.png';
    let lise = '/lise.png';
    let elouann = '/elouann.png';
    let antoine = '/antoine.png';
    let aziz = '/aziz.png';
    let quentin = '/quentin.png';
    let alex = '/alex.png';
    let gab = '/gab.png';
    let taha = '/taha.png';
    let will = '/will.png';

    let home = '/home.png';

    let estiam = '/logo_el.png';
    let bdelog = '/bdelog.png';
    let bde = '/bde.jpg';
</script>

<!--------------------------------------------------------------fin script----------------------------------------------------------->
<!--------------------------------------------------------------Affichage------------------------------------------------------------>
<!--------------------------------------------------------------barre site----------------------------------------------------------->
<h1 class="titre">
    BDE ÉSTIAM LYON
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
<!----------------------------------------------------------------code-------------------------------------------------------------->
<h3 class="part"><strong>INFORMATION</strong></h3>
<div class="paddgau">                                <!------ecole et bde description------->
    <p><strong>Ecole</strong></p>
    <p><strong>ÉSTIAM LYON</strong></p>
    <p>Le campus éstiam Lyon poursuit les promesses de l'école : une immersion professionnelle progressive, des professeurs issus du monde de l'entreprise, des effectifs réduits en classe, un programme de cours constamment remis à jour et en adéquation avec le marché du travail.
        Vous y retrouverez notre cursus depuis le Bac jusqu’en Bac+5. Suivez notre formation en informatique à Lyon en initial ou en alternance !
    </p>
</div>

<div class="divider"></div>

<div class="paddgau">
    <div class="part">
        <h3><strong>Notre BDE</strong></h3>
    <img src={bdelog} alt="logo_bde" height="200px">
    </div>
    <p><strong>Qui sommes-nous?</strong></p>
    <p>
        Le Bureau des Étudiants (BDE) ÉSTIAM LYON est une communauté dynamique et passionnée, créée il y a deux ans avec pour mission principale de dynamiser la vie étudiante au sein de notre école. Depuis notre début, nous avons travaillé sans relâche pour créer une atmosphère conviviale et enrichissante pour tous nos camarades.
    </p>
    <p><strong>Notre Vision : Se Développer Ensemble</strong></p>
    <p>Fort de deux années d'expérience, notre BDE aspire à un développement continu. Nous croyons en l'importance de créer des liens solides au sein de notre communauté étudiante et à l'extérieur. Nous sommes animés par la volonté de fournir à nos étudiants des expériences mémorables tout au long de leur parcours académique.</p>
    <p><strong>Partenariats pour l'Avenir</strong></p>
    <p>Afin de réaliser pleinement notre vision, nous sommes actuellement à la recherche de partenariats solides avec des entreprises locales et des organisations passionnées. Ces partenariats nous permettront d'organiser des événements exceptionnels, de proposer des avantages exclusifs aux étudiants, et de contribuer au développement global de notre communauté.</p>
    <p><strong>Ce Que Nous Offrons:</strong></p>
    <ul class="list ">
        <li>Des soirées inoubliables</li>
        <li>Des avantages exclusifs pour les étudiants</li>
        <li>Un réseau de partenaires engagés</li>
        <li>Une communauté dynamique et solidaire</li>
    </ul>
    <p><strong>Rejoignez-nous dans cette Aventure !</strong></p>
    <p>Que vous soyez un étudiant enthousiaste ou une entreprise partageant nos valeurs, nous vous invitons à faire partie de cette aventure. Ensemble, nous pouvons créer un environnement étudiant exceptionnel et bâtir un avenir prometteur.
    Restez connectés pour découvrir nos prochains événements, partenariats et initiatives. Merci de soutenir le BDE ÉSTIAM LYON !</p>
    <div class="bde desc">
        <img src={bde} alt="image_bde" height="300px">
    </div>
</div>                                                                          <!------fin ecole et bde description------->

<div class="divider"></div>
<div class=flex-container-image>                                               <!-------------liste bde--------------->

    <ContactContainer />

</div>                                               <!-------------liste bde--------------->
<!--------------------------------------------------------------fin code------------------------------------------------------------>
<!--------------------------------------------------------------pied de page-------------------------------------------------------->
<div class="divider"></div>
<div class="footer">
<div class="flex-container">
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
        <p><strong>Instagram</strong></p>
        <img src={insta} alt="logo_insta" height="50px"/>
    </div>
</div>

<div class="dividerbot"></div>

<div class="container-ment footer">
	<div class="ment">Politique de confidentialité</div>
	<div class="ment">Mentions Légales</div>
</div>
</div>
<!--------------------------------------------------------------FIN pied de page----------------------------------------------------->
<!---------------------------------------------------------Fin Affichage------------------------------------------------------------->
<!-----------------------------------------------------------------style------------------------------------------------------------->
<style>


    .paddgau{
        padding-left: 10px;
    }


    .desc{    
        display: flex;
        justify-content: space-between;
    }

    .bde{
        padding: 10px;
        justify-content: center;
    }
    
    .bde-section{
    border-right: 1px solid #dadada;
    border-left: 1px solid #dadada;
    padding-right: 100px;
    padding-left: 110px;
    }

    .center{
        text-align: center;
    }
    .list{
        padding-left: 10px;
    }
/***************ne pas utiliser***************/
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

    .part{
        text-align: center;
        padding-bottom: 20px;
    }

    .barre {
        display: flex;
        justify-content: space-between;
        margin: 0;
        width: 100%;
        background-color: rgb(97, 13, 176);
    }

    .flex-container {
        display: flex;
        padding-top: 10px;
        border-color: #000033;
        justify-content: space-around;
        color: white;
    }
    .flex-container-image {
        display: flex;
        padding-top: 10px;
        border-color: #000033;
        justify-content: space-around;
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

</style><!------------------------------------------------------Fin Style------------------------------------------------------------->

