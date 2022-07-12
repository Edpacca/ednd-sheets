<script>
import { SOURCES } from "../../model/const/Sources";

    import { spells } from "../../store/spellStore";
import SpellDataTable from "./SpellDataTable.svelte";
    let spellData = [];
    let selectedSource = "phb";
    let selectedSpell;
    
    const setSource = (source) => {
        selectedSource = source;
    }

    const getSpellData = async () => {
        const response = await fetch(`https://5e.tools/data/spells/spells-${selectedSource}.json`);
        const spells = await response.json();
        spellData = spells.spell;
        selectedSpell = spellData[0];
    } 

    const addSpell = () => { if (!$spells.includes(selectedSpell)) $spells = [...$spells, selectedSpell]; } 
    const setSpell = (spell) => {
        console.log(spell);
        selectedSpell = spell;
    }

    let isOpen = true;

    const toggle = () => isOpen = !isOpen;

</script>

<div>
    <button class="button wide" on:click={toggle}>Add Spells <span class="plus detail">+</span></button>
</div>

{#if isOpen}
<div class="modal">
    <div class="finder-wrapper">
        <h2 class="title2">Spell finder</h2>
        <div class="sources-wrapper">
            <div class="title3">Select source</div>
            <select class="source-select" name="sources" bind:value={selectedSource}>
                {#each SOURCES as source}
                    <option 
                        value={source[0]}
                        selected={source[0] === "phb" ? true : false}
                        on:change={() => setSource(source[0])}
                        >
                        {source[1]}
                    </option>
                {/each}
            </select>
            <button class="button" on:click={getSpellData}>Get spells</button>
        </div>

    
        {#if selectedSpell}
        <div class="spell-details">
            <div class="title3">{selectedSpell.name}</div>
            <div>{selectedSpell.entries}</div>
            <button class="button" on:click={addSpell}>Add spell</button>
        </div>

        <div class="spell-data">
            <SpellDataTable spellData={spellData} bind:selectedSpell={selectedSpell}/>
        </div>

        {/if}
    </div>
    <button class="button close-button" on:click={toggle}>Close</button>
</div>
{/if}

<style>

    .wide {
        width: 100%;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        border: 1px solid brown;
        background-color: rgb(255, 245, 232);
        color: brown;
        font: initial;
        font-weight: 600;
    }

    .button:hover {
        background-color: burlywood;
    }
    .plus {
        font-size: 2em;
        margin-left: 0.2em;
    }

    .modal {
        width: calc(2 * ((100vw - 5em) / 3));
        top: 2em;
        left: 2em;
        position: absolute;
        background-color: rgb(255, 245, 232);
        z-index: 3;
        border: 4px solid brown;
        border-radius: 8px;
    }

    .finder-wrapper {
        padding: 2em;
    }

    .source-select {
        padding: 0.5em;
        background-color: transparent;
        font-family: initial;
        font-size: 1em;
        border: 1px solid brown;
        border-radius: 4px;
    }

    .sources-wrapper {
        display: flex;
        align-items: center;
        column-gap: 1em;
    }

    .close-button {
        height: 2em;
        width: 90%;
        margin: auto;
        margin-bottom: 1em;
    }

    .spell-data {
        margin-top: 2em;
        border: 1px solid brown;
        height: 50vh;
        overflow: scroll;
    }

    .spell-details {
        margin-top: 1em;
    }
</style>
