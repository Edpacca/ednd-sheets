<script>
import { character } from "../../store/characterStore";

import Currency from "../currency/Currency.svelte";

</script>


<div class="box">
    <div class="title2">Inventory</div>
    <div class="currency">
        <Currency/>
    </div>
    {$character.currency.cp}
</div>

<style>
    .box {
        border: 2px solid brown;
        border-radius: 4px;
        padding: 0.5em;
    }

    .currency {
        width: 50%;
    }
</style>