<script>
    import { sortSpellsByLevel } from "../../logic/dataHandlers";
    import { spells } from "../../store/spellStore";
    import Spell from "./component/Spell.svelte";
    import SpellLevel from "./component/SpellLevel.svelte";
    import SpellFinder from "./SpellFinder.svelte";
    let maxSpellLevel = 0;
</script>

<div>
    <div class="title2">Spells</div>
    <div class="title3">Cantrips</div>
    {#each sortSpellsByLevel($spells) as spell}
        <Spell spell={spell}/>
    {/each}
</div>
<SpellFinder />

<style>

</style>
