<script>
    import { character } from "../../../store/characterStore";
    export let value;
    export let skill;

    const getPrefix = (value) => value > 0 ? "+" : "";
    const getValueString = (value) => getPrefix(value) + value;
    
</script>

<div class="skill-wrapper">
    <input type="checkbox" class="checkbox" bind:value={$character.skills[skill]}/>
    <div class="name">{skill}</div>
    <div class="value num">{getValueString(value)}</div>
    <div>{$character.skills[skill]}</div>
</div>

<style>
    .skill-wrapper {
        display: flex;
        column-gap: 0.5em;
        border-top: 1px solid burlywood;
        align-items: center;
        margin: 0 0.25em;
    }

    .name {
        font-size: 0.9em;
        color: brown;
    }

    .value {
        text-align: right;
        margin-left: auto;
        padding: 0 1em;
        font-weight: 600;
    }

    input[type="checkbox"] {
        appearance: none;
        margin: 0;
        font: inherit;
        color: currentColor;
        width: 1.15em;
        height: 1.15em;
        border: 2px solid burlywood;
        border-radius: 0.15em;
        display: grid;
        place-content: center;
    }

    input[type="checkbox"]::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        border-radius: 0.08em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em brown;
    }

    input[type="checkbox"]:checked::before {
        transform: scale(1);
    }

</style>
