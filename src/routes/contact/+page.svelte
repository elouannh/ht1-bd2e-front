<svelte:head>
    <title>Home</title>
</svelte:head>

<script>
    import PageTemplate from '../PageTemplate.svelte';
    import Title from "../components/Title.svelte";
</script>

<PageTemplate>
    <section class="container">
        <div class="form-container">
            <Title>Nous Contacter</Title>
            <form>
                <label>
                    Nom:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Message:
                    <textarea name="message"></textarea>
                </label>
                <label>
                    Joindre un fichier:
                    <input type="file" name="attachment" accept=".pdf, .doc, .docx" />
                </label>
                <button type="submit">Envoyer</button>
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
        background-size: 1300px 900px;
        color: white;
        padding: 40px;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .form-container {
        margin-top: 20px;
        background-color: rgb(97, 13, 176);
        padding: 80px;
        border-radius: 8px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    }
    .coco{
        margin-bottom: 50px;
        text-align: center;
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

    textarea {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid rgb(97, 13, 176);
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

    .roles-checkboxes {
        display: flex;
        gap: 100px;
    }
</style>

