<script lang="ts">
    import { character } from "../../store/characterStore";
    import Skill from "./component/Skill.svelte";
</script>

<div class="skills-wrapper">
    <div class="title2">Skills</div>
    <Skill skill='Athletics' value={$character.getSkillBonus('Athletics')} proficient={$character.skills['Athletics']}/>
    <Skill skill='Acrobatics' value={$character.getSkillBonus('Acrobatics')} proficient={$character.skills['Acrobatics']}/>
    <Skill skill='Sleight of hand' value={$character.getSkillBonus('Sleight of hand')} proficient={$character.skills['Sleight of hand']}/>
    <Skill skill='Stealth' value={$character.getSkillBonus('Stealth')} proficient={$character.skills['Stealth']}/>
    <Skill skill='Arcana' value={$character.getSkillBonus('Arcana')} proficient={$character.skills['Arcana']}/>
    <Skill skill='History' value={$character.getSkillBonus('History')} proficient={$character.skills['History']}/>
    <Skill skill='Investigation' value={$character.getSkillBonus('Investigation')} proficient={$character.skills['Investigation']}/>
    <Skill skill='Nature' value={$character.getSkillBonus('Nature')} proficient={$character.skills['Nature']}/>
    <Skill skill='Religion' value={$character.getSkillBonus('Religion')} proficient={$character.skills['Religion']}/>
    <Skill skill='Animal handling' value={$character.getSkillBonus('Animal handling')} proficient={$character.skills['Animal handling']}/>
    <Skill skill='Insight' value={$character.getSkillBonus('Insight')} proficient={$character.skills['Insight']}/>
    <Skill skill='Medicine' value={$character.getSkillBonus('Medicine')} proficient={$character.skills['Medicine']}/>
    <Skill skill='Perception' value={$character.getSkillBonus('Perception')} proficient={$character.skills['Perception']}/>
    <Skill skill='Survival' value={$character.getSkillBonus('Survival')} proficient={$character.skills['Survival']}/>
    <Skill skill='Deception' value={$character.getSkillBonus('Deception')} proficient={$character.skills['Deception']}/>
    <Skill skill='Intimidation' value={$character.getSkillBonus('Intimidation')} proficient={$character.skills['Intimidation']}/>
    <Skill skill='Performance' value={$character.getSkillBonus('Performance')} proficient={$character.skills['Performance']}/>
    <Skill skill='Persuasion' value={$character.getSkillBonus('Persuasion')} proficient={$character.skills['Persuasion']}/>
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
