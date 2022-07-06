<script lang="ts">
    import { character } from "../../store/characterStore";
    import Skill from "./component/Skill.svelte";
</script>

<div class="skills-wrapper">
    <div class="title2">Skills</div>
    <Skill name='Athletics' baseValue={$character.skills.athletics[0]} checked={$character.skills.athletics[1]}/>
    <Skill name='Acrobatics' baseValue={$character.skills.acrobatics[0]} checked={$character.skills.acrobatics[1]}/>
    <Skill name='Sleight of hand' baseValue={$character.skills.sleightOfHand[0]} checked={$character.skills.sleightOfHand[1]}/>
    <Skill name='Stealth' baseValue={$character.skills.stealth[0]} checked={$character.skills.stealth[1]}/>
    <Skill name='Arcana' baseValue={$character.skills.arcana[0]} checked={$character.skills.arcana[1]}/>
    <Skill name='History' baseValue={$character.skills.history[0]} checked={$character.skills.history[1]}/>
    <Skill name='Investigation' baseValue={$character.skills.investigation[0]} checked={$character.skills.investigation[1]}/>
    <Skill name='Nature' baseValue={$character.skills.nature[0]} checked={$character.skills.nature[1]}/>
    <Skill name='Religion' baseValue={$character.skills.religion[0]} checked={$character.skills.religion[1]}/>
    <Skill name='Animal handling' baseValue={$character.skills.animalHandling[0]} checked={$character.skills.animalHandling[1]}/>
    <Skill name='Insight' baseValue={$character.skills.insight[0]} checked={$character.skills.insight[1]}/>
    <Skill name='Medicine' baseValue={$character.skills.medicine[0]} checked={$character.skills.medicine[1]}/>
    <Skill name='Perception' baseValue={$character.skills.perception[0]} checked={$character.skills.perception[1]}/>
    <Skill name='Survival' baseValue={$character.skills.survival[0]} checked={$character.skills.survival[1]}/>
    <Skill name='Deception' baseValue={$character.skills.deception[0]} checked={$character.skills.deception[1]}/>
    <Skill name='Intimidation' baseValue={$character.skills.intimidation[0]} checked={$character.skills.intimidation[1]}/>
    <Skill name='Performance' baseValue={$character.skills.performance[0]} checked={$character.skills.performance[1]}/>
    <Skill name='Persuasion' baseValue={$character.skills.persuasion[0]} checked={$character.skills.persuasion[1]}/>
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
