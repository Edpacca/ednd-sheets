<script lang="ts">
    import Sheet from "./components/sheet/Sheet.svelte";
    import { TEST_CHARACTER } from "./data/data";
    let spellData = [];
    let selectedSource = "phb";
    let selectedSpell;

    const SOURCES = [
        "EGW",
        "FTD",
        "GGR",
        "IDRotF",
        "PHB",
        "SCC",
        "TCE",
        "XGE"
    ]

    async function getSpellData() {
        const response = await fetch(`https://5e.tools/data/spells/spells-${selectedSource}.json`);
        const spells = await response.json();
        spellData = spells.spell;
        selectedSpell = spellData[0];
    } 

    function addSpell(spell) {
        TEST_CHARACTER.spells.push(spell);
    }
</script>

<main>
    <Sheet character={TEST_CHARACTER}/>
    <div>
        <h2>Spell Finder</h2>
            <select name="sources" bind:value={selectedSource}>
                {#each SOURCES as source}
                    <option 
                        value={source.toLocaleLowerCase()}
                        selected={source === "PHB" ? true : false}
                        on:change={() => selectedSource = source.toLocaleLowerCase()}
                        >
                        {source}
                    </option>
                {/each}
            </select>
            <button on:click={getSpellData}>GET SPELLS</button>

            {#if selectedSpell}
                <select name="spells" bind:value={selectedSpell.name}>
                    {#each spellData.sort((a, b) => a.level < b.level ? -1 : a.level > b.level ? 1 : 0) as spell}
                        <option value={spell.name} on:change={() => selectedSpell = spell}>{spell.level}: {spell.name}</option>
                    {/each}
                </select>
                <button on:click={() => addSpell(selectedSpell)}>ADD SPELL</button>
            {/if}
    </div>
</main>
