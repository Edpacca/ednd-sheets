<script lang="ts">
    import type { Character } from "src/data/Character";
import Attrtibutes from "../attributes/Attributes.svelte";
import Skills from "../skills/Skills.svelte";
    export let character: Character;
</script>

<div class="sheet-wrapper">
    <div class="left-column">
        <Attrtibutes attributes={character.attributes}/>
        <Skills skills={character.skills} />
    </div>
</div>

<style>
    .sheet-wrapper {
        border: 1px solid black;
        padding: 2em;
    }

    .left-column {
        border: 1px solid black;
        width: 50%;
        display: grid;
        grid-template-columns: 10% 1fr 2fr;
    }

</style>