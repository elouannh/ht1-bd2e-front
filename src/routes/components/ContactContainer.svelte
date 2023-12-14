<script>
    import {getGuests} from "../../utils.js";
    import Contact from './Contact.svelte';

    /**
     * @type {(import('../../utils.js').SolutionObject)[]}
     */
    let guestDatas = [];

    (async () => guestDatas = (await getGuests()))()
</script>

{#if guestDatas?.length}
    {#each guestDatas as guestData}
        <Contact {guestData}/>
    {/each}
{/if}

<style>

</style>