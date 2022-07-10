<script lang="ts">
    import { NUMBER_SUFFIXES } from "../../../model/const/NumberSuffixes";
    export let level: number;
</script>

<span class="detail">{level}<sup>{NUMBER_SUFFIXES[level]}</sup> level</span>