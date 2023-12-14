<script>
    import Header from './components/Header.svelte';
    import Footer from './components/Footer.svelte';
</script>

<Header />

<div class="content">
    <!-- Le contenu de votre page va ici -->
    <slot></slot>
</div>

<Footer />

<style>
    * {
        padding: 0;
        margin: 0;
    }
</style>