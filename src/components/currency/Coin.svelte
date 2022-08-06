<script lang="ts">
import type { CurrencyType } from "src/model/type/CurrencyType";
    export let value: Number;
    export let name: CurrencyType;
    export let icon;
</script>

<div class="coin-wrapper">
    <input bind:value={value} placeholder={value.toString()}/>
    <div class="title3">{name}</div>
    <img src={icon} alt={name}/>
</div>

<style>
    .coin-wrapper {
        border: 2px solid brown;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.2em;
    }

    input {
        text-align: center;
        padding: 0.2em;
        width: 50%;
    }

    img {
        width: 20%;
        margin-top: 0.2em;
    }
</style>