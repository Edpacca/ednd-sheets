<script lang="ts">
    import { character } from "../../store/characterStore";
    import Hitpoints from "../hitpoints/Hitpoints.svelte";
    import Inspiration from "../inspiration/Inspiration.svelte";
    const imageUrl = "https://www.dndbeyond.com/avatars/12070/813/1581111423-33548730.jpeg?width=150&height=150&fit=crop&quality=95&auto=webp";
</script>

<div class="details-wrapper bordered">
    <div>
        <div class="name">{$character.name}</div>
        <div class="detail">{$character.race} | {$character.class}</div>
        <div class="hp-inspiration-wrapper">
            <Hitpoints />
            <Inspiration />
        </div>
    </div>
    <div class="image-wrapper">
        <img src={imageUrl} alt="character" class="image"/>
        <div style="--hp-height: {(150 - 150 * $character.hpCurrent / $character.hpMax).toString() + "px"}" class="hp-blood"/>
    </div>
</div> 

<style>
    .details-wrapper {
        padding: 0.2em;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .detail {
        font-size: 0.9em;
        font-weight: 600;
    }

    .name {
        font-size: 1.2em;
    }

    .image-wrapper {
        margin-left: auto;
        position: relative;
    }

    .image {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border: 4px solid brown;
        border-radius: 4px;
    }

    .hp-inspiration-wrapper {
        margin-top: 0.5em;
        display: grid;
        grid-template-columns: 50% 3em;
        grid-template-rows: 3em;
        column-gap: 0.5em;
    }

    .hp-blood {
        background-color: rgb(133, 0, 0);
        opacity: 0.5;
        height: var(--hp-height);
        width: 150px;
        top: calc(154px - var(--hp-height));
        left: 4px;
        z-index: 1;
        position: absolute;
    }
</style>
