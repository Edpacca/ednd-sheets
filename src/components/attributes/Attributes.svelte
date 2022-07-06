<script lang="ts">
    import { character } from "../../store/characterStore";
    import Attribute from "./component/Attribute.svelte";
    import type { Attributes } from "./model/Attributes";

</script>

<div class="attributes-wrapper">
    <Attribute value={$character.attributes.str} name='Strength'/>
    <Attribute value={$character.attributes.dex} name='Dexterity'/>
    <Attribute value={$character.attributes.con} name='Constitution'/>
    <Attribute value={$character.attributes.int} name='Intelligence'/>
    <Attribute value={$character.attributes.wis} name='Wisdom'/>
    <Attribute value={$character.attributes.cha} name='Charisma'/>
</div>

<style>
    .attributes-wrapper {
        display: grid;
        grid-template-rows: repeat(6, 1fr);
        row-gap: 0.5em;
    }
</style>