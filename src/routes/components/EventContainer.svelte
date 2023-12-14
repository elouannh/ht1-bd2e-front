<script>
    import {getEvents} from "../../utils.js";
    import Event from './Event.svelte';
    import Slider from './Slider.svelte';

    /**
     * @type {(import('../../utils.js').SolutionObject)[]}
     */
    let eventDatas = [];

    (async () => eventDatas = (await getEvents()))()
</script>

{#if eventDatas?.length}
    <Slider>
        {#each eventDatas as eventData}
            <Event {eventData}/>
        {/each}
    </Slider>
{/if}

<style>

</style>