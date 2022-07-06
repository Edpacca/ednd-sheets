<script lang="ts">
    import Skill from "./component/Skill.svelte";
    import type { Skills } from "./model/Skills";
    export let skills: Skills;
</script>

<div class="skills-wrapper">
    <div class="title2">Skills</div>
    <Skill name='Athletics' value={skills.athletics}/>
    <Skill name='Acrobatics' value={skills.acrobatics}/>
    <Skill name='Sleight of hand' value={skills.sleightOfHand}/>
    <Skill name='Stealth' value={skills.stealth}/>
    <Skill name='Arcana' value={skills.arcana}/>
    <Skill name='History' value={skills.history}/>
    <Skill name='Investigation' value={skills.investigation}/>
    <Skill name='Nature' value={skills.nature}/>
    <Skill name='Religion' value={skills.religion}/>
    <Skill name='Animal handling' value={skills.animalHandling}/>
    <Skill name='Insight' value={skills.insight}/>
    <Skill name='Medicine' value={skills.medicine}/>
    <Skill name='Perception' value={skills.perception}/>
    <Skill name='Survival' value={skills.survival}/>
    <Skill name='Deception' value={skills.deception}/>
    <Skill name='Intimidation' value={skills.intimidation}/>
    <Skill name='Performance' value={skills.performance}/>
    <Skill name='Persuasion' value={skills.persuasion}/>
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
