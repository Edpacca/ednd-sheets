<script lang="ts">
    import CharacterSpells from './component/CharacterSpells.svelte';
    export let spells;
</script>

<div>
    <div class="title2">Spells</div>
    {#each spells as spell}
        <div>{spell.level}</div>
        <div>{spell.name}</div>
        <div>{spell.source}</div>
    {/each}
</div>

<style>

</style>
