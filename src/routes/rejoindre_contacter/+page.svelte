<svelte:head>
    <title>Home</title>
</svelte:head>

<!-----------------------------------------------------------------script------------------------------------------------------------->
<script> 
    import images from '../../lib/imageExports.js';
    import PageTemplate from '../PageTemplate.svelte';
</script>
<!--------------------------------------------------------------fin script----------------------------------------------------------->
<!--------------------------------------------------------------Affichage------------------------------------------------------------>

<PageTemplate>
    <!----------------------------------------------------------------code-------------------------------------------------------------->
    <section class="container">
        <div class="form-container">
            <div class="coco">
                <h3><strong>Connexion</strong></h3>
            </div>
            <form>
                <div class="roles-checkboxes" style="margin-bottom: 30px;">
                    <label>
                        <input type="radio" name="role" value="Partenaire" />
                        Partenaire
                    </label>

                    <label>
                        <input type="radio" name="role" value="Elève" />
                        Élève
                    </label>

                    <label>
                        <input type="radio" name="role" value="Autre" />
                        Autres
                    </label>
                </div>
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
    <!--------------------------------------------------------------fin code------------------------------------------------------------>
</PageTemplate>
<!---------------------------------------------------------Fin Affichage------------------------------------------------------------->
<!-----------------------------------------------------------------style------------------------------------------------------------->
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
    .but {
        text-align: center;
        background-color: rgb(97, 13, 176);
        border: none;
        font-size: 20px;
        padding: 10px;
        color:white;
        transition: box-shadow 0.3s ease;
    }
    .coco{
        margin-bottom: 50px;
        text-align: center;
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

    .flex-container {
        display: flex;
        padding-top: 10px;
        border-color: #000033;
        justify-content: space-around;
        color: white;
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
        gap: 100px; /* Ajout d'un espacement entre les cases à cocher */
    }

    .container-ment{
		display: flex;
		justify-content:center ;
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
	.container-ment{
		display: flex;
		justify-content:center ;
	}
	.ment{
		padding-right: 20px;
	}
    .footer {
        background:rgb(76, 10, 137);
    }
</style><!------------------------------------------------------Fin Style------------------------------------------------------------->

