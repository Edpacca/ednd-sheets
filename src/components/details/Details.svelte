<script lang="ts">
    import { character } from "../../store/characterStore";
    export let name: string;
    export let race: string;
</script>

<div class="title2">Details</div>
<div class="details-wrapper">
    <div>{name}</div>
    <div class="race num">{race}</div>
    <div>level {$character.level} {$character.class}</div>
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