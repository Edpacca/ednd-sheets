<script>
    import { character } from "../../store/characterStore";
    import { sortSpellsByLevel } from "../../logic/dataHandlers";
    import SpellLevel from "./component/SpellLevel.svelte";
    export let spellData;
    export let selectedSpell;
    export let hasAllClasses;
    const isInClass = (classes) => classes.some(c => c.name === $character.class);
</script>

<table>
    <thead>
        <th>Level</th>
        <th>Spell</th>
    </thead>
    <tbody>
        {#if hasAllClasses}
            {#each sortSpellsByLevel(spellData) as spell}
                <tr class="spell-row" on:click={() => selectedSpell = spell}>
                    <td class="detail level"><SpellLevel level={spell.level}/></td>
                    <td class={isInClass(spell.classes?.fromClassList) ? "" : "invalid"}>{spell.name}</td>
                </tr>
            {/each}
        {:else}
            {#each sortSpellsByLevel(spellData) as spell}
                <tr class="spell-row" on:click={() => selectedSpell = spell}>
                    <td class="detail level"><SpellLevel level={spell.level}/></td>
                    <td>{spell.name}</td>
                </tr>
            {/each}
        {/if}
    </tbody>
</table>

<style>

    thead {
        color: brown;
    }

    td, th {
        text-align: left;
        padding-right: 1em;
    }

    .level {
        color: brown;
    }

    .spell-row:hover {
        cursor: pointer;
        background-color: burlywood;
    }

    .invalid {
        color: burlywood;
    }

    .spell-row:hover .invalid {
        color: red;
    }

</style>
