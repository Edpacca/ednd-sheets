<script lang="ts">
    import ShieldSvg from '../../assets/Shield-svg.svelte';
import Bonus from './component/Bonus.svelte';
    import type { Bonuses } from './model/Bonuses'
    export let bonuses: Bonuses;
</script>

<div class="bonus-wrapper">
    <div class="ac-wrapper">
        <ShieldSvg colorFill=transparent colorStroke=brown/>
        <div class="acmod-wrapper">
            <div class="ac">AC</div>
            <div class="mod modac">14</div>
        </div>
    </div>

    <Bonus name="Initiative" mod={bonuses.initiative}/>
    <Bonus name="Proficiency" mod={bonuses.proficiency}/>
    <div class="box">
        <div class="name">Speed</div>
        <div class="mod num">35<span class="unit">ft.</span></div>
    </div>
    <div class="box">
        <div class="name">Defenses</div>
        <div class="">Poison</div>
        <div class="name">Immunities</div>
        <div class="">None</div>
    </div>
</div>

<style>
    .bonus-wrapper {
        display: grid;
        grid-template-rows: auto auto auto auto 45%;
        row-gap: 0.5em;
    }

    .ac-wrapper {
        position: relative;
    }

    .acmod-wrapper {
        position: absolute;
        text-align: center;
        top: 5%;
        width: 100%;
    }

    .box {
        border: 2px solid burlywood;
        border-radius: 4px;
        text-align: center;
        padding: 0.25em;
    }

    .mod {
        font-size: 2em;
        border-top: 1px solid burlywood;
        margin: 0.25em 0 0; 
    }

    .name {
        font-size: 0.7em;
    }

    .unit {
        font-size: 0.6em;
        margin-left: 0.1em;
    }

    .ac {
        font-weight: 600;
        font-size: 0.7em;
        margin: 1em 0 0 0;
    }

    .modac {
        border-top: 1px solid brown;
        margin: 0;
    }
</style>
