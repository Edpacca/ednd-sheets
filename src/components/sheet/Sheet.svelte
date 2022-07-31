<script lang="ts">
    import Details from "../details/Details.svelte";
    import Attributes from "../attributes/Attributes.svelte";
    import Skills from "../skills/Skills.svelte";
    import Bonuses from "../bonuses/Bonuses.svelte";
    import Spells from "../spells/Spells.svelte";
    import { character } from "../../store/characterStore";
</script>

<div class="sheet-wrapper">
    <div class="attributes box">
        <Attributes/>
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

<style>
    .sheet-wrapper {
        padding: 2em;
        display: grid; 
        grid-template-columns: 25% 1fr 1fr;
        column-gap: 0.5em;
        row-gap: 0.5em;
    }

    @media screen and (max-width: 1100px) {
        .sheet-wrapper {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .attributes {
        display: grid;
        grid-template-columns: 1fr 13rem 1fr;
        column-gap: 0.5em;
    }  
    
    .box {
        border: 2px solid brown;
        border-radius: 4px;
        padding: 0.5em;
    }

    .spells {
        display: grid;
        grid-template-rows: 1fr;
    }

</style>
