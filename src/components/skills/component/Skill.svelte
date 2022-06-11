<script>
    export let value;
    export let name;
</script>

<div class="skill-wrapper">
    <input type="radio" class="radio"/>
    <div class="name">{name}</div>
    <div class="value num">{value > 0 ? "+" : ""}{value}</div>
</div>

<style>
    .skill-wrapper {
        display: flex;
        column-gap: 0.5em;
        border-top: 1px solid burlywood;
        align-items: center;
        margin: 0 0.25em;
    }

    .name {
        font-size: 0.9em;
        color: brown;
    }

    .value {
        text-align: right;
        margin-left: auto;
        padding: 0 1em;
        font-weight: 600;
    }
</style>