<script>
	import {login, logout} from '../utils.js';
	/**
	 * @type {import('../utils.js').SolutionObject | null}
	 */
	let data = null;
	/**
	 * @type {import('../utils.js').SolutionObject | null}
	 */
	let localData = null;
	let requestRoute = async () => data = await login(window, "totozbeub2@zbeub.toto", "admin");

	setInterval(() => {
		try {
			if (window) localData = window.localStorage;
		}
		catch (err) {
			void err;
		}
	}, 200);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

	<button on:click={requestRoute}>Click me!</button>

	<div id="data">
		{#if localData === null}
			<p>Loading...</p>
		{:else if localData && localData.getItem('_last_name') && localData.getItem('_first_name')}
			<pre>{String(localData.getItem('_last_name')).toUpperCase()} {localData.getItem('_first_name')}</pre>
		{:else}
			<p>Please login.</p>
		{/if}
	</div>

	<button on:click={() => logout(window)}>Disconnect</button>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
