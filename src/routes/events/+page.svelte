<svelte:head>
    <title>evenement</title>
</svelte:head>

<script>
    import PageTemplate from '../PageTemplate.svelte';
    import EventContainer from "../components/EventContainer.svelte";
    import Slider from "../components/Slider.svelte";
    import Title from "../components/Title.svelte";
</script>

<PageTemplate>
    <Title>Événements</Title>
    <Slider>
        <EventContainer/>
    </Slider>
</PageTemplate>

<style>
    * {
        margin: 0;
        padding: 0;
    }
</style>
