<script lang="ts">
    import type { Character } from "src/data/Character";
    import Details from "../details/Details.svelte";
    import Attrtibutes from "../attributes/Attributes.svelte";
    import Skills from "../skills/Skills.svelte";
    import Bonuses from "../bonuses/Bonuses.svelte";
    import Spells from "../spells/Spells.svelte";
    export let character: Character;
</script>

<div class="sheet-wrapper">
    <div class="attributes box">
        <Attrtibutes attributes={character.attributes}/>
        <Skills skills={character.skills} />
        <Bonuses bonuses={character.bonuses}/>
    </div>
    <div class="details box">
        <Details name={character.name} race={character.race}/>
    </div>
    <div class="spells box">
        <Spells spells={character.spells}/>
    </div>
    <div class="equipment box">
        
    </div>
</div>

<style>
    .sheet-wrapper {
        border: 1px solid black;
        padding: 2em;
        display: grid; 
        grid-template-columns: 35% repeat(3, 1fr);
        column-gap: 0.5em;
    }

    .attributes {
        display: grid;
        grid-template-columns: 10% 1fr 20%;
        column-gap: 0.5em;
    }  
    
    .box {
        border: 2px solid brown;
        border-radius: 4px;
        padding: 0.5em;
    }

</style>
