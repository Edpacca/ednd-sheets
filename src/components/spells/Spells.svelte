<script>
    import { sortSpellsByLevel } from "../../logic/dataHandlers";
    import { spells } from "../../store/spellStore";
    import Spell from "./component/Spell.svelte";
    import SpellLevel from "./component/SpellLevel.svelte";
    import SpellFinder from "./SpellFinder.svelte";
    let maxSpellLevel = 0;
</script>

<div>
    <div class="title2">Title</div>
    <div class="title3">Cantrips</div>
    {#each sortSpellsByLevel($spells) as spell}
        {#if spell.level > maxSpellLevel}
            {maxSpellLevel = spell.level}
            <div class="title3"><SpellLevel level={maxSpellLevel}/></div>
        {/if}
        <Spell spell={spell}/>
    {/each}
</div>
<SpellFinder />

<style>

</style>
