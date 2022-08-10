<script>
    import { character } from "../../store/characterStore";
    import Currency from "../currency/Currency.svelte";
</script>


<div class="box">
    <div class="title2">Inventory</div>
    <div class="flex">
        <div class="currency">
            <Currency/>
        </div>
        <div class="totals">
            <div>{$character.currency.cp} copper</div>
            <div>{$character.currency.sp} silver</div>
            <div>{$character.currency.gp} gold</div>
            <div>{$character.currency.pp} platinum</div>
        </div>
    </div>
</div>

<style>
    .box {
        border: 2px solid brown;
        border-radius: 4px;
        padding: 0.5em;
        position: relative;
    }

    .currency {
        width: 50%;
    }

    .flex {
        display: flex;
    }

    .totals {
        font-weight: bold;
        margin: 1em;
    }
</style>
