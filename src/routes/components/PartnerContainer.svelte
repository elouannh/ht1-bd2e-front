<script>
    import {getPartners} from "../../utils.js";
    import Partner from './Partner.svelte';
    import Slider from "./Slider.svelte";

    /**
     * @type {(import('../../utils.js').SolutionObject)[]}
     */
    let partnerDatas = [];

    (async () => partnerDatas = (await getPartners()))()
</script>

{#if partnerDatas?.length}
    <Slider>
        {#each partnerDatas as partnerData}
            <Partner {partnerData}/>
        {/each}
    </Slider>
{/if}

<style>

</style>