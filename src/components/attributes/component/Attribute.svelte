<script lang="ts">
    import type { AttributeName } from "../model/Attributes";
    export let value: number;
    export let name: AttributeName;
    let mod = (value - 10) / 2;
</script>

<div class="attribute-wrapper">
    <div>{name.substring(0, 3)}</div>
    <div class="mod">{`${mod > 0 ? "+" : ""}${mod}`}</div>
    <div class="value">{value}</div>
</div>

<style>
    .attribute-wrapper {
        border: 1px solid red;
        text-align: center;
    }

    .mod {
        font-size: 2em;
        border: 1px solid black;
    }

    .value {
        font-size: 0.8em;
        border: 1px solid green;
    }
</style>