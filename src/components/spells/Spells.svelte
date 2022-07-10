<script>
    import { character } from "../../store/characterStore";
import Spell from "./component/Spell.svelte";
    import SpellFinder from "./SpellFinder.svelte";
    let maxSpellLevel = 0;
</script>

<div>
    <div class="title2">Spells</div>
    <div class="title3">Cantrips</div>
    {#each $character.spells as spell}
        <Spell spell={spell}/>
    {/each}
</div>
<SpellFinder />

<style>

</style>
