<script>
    export let spells;
</script>

<div>
    <div>Spells</div>
    {#each spells as spell}
        <div>{spell.level}</div>
        <div>{spell.name}</div>
        <div>{spell.source}</div>
    {/each}
</div>
