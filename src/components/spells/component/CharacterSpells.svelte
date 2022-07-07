<script lang="ts">
    import type { Spell as SpellType } from '../../../model/Spell';   
    import Spell from './Spell.svelte';
    export let spells: SpellType[];
    export let level: string;
</script>

{#if spells}
<div class="spell-level-wrapper">
    <div class="level">{level}</div><hr/>
    {#each spells as spell}
        <Spell spell={spell}/>
    {/each}
</div>
{/if}

<style>
    .level {
        font-weight: 600;
        font-size: 0.8em;
        color: brown;   
    }
    
    .spell-level-wrapper {
        margin: 0.5em;
    }   

    hr {
        border: 0;
        border-bottom: 1px solid brown;
        margin-top: -0.1em;
    }
</style>
