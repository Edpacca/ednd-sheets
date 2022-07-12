<script lang="ts">
    import { NUMBER_SUFFIXES } from "../../../model/const/NumberSuffixes";
    export let level: number;
</script>

{#if level > 0}
    <span class="detail">{level}<sup>{NUMBER_SUFFIXES[level]}</sup> level</span>
{:else}
    <span class="detail">cantrip</span>
{/if}
