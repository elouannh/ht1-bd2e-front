<script>

</script>

<section>
    <div class="content">
        <slot></slot>
    </div>
</section>

<style>
    .content {
        font-family: sans-serif;
        scroll-snap-type: x mandatory;
        display: flex;
        -webkit-overflow-scrolling: touch;
        overflow-x: scroll;
    }
</style>