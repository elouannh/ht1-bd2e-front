<svelte:head>
    <title>Home</title>
</svelte:head>

<script>
    import images from '../../lib/imageExports.js';
    import PageTemplate from "../PageTemplate.svelte";
    import ContactCategoryContainer from "../components/ContactCategoryContainer.svelte";
    import Divider from "../components/Divider.svelte";
    import Title from "../components/Title.svelte";
</script>

<PageTemplate>
    <Title>Informations</Title>
    <div class="paddgau">
        <p><strong>Ecole</strong></p>
        <p><strong>ÉSTIAM LYON</strong></p>
        <p>Le campus éstiam Lyon poursuit les promesses de l'école : une immersion professionnelle progressive, des professeurs issus du monde de l'entreprise, des effectifs réduits en classe, un programme de cours constamment remis à jour et en adéquation avec le marché du travail.
            Vous y retrouverez notre cursus depuis le Bac jusqu’en Bac+5. Suivez notre formation en informatique à Lyon en initial ou en alternance !
        </p>
    </div>

    <Divider/>

    <div class="paddgau">
        <div class="part">
            <Title>Notre BDE</Title>
            <img src={images.icons.logo} alt="logo_bde" height="200px">
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
            <img src={images.lib.bde} alt="image_bde" height="300px">
        </div>
    </div>

    <Divider/>
    <div class=flex-container-image>
        <ContactCategoryContainer />
    </div>
</PageTemplate>

<style>
    .paddgau{
        padding-left: 300px;
        padding-right: 300px;
        padding-bottom: 50px;
    }

    .desc{    
        display: flex;
        justify-content: space-between;
    }

    .bde{
        padding: 10px;
        justify-content: center;
    }

    * {
        margin: 0;
        padding: 0;
    }

    .part{
        text-align: center;
        padding-bottom: 20px;
    }

    .flex-container-image {
        display: flex;
        padding-top: 10px;
        border-color: #000033;
        justify-content: space-around;
    }
</style>

