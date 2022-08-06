<script>
    import { character } from "../../store/characterStore";
    let checkboxContent = "\\2742";
</script>

<div class="inspiration-wrapper">
    <input type="checkbox" bind:checked={$character.inspired}/>
    <div class="text detail">Inspired</div>
</div>

<style>
    input[type="checkbox"] {
        appearance: none;
        margin: 0;
        font: inherit;
        color: currentColor;
        width: 100%;
        height: 100%;
        border: 2px solid burlywood;
        border-radius: 0.15em;
        display: grid;
        place-content: center;
    }

    input[type="checkbox"]::before {
        content: "\2742";
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        font-size: 3em;
        font-weight: 800;
        color: brown;
        margin-bottom: 0.15em;
    }

    input[type="checkbox"]:checked::before {
        transform: scale(1);
    }

    .text {
        font-size: 0.9em;
        font-weight: 600;
        text-align: center;
        color: brown;
        margin-top: 0.2em;
    }
</style>