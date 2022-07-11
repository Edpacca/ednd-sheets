<script lang="ts">
    import { getSkillBonus } from "../../logic/dataHandlers";
    import { character } from "../../store/characterStore";
    import Skill from "./component/Skill.svelte";
</script>

<div class="skills-wrapper bordered">
    <div class="title2">Skills</div>
    <Skill skill='Athletics' value={getSkillBonus('Athletics', $character)} />
    <Skill skill='Acrobatics' value={getSkillBonus('Acrobatics', $character)} />
    <Skill skill='Sleight of hand' value={getSkillBonus('Sleight of hand', $character)}/>
    <Skill skill='Stealth' value={getSkillBonus('Stealth', $character)}/>
    <Skill skill='Arcana' value={getSkillBonus('Arcana', $character)}/>
    <Skill skill='History' value={getSkillBonus('History', $character)}/>
    <Skill skill='Investigation' value={getSkillBonus('Investigation', $character)}/>
    <Skill skill='Nature' value={getSkillBonus('Nature', $character)}/>
    <Skill skill='Religion' value={getSkillBonus('Religion', $character)}/>
    <Skill skill='Animal handling' value={getSkillBonus('Animal handling', $character)}/>
    <Skill skill='Insight' value={getSkillBonus('Insight', $character)}/>
    <Skill skill='Medicine' value={getSkillBonus('Medicine', $character)}/>
    <Skill skill='Perception' value={getSkillBonus('Perception', $character)}/>
    <Skill skill='Survival' value={getSkillBonus('Survival', $character)}/>
    <Skill skill='Deception' value={getSkillBonus('Deception', $character)}/>
    <Skill skill='Intimidation' value={getSkillBonus('Intimidation', $character)}/>
    <Skill skill='Performance' value={getSkillBonus('Performance', $character)}/>
    <Skill skill='Persuasion' value={getSkillBonus('Persuasion', $character)}/>
</div>

<style>
    .skills-wrapper {
        margin-left: 0.5em;
        display: grid;
        grid-template-rows: repeat(1fr);
    }
</style>
