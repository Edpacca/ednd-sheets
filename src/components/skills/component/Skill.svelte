<script>
    export let value;
    export let name;
</script>

<div class="skill-wrapper">
    <div class="name">{name}</div>
    <div class="value">{value > 0 ? "+" : ""}{value}</div>
</div>

<style>
    .skill-wrapper {
        display: grid;
        grid-template-columns: 1fr 4em;
        padding: 0.3em;
        border: 1px solid burlywood;

    }

    .value {
        text-align: right;
        padding: 0 1em;
        font-weight: 600;
    }
</style>