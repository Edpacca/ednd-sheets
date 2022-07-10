<script>
    import SpellLevel from "./SpellLevel.svelte";
    export let spell;
</script>

<div class="spell-wrapper">
    <div class="name">{spell.name}</div>
    <div class="level detail">
        ({#if spell.level === 0}
            cantrip
        {:else}
            <SpellLevel level={spell.level}/>
        {/if})
    </div>
    <div class="source {spell.source}">{spell.source}</div>
</div>

<style>
    .spell-wrapper {
        border-bottom: 2px solid burlywood;
        display: flex;
        padding-top: 0.5em;
    }

    .name {
        margin-right: 0.5em;
    }

    .level {
        font-size: 0.8em;
    }

    .source {
        margin-left: auto;
        font-style: italic;
        font-size: 0.8em;
    }

    .PHB { color: brown }
    .EGW { color: forestgreen }
    .FTD { color: red }
    .GGR { color: purple }
    .IDRotF { color: lightblue }
    .SCC { color: blue }
    .TCE { color: darkgoldenrod }
    .XGE { color: orange }
    .AI { color: palegreen }

</style>
