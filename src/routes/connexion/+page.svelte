<svelte:head>
    <title>Connexion</title>
</svelte:head>

<script>
    import PageTemplate from '../PageTemplate.svelte';
    import Title from "../components/Title.svelte";
    import {login} from '../../utils.js';

    let email = "";
    let password = "";

    const connect = async () => {
        await login(window, email, password);
    }
</script>

<PageTemplate>
    <section class="container">
        <div class="form-container">
            <Title>Se connecter</Title>
            <form on:submit|preventDefault={connect}>
                <label>
                    Identifiants:
                    <input type="email" name="email" bind:value={email} />
                </label>
                <label>
                    Mot de passe:
                    <input type="password" name="password" bind:value={password} />
                </label>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    </section>
</PageTemplate>

<style>
    * {
		margin: 0;
		padding: 0;
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

    .coco{
        margin-bottom: 50px;
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

    button {
        background-color: rgb(4, 1, 8);
        color: white;
        padding: 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
</style>