<script lang="ts">
    import type { Spell } from '../model/Spell';
    export let spell: Spell;
</script>

<div>
    <div>{spell.name}</div>
    <span>{spell.range}</span>
</div>

<style>

</style>