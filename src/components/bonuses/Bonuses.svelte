<script lang="ts">
    import Bonus from './component/Bonus.svelte';
    import type { Bonuses } from './model/Bonuses'
    export let bonuses: Bonuses;
</script>

<div class="bonus-wrapper">
    <div class="shield-wrap">
        <div class="shield-border"></div>
        <div class="shield"></div>
        <div class="ac">AC</div>
        <div class="mod modac">14</div>
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

    .shield-wrap {
        position: relative;
        text-align: center;
    }

    .shield {
        position: absolute;
        width: 95%;
        height: 95%;
        top: 2.5%;
        left: 2.5%;
        clip-path: polygon(50% 0%, 30% 5%, 20% 10%, 0% 27%, 13% 70%, 25% 85%, 50% 100%, 75% 85%, 87% 70%, 100% 27%, 80% 10%, 70% 5% );
        background-color: burlywood;
        margin: auto;
        z-index: -1;
    }

    .shield-border {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        clip-path: polygon(50% 0%, 30% 5%, 20% 10%, 0% 27%, 13% 70%, 25% 85%, 50% 100%, 75% 85%, 87% 70%, 100% 27%, 80% 10%, 70% 5% );
        background-color: brown;
        z-index: -1;
    }

    .ac {
        margin: 0.3em;
        margin-bottom: 0;
        font-weight: 600;
    }

    .modac {
        border-top: 1px solid brown;
        margin: 0 0 0.5em;
    }
</style>
