<script>
    import { spells } from "../../store/spellStore";
    const SOURCES = [
            "EGW",
            "FTD",
            "GGR",
            "IDRotF",
            "PHB",
            "SCC",
            "TCE",
            "XGE",
            "AI"
        ]

    let spellData = [];
    let selectedSource = "phb";
    let selectedSpell;
    
    async function getSpellData() {
        const response = await fetch(`https://5e.tools/data/spells/spells-${selectedSource}.json`);
        const spells = await response.json();
        spellData = spells.spell;
        selectedSpell = spellData[0];
    } 

    function addSpell() {
        console.log(selectedSpell.name);
        if ($spells.filter(spell => spell.name === selectedSpell.name).length === 0) {
            $spells = [...$spells, selectedSpell];
        }
    } 

    function setSpell(spell) {
        selectedSpell = spell;
        console.log(spell);
    }
</script>

<div class="bordered">
    <h2 class="title2">Title</h2>
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
        <select name="spells" bind:value={selectedSpell} on:change={() => setSpell(selectedSpell)}>
            {#each spellData.sort((a, b) => a.level < b.level ? -1 : a.level > b.level ? 1 : 0) as spell}
                <option value={spell}>{spell.level}: {spell.name}</option>
            {/each}
        </select>

        <button on:click={addSpell}>Add Spell</button>
        <div>{selectedSpell.entries}</div>
    {/if}
</div>
