<script lang="ts">
import { onDestroy } from "svelte";
    import Sheet from "./components/sheet/Sheet.svelte";
    import { character } from './store/characterStore';
</script>

<main>
    <Sheet character={$character}/>
</main>
