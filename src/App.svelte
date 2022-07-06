<script lang="ts">
import ShieldSvg from "./assets/Shield-svg.svelte";

    import Sheet from "./components/sheet/Sheet.svelte";
import { TEST_CHARACTER } from "./data/data";
</script>

<main>
    <Sheet character={TEST_CHARACTER}/>
</main>
