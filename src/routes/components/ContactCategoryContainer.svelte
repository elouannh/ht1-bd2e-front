<script>
    import {getGuests, sortRoles} from "../../utils.js";
    import ContactCategory from './ContactCategory.svelte';
    import Slider from './Slider.svelte';

    /**
     * @type {{ category: string, members: import('../../utils.js').SolutionObject[] }[]}
     */
    let categories = [{ category: "", members: [] }];

    (async () => {
        const data = (await getGuests());
        categories = sortRoles(data);
    })()
</script>

{#if categories?.length}
    <Slider>
        {#each categories as category}
            <ContactCategory {category}/>
        {/each}
    </Slider>
{/if}

<style>

</style>