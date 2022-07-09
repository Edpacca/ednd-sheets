<script lang="ts">
    import { character } from "../../store/characterStore";
</script>

<div class="title2">Details</div>
<div class="details-wrapper">
    <div>{$character.name}</div>
    <div class="race num">{$character.race}</div>
    <div>level {$character.level} {$character.class}</div>
    <input type="text" bind:value={$character.name}/>
</div>

<style>
    .details-wrapper {
        border: 1px solid burlywood;
    }

    .race {
        margin-left: auto;
        font-size: 0.8em;
        font-weight: 600;
    }
</style>
