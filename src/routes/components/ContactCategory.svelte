<script>
    import Contact from './Contact.svelte';
    import Title from './Title.svelte';

    /**
     * @type {{ category: string, members: (import('../../utils.js').SolutionObject)[] }}
     */
    export let category;
</script>

<div class="contact-container">
    {#if category}
        <div class="contact-title">
            <Title>{category.category}</Title>
        </div>
        <div class="contact-list">
            {#each category.members as guestData}
                <Contact {guestData}/>
            {/each}
        </div>
    {/if}
</div>

<style>
    .contact-container {
        display: flex;
        flex-direction: column;
        margin: 10px;
    }

    .contact-title {
        text-align: center;
    }

    .contact-list {
        display: flex;
        flex-direction: column;
    }
</style>