<script lang="ts">
    import type { Spell as SpellType } from './model/Spell'
    import CharacterSpells from './component/CharacterSpells.svelte';
    export let spells: SpellType[]    
    let cantrips: SpellType[];
    let first: SpellType[];
    let second: SpellType[];
    let third: SpellType[];
    let fourth: SpellType[];
    let fifth: SpellType[];
    let sixth: SpellType[];
    let seventh: SpellType[];
    let eighth: SpellType[];
    let ninth: SpellType[];

    spells.forEach(spell => {
        switch(spell.level) {
            case 0:
                cantrips.push(spell);
                break;
            case 1:
                first.push(spell);
                break;
            case 2:
                second.push(spell);
                break;
            case 3:
                third.push(spell);
                break;
            case 4:
                fourth.push(spell);
                break;
            case 5:
                fifth.push(spell);
                break;
            case 6:
                sixth.push(spell);
                break;
            case 7:
                seventh.push(spell);
                break;
            case 8:
                eighth.push(spell);
                break;
            case 9:
                ninth.push(spell);
                break;
        }
    });
</script>

<div>
    <div class="title2">Spells</div>
    <CharacterSpells level="Cantrip" spells={cantrips}/>
    <CharacterSpells level="1st " spells={first}/>
    <CharacterSpells level="2nd " spells={second}/>
    <CharacterSpells level="3rd " spells={third}/>
    <CharacterSpells level="4th " spells={fourth}/>
    <CharacterSpells level="5th " spells={fifth}/>
    <CharacterSpells level="6th " spells={sixth}/>
    <CharacterSpells level="7th " spells={seventh}/>
    <CharacterSpells level="8th " spells={eighth}/>
    <CharacterSpells level="9th " spells={ninth}/>
</div>

<style>


</style>
