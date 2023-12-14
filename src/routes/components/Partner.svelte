<script>
    import {renderImage} from "../../utils.js";

    /**
     * @type {import('../../utils.js').SolutionObject | null}
     */
    export let partnerData;
</script>

{#if partnerData}
    <section>
        <div class="partner">
            <div class="partner-images-container">
                {#each partnerData.images.split("::") as image}
                    <div class="partner-image">
                        <img src={renderImage(image)} alt={partnerData.name}/>
                    </div>
                {/each}
            </div>
            <div class="text-container">
                <div class="partner-banner">
                    <img src={renderImage(partnerData.banner)} alt={partnerData.name}/>
                </div>
                <div class="partner-name">
                    <h6>{partnerData.name}</h6>
                </div>
                <div class="partner-offer">
                    <h6>{partnerData.offer}</h6>
                </div>
                <div class="partner-working-area">
                    <h6>{partnerData.working_area}</h6>
                </div>
            </div>
        </div>
    </section>
{/if}

<style>
    .partner-image img {
        width: 400px;
    }

    .partner-images-container {
        display: flex;
        justify-content: space-between;
    }

    .partner-images-container .partner-image {
        display: inline-block;
        flex: 1;
    }

    .partner-images-container img {
        height: 300px;
        object-fit: cover;
    }

    .text-container {
        font-size: 200%;
        margin: 0 auto;
    }

    .partner-name {
        font-size: 200%;
    }

    .partner-offer {
        font-size: 90%;
    }

    .partner-working-area {
        font-size: 90%;
    }

    .partner-banner img {
        height: 100px;
    }

</style>