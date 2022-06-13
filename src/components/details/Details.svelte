<script lang="ts">
    export let name: string;
    export let race: string;
</script>

<div class="title2">Details</div>
<div class="details-wrapper">
    <div>{name}</div>
    <div class="race num">{race}</div>
</div>

<style>
    .details-wrapper {
        border: 1px solid burlywood;
        display: flex;
    }

    .race {
        margin-left: auto;
        font-size: 0.8em;
        font-weight: 600;
    }
</style>