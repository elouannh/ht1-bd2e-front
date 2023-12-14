<script>
	import {login, logout} from '../utils.js';
	import imageExports from "$lib/imageExports.js";
	/**
	 * @type {import('../utils.js').SolutionObject | null}
	 */
	let localData = null;
	let requestRoute = async () => await login(window, "totozbeub2@zbeub.toto", "admin");

	setInterval(() => {
		try {
			if (window) localData = window.localStorage;
		}
		catch (err) {
			void err;
		}
	}, 200);


// -----------------------------------------------------------------SCRIPT------------------------------------------------------------- >

	let home = imageExports.icons.home;
	let insta = imageExports.icons.instagram;
	let estiam = imageExports.icons.logo;

	let sections =[
		"/ski1.jpg",
		"/ski2.jpg",
		"/ski3.jpg",
		"/keep1.jpg",
		"/keep2.jpg",
		"/keep3.jpg",
		"/lol1.jpg",
		"/lol2.jpg",
		"/momielib.jpg",
		"/kamonlib.jpg",
	]
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

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
<!----------------------------------------------------------------CODE-------------------------------------------------------------->

<div class="slider">
	{#each sections as section}
		<section>
			<img src={section} alt="image_des_evenements" height="500px"/>
		</section>
	{/each}
</div>
<!--------------------------------------------------------------FIN CODE------------------------------------------------------------>

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
<!---------------------------------------------------------FIN AFFICHAGE------------------------------------------------------------->
<!-----------------------------------------------------------------STYLE------------------------------------------------------------->

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

