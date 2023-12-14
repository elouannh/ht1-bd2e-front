<script>
    import {renderImage} from "../../utils.js";

    /**
     * @type {import('../../utils.js').SolutionObject | null}
     */
    export let eventData;
</script>

{#if eventData}
    <section>
        <div class="event">
            <div class="event-images-container">
                {#each eventData.images.split("::") as image}
                    <div class="event-image">
                        <img src={renderImage(image)} alt={eventData.name}/>
                    </div>
                {/each}
            </div>
            <div class="text-container">
                <div class="event-name">
                    <h1>{eventData.name}</h1>
                </div>
                <div class="event-schedule">
                    <h3>{eventData.schedule}</h3>
                </div>
                <div class="event-infos">
                    <h6>Lieu: {eventData.place}</h6>
                    <h6>Prix: {eventData.price}€ ({eventData.bde_discount}€ BDE)</h6>
                    <h6>Requis: {eventData.requirements}</h6>
                </div>
            </div>
        </div>
    </section>
{/if}

<style>
    .event {
        width: 100%;
    }

    .text-container {
        font-size: 200%;
        width: 50%;
        margin: 0 auto;
    }

    .event-name {
        font-size: 200%;
    }

    .event-schedule {
        font-size: 90%;
    }

    .event-images-container {
        display: flex;
        justify-content: space-between;
    }

    .event-images-container .event-image {
        display: inline-block;
        flex: 1;
    }

    .event-images-container img {
        height: 500px;
        object-fit: cover;
    }
</style>