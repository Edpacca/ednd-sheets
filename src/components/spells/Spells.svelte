<script>
    import { sortSpellsByLevel } from "../../logic/dataHandlers";
    import { spells } from "../../store/spellStore";
    import Spell from "./component/Spell.svelte";
    import SpellFinder from "./SpellFinder.svelte";
</script>

<div class="spell-list-wrapper">
    <div class="title2">Spells</div>
    <div class="title3">Cantrips</div>
    {#each sortSpellsByLevel($spells) as spell}
        <Spell spell={spell}/>
    {/each}
</div>
<div class="spell-finder">
    <SpellFinder />
</div>

<style>
</style>
