<svelte:head>
    <title>Partenriat</title>
</svelte:head>

<script>
    import PageTemplate from "../PageTemplate.svelte";
    import PartnerContainer from "../components/PartnerContainer.svelte";
    import Divider from "../components/Divider.svelte";

</script>

<PageTemplate>
    <h3 class="part"><strong>NOS PARTENAIRES</strong></h3>
    <Divider/>

    <div class="desc espac">
        <PartnerContainer/>
    </div>
</PageTemplate>

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
</style>

