<script lang="ts">
    import Attribute from "./component/Attribute.svelte";
import type { Attributes } from "./model/Attributes";
    export let attributes: Attributes;
</script>

<div class="attributes-wrapper">
    <Attribute value={attributes.str} name='Strength'/>
    <Attribute value={attributes.dex} name='Dexterity'/>
    <Attribute value={attributes.con} name='Constitution'/>
    <Attribute value={attributes.int} name='Intelligence'/>
    <Attribute value={attributes.wis} name='Wisdom'/>
    <Attribute value={attributes.cha} name='Charisma'/>
</div>

<style>
    .attributes-wrapper {
        display: grid;
        grid-template-rows: repeat(6, 1fr);
        row-gap: 0.5em;
    }
</style>