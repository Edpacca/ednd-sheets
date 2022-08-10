<script lang="ts">
    import { character } from "../../store/characterStore";
    import Coin from "./Coin.svelte";
    import cp from '../../../../icons/copper-piece.svg';
    import sp from '../../../../icons/silver-piece.svg';
    import gp from '../../../../icons/gold-piece.svg';
    import pp from '../../../../icons/platinum-piece.svg';
    import type { Currency } from '../../model/interface/Currency'

    let transactionValue: Currency = {
        cp: 0,
        sp: 0,
        gp: 0,
        pp: 0
    }

    let isOpen = false;
    const resetTransaction = () => {transactionValue = { cp: 0, sp: 0, gp: 0, pp: 0 } }

    const handleChange = () => { 
        isOpen = !isOpen; 
        resetTransaction();
    }

    const handleSubmit = (mod: 1 | -1) => {
        $character.currency.cp += (transactionValue.cp * mod)
        $character.currency.sp += (transactionValue.sp * mod)
        $character.currency.gp += (transactionValue.gp * mod)
        $character.currency.pp += (transactionValue.pp * mod)
        isOpen = false;
        resetTransaction();
    }
</script>

{#if isOpen}
<div class="modal">
    <button class="x" on:click={handleChange}>x</button>
    <div class="title2">Currency transaction</div>
    <div class="currency-wrapper">
        <Coin name="cp" bind:value={transactionValue.cp} icon={cp}/>
        <Coin name="sp" bind:value={transactionValue.sp} icon={sp}/>
        <Coin name="gp" bind:value={transactionValue.gp} icon={gp}/>
        <Coin name="pp" bind:value={transactionValue.pp} icon={pp}/>
        <div class="buttons">
            <button class="minus sum" on:click={() => handleSubmit(-1)}>-</button>
            <button class="plus sum" on:click={() => handleSubmit(1)}>+</button>
        </div>
    </div>
</div>

{:else}
    <button on:click={handleChange}>TRANSACTION</button>
{/if}


<style>
    .currency-wrapper {
        display: grid;
        grid-template-columns: 3fr 3fr 3fr 3fr 1fr;
        padding: 1em;
    }

    .modal {
        position: absolute;
        top: -100%;
        background-color: wheat;
        border: 4px solid brown;
        border-radius: 8px;
    }

    .x {
        background: brown;
        color: wheat;
        border: 2px solid wheat;
        border-radius: 4px;
    }

    .x:hover {
        background-color: darkred;
        color: white;
    }

    .sum {
        border: 3px solid black;
        border-radius: 4px;
        font-size: 2em;
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.2rem;
    }

    .sum:hover {
        color: white;
    }

    .minus {
        background-color: red;
    }

    .minus:hover {
        background-color: darkred;
    }

    .plus {
        background-color: greenyellow;
    }

    .plus:hover {
        background-color: green;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        margin: auto;
    }
</style>