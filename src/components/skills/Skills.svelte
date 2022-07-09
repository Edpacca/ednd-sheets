<script lang="ts">
    import { getSkillBonus } from "../../logic/characterStats";
    import { character } from "../../store/characterStore";
    import Skill from "./component/Skill.svelte";
</script>

<div class="skills-wrapper">
    <div class="title2">Skills</div>
    <Skill skill='Athletics' value={getSkillBonus('Athletics', $character)} proficient={$character.skills['Athletics']}/>
    <Skill skill='Acrobatics' value={getSkillBonus('Acrobatics', $character)} proficient={$character.skills['Acrobatics']}/>
    <Skill skill='Sleight of hand' value={getSkillBonus('Sleight of hand', $character)} proficient={$character.skills['Sleight of hand']}/>
    <Skill skill='Stealth' value={getSkillBonus('Stealth', $character)} proficient={$character.skills['Stealth']}/>
    <Skill skill='Arcana' value={getSkillBonus('Arcana', $character)} proficient={$character.skills['Arcana']}/>
    <Skill skill='History' value={getSkillBonus('History', $character)} proficient={$character.skills['History']}/>
    <Skill skill='Investigation' value={getSkillBonus('Investigation', $character)} proficient={$character.skills['Investigation']}/>
    <Skill skill='Nature' value={getSkillBonus('Nature', $character)} proficient={$character.skills['Nature']}/>
    <Skill skill='Religion' value={getSkillBonus('Religion', $character)} proficient={$character.skills['Religion']}/>
    <Skill skill='Animal handling' value={getSkillBonus('Animal handling', $character)} proficient={$character.skills['Animal handling']}/>
    <Skill skill='Insight' value={getSkillBonus('Insight', $character)} proficient={$character.skills['Insight']}/>
    <Skill skill='Medicine' value={getSkillBonus('Medicine', $character)} proficient={$character.skills['Medicine']}/>
    <Skill skill='Perception' value={getSkillBonus('Perception', $character)} proficient={$character.skills['Perception']}/>
    <Skill skill='Survival' value={getSkillBonus('Survival', $character)} proficient={$character.skills['Survival']}/>
    <Skill skill='Deception' value={getSkillBonus('Deception', $character)} proficient={$character.skills['Deception']}/>
    <Skill skill='Intimidation' value={getSkillBonus('Intimidation', $character)} proficient={$character.skills['Intimidation']}/>
    <Skill skill='Performance' value={getSkillBonus('Performance', $character)} proficient={$character.skills['Performance']}/>
    <Skill skill='Persuasion' value={getSkillBonus('Persuasion', $character)} proficient={$character.skills['Persuasion']}/>
</div>

<style>
    .skills-wrapper {
        border: 2px solid burlywood;
        border-radius: 4px;
        margin-left: 0.5em;
        display: grid;
        grid-template-rows: repeat(1fr);
    }
</style>
