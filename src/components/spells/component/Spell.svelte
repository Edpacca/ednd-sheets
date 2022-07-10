<script>
    import SpellLevel from "./SpellLevel.svelte";
    export let spell;
</script>

<div class="spell-wrapper">
    <div class="name">{spell.name}</div>
    <div class="level detail">
        {#if spell.level === 0}
            cantrip
        {:else}
            <SpellLevel level={spell.level}/>
        {/if}
    </div>
    <div class="source">{spell.source}</div>
</div>

<style>
    .spell-wrapper {
        border-bottom: 2px solid burlywood;
        display: flex;
        padding-top: 0.5em;
    }

    .name {
    }

    .level {
        font-size: 0.8em;
        margin-left: auto;
    }

    .source {
        margin-left: auto;
        font-style: italic;
        font-size: 0.8em;
    }
</style>
