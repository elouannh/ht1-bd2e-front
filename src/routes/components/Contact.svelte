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
            <img src={renderImage(guestData.picture)} alt={renderName(guestData.last_name, guestData.first_name)} />
        </div>
        <div class="contact-name">
            <h1>{renderName(guestData.last_name, guestData.first_name)}</h1>
        </div>
        <div class="contact-role">
            <h2>{getRole(guestData.role, true).length ? getRole(guestData.role, true).join("\n") : ""}</h2>
        </div>
        <div class="contact-email">
            <h4>{guestData.email}</h4>
        </div>
    </div>
</section>
{/if}

<style>
    .contact-portait img {
        width: 75px;
    }

    .contact-name {
        font-size: 150%
    }
    .contact {
        border-bottom: #606060 1px solid;
    }
</style>