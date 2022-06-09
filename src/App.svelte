<script lang="ts">
    import Sheet from "./components/sheet/Sheet.svelte";
import { TEST_CHARACTER } from "./data/data";
</script>

<main>
    <Sheet character={TEST_CHARACTER}/>
</main>

<style>
    main {
        font-family:Georgia, 'Times New Roman', Times, serif;
    }
</style>
