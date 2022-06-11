<script>
    export let mod;
    export let name;
</script>

<div class="bonus-wrapper">
    <div class="name">{name}</div>
    <div class="mod num">{`${mod > 0 ? "+" : ""}${mod}`}</div>
</div>

<style>
    .bonus-wrapper {
        border: 2px solid burlywood;
        border-radius: 4px;
        text-align: center;
        padding: 0.25em;
    }

    .mod {
        font-size: 2em;
        border-top: 1px solid burlywood;
        margin: 0.25em 0 0; 
    }

    .name {
        font-size: 0.7em;
    }
</style>