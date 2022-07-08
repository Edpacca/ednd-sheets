<script lang="ts">
    import Details from "../details/Details.svelte";
    import Attrtibutes from "../attributes/Attributes.svelte";
    import Skills from "../skills/Skills.svelte";
    import Bonuses from "../bonuses/Bonuses.svelte";
    import Spells from "../spells/Spells.svelte";
    import { character } from "../../store/characterStore";
</script>

<div class="sheet-wrapper">
    <div class="attributes box">
        <Attrtibutes/>
        <Skills/>
        <Bonuses/>
    </div>
    <div class="details box">
        <Details/>
    </div>
    <div class="spells box">
        <Spells/>
    </div>
    <div class="equipment box">
        
    </div>
</div>
<div>
    <div>{$character.skills['History']}</div>
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
