<script>
    import {getRole, renderName, renderImage} from "../../utils.js";

    /**
     * @type {import('../../utils.js').SolutionObject | null}
     */
    export let guestData;
</script>

{#if guestData}
<section>
    <div class="contact">
        <div class="contact-portait">
            <img src={renderImage(guestData.picture)} alt={renderName(guestData.last_name, guestData.first_name)} width="80px" height="50px"/>
        </div>
        <div class="contact-name">
            <h1>{renderName(guestData.last_name, guestData.first_name)}</h1>
        </div>
        <div class="contact-role">
            <h2>{getRole(guestData.role).join("\n")}</h2>
        </div>
        <div class="contact-email">
            <h4>{guestData.email}</h4>
        </div>
    </div>
</section>
{/if}

<style>

</style>