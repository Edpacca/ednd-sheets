<script lang="ts">
    import type { CurrencyType } from "../../model/type/CurrencyType";
    export let value: Number;
    export let name: CurrencyType;
    export let icon: string;
</script>

<div class="coin-wrapper">
    <input type=number min=0 bind:value={value} placeholder={value?.toString()}/>
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
        margin: 0.2em;
        cursor: pointer;
    }
</style>