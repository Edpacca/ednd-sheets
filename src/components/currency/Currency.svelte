<script>
    import { character } from "../../store/characterStore";
    import Coin from "./Coin.svelte";
    import cp from '../../../../icons/copper-piece.svg';
    import sp from '../../../../icons/silver-piece.svg';
    import gp from '../../../../icons/gold-piece.svg';
    import pp from '../../../../icons/platinum-piece.svg';
import CurrencyTransactionModal from "./CurrencyTransactionModal.svelte";
</script>

<div class="bordered wrapper">
    <div class="currency-grid">
        <Coin name="cp" bind:value={$character.currency.cp} icon={cp}/>
        <Coin name="sp" bind:value={$character.currency.sp} icon={sp}/>
        <Coin name="gp" bind:value={$character.currency.gp} icon={gp}/>
        <Coin name="pp" bind:value={$character.currency.pp} icon={pp}/>
    </div>
    <CurrencyTransactionModal/>
</div>


<style>

    .wrapper {
    }

    .currency-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 1em;
    }
</style>