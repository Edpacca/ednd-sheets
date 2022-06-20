<script lang="ts">
    import Sheet from "./components/sheet/Sheet.svelte";
    import { TEST_CHARACTER } from "./data/data";
    let spellData = "";

    async function getSpellData() {
        const response = await fetch('https://5e.tools/spells.html');
        const body = await response.text();
        console.log(body);
        spellData = body;
    }
</script>

<main>
    <Sheet character={TEST_CHARACTER}/>
    <div>
        <h2>Spell Finder</h2>
        <button on:click={getSpellData}>GET SPELLS</button>
        <div>
            {spellData}
        </div>
    </div>
</main>
