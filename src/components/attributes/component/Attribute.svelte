<script lang="ts">
    import { calcAttributeBonus } from "../../../logic/dataHandlers";
    export let value: number;
    export let name: string;
    let mod = calcAttributeBonus(value);
</script>

<div class="attribute-wrapper bordered">
    <div class="name">{name.substring(0, 3)}</div>
    <div class="mod num">{`${mod > 0 ? "+" : ""}${mod}`}</div>
    <div class="value num"><span class="normal">&#123;</span> {value} <span class="normal">&#125;</span></div>
</div>

<style>
    .attribute-wrapper {
        text-align: center;
        padding: 0.2em;
    }

    .name {
        border-bottom: 1px solid burlywood;
        font-weight: 550;
        color: brown;
    }

    .mod {
        font-size: 2em;
        padding: 0.2em 0;
    }

    .value {
        font-size: 0.9em;
        font-weight: 600;
        border-top: 1px solid burlywood;
        color: brown;
    }

    .normal {
        font-weight: initial;
    }
</style>
