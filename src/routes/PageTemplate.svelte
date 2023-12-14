<script>
    import Header from './components/Header.svelte';
    import Footer from './components/Footer.svelte';
    /**
     * @type {import('../utils.js').SolutionObject | null}
     */
    let localData = null;

    setInterval(() => {
        try {
            if (window) localData = window.localStorage;
        }
        catch (err) {
            void err;
        }
    }, 200);
</script>

<section>
    <Header/>

    <div class="content">
        <slot></slot>
    </div>

    <Footer />
</section>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    body {
        min-height: 100vh;
    }
</style>