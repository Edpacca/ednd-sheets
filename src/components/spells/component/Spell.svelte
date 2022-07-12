<script>
    import SpellLevel from "./SpellLevel.svelte";
    export let spell;
    let isOpen = false;

    const toggle = () => isOpen = !isOpen;
</script>


<div class="spell-wrapper" on:click={toggle}>
    <div class="header">
        <div class="name">{spell.name}</div>
        <div class="level detail">
            <SpellLevel level={spell.level}/>
        </div>
        <div class="components">
            {spell.components.v ? "V" : ""}
            {spell.components.s ? "S" : ""}
            {spell.components.m ? "M" : ""}
        </div>
        <div class="source {spell.source}">{spell.source}</div>
    </div>
    <div class="footer">
    </div>
</div>
{#if isOpen}
    <div class="detail entry">
        {spell.entries}
    </div>
{/if}

<style>
    .spell-wrapper {
        border-bottom: 2px solid burlywood;

        padding-top: 0.5em;
    }

    .spell-wrapper:hover {
        background-color: rgb(255, 245, 232);
        cursor: pointer;
    }

    .header {
        display: flex;
    }

    .name {
        margin-right: 0.5em;
    }

    .level {
        font-size: 0.8em;
    }

    .components {
        margin-left: auto;
        font-size: 0.75em;
        font-style: italic;
        color: rgb(114, 95, 70)
    }

    .source {
        margin-left: 0.5em;
        font-style: italic;
        font-size: 0.8em;
    }

    .entry {
        margin: 0.5em 0;
        font-size: 0.9em;
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
