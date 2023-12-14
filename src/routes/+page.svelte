<script>
	import PageTemplate from "./PageTemplate.svelte";
	import EventContainer from "./components/EventContainer.svelte";
	import Divider from "./components/Divider.svelte";
	import Slider from "./components/Slider.svelte";
</script>

<svelte:head>
	<title>Accueil</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<PageTemplate>
	<Slider>
		<EventContainer/>
	</Slider>

	<Divider/>
</PageTemplate>

<style>
	* {
		margin: 0;
		padding: 0;
	}
</style>

