<svelte:head>
    <title>evenement</title>
</svelte:head>

<!-----------------------------------------------------------------SCRIPT------------------------------------------------------------->
<script> 
    let home = '/home.png';
    let insta = '/insta.jpg';
    let estiam = '/logo_el.png';

    let sections =[
        "/ski1.jpg",
        "/ski2.jpg",
        "/ski3.jpg",
        "/lol1.jpg",
        "/lol2.jpg",
        "/conf1.jpg",
        "/conf2.jpg",
        "/conf3.jpg",
    ]

    import PageTemplate from '../PageTemplate.svelte';
</script>
<!--------------------------------------------------------------FIN SCRIPT----------------------------------------------------------->
<!--------------------------------------------------------------AFFICHAGE------------------------------------------------------------>

<PageTemplate>
    <!----------------------------------------------------------------CODE-------------------------------------------------------------->
    <h3 class="part"><strong>Événements</strong></h3>
    <div class="slider">
        {#each sections as section}
            <section>
                <img src={section} alt="image_des_evenements" height="500px"/>
            </section>
        {/each}
    </div>
    <!--------------------------------------------------------------FIN CODE------------------------------------------------------------>

</PageTemplate>
<!---------------------------------------------------------FIN AFFICHAGE------------------------------------------------------------->
<!-----------------------------------------------------------------STYLE------------------------------------------------------------->
<style>
    * {
        margin: 0;
        padding: 0;
    }

    .part{
        text-align: center;
        padding-bottom: 20px;
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
</style><!------------------------------------------------------FIN STYLE------------------------------------------------------------->
