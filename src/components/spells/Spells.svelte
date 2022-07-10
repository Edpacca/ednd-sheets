<script>
    import { sortSpellsByLevel } from "../../logic/characterStats";
    import { character } from "../../store/characterStore";
    import Spell from "./component/Spell.svelte";
import SpellLevel from "./component/SpellLevel.svelte";
    import SpellFinder from "./SpellFinder.svelte";
    let maxSpellLevel = 0;
</script>

<div>
    <div class="title2">Spells</div>
    <div class="title3">Cantrips</div>
    {#each sortSpellsByLevel($character.spells) as spell}
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
