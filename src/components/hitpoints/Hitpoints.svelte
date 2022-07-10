<script>
    import { character } from "../../store/characterStore";
</script>

<div class="hp-wrapper bordered">
    <div class="hp-grid">
        <input class="hp num current" bind:value={$character.hpCurrent}/>
        <div class="bar"/>
        <div class="hp num max">{$character.hpMax}</div>
    </div>
    <div class="text detail">Hit points</div>
</div>



<style>

    .hp-grid {
        font-size: 2em;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
    }

    .bar {
        border-left: 2px solid burlywood;
        margin: 0.2em 0
    }

    .hp {
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input {
        padding: unset;
        margin: unset;
    }

    .current {
        width: 80%;
        height:  80%;
        margin: auto;
        font-size: 2rem;
        text-align: center;
    }

    .current::placeholder {
        font-size: 2em;
    }

    .text {
        font-size: 0.9em;
        font-weight: 600;
        text-align: center;
        color: brown;
        margin-top: 0.1em;
    }
</style>