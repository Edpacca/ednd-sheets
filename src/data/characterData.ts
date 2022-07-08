import type { CharacterData } from "src/model/interface/CharacterData";

export const TEST_CHARACTER: CharacterData = {

    name: "Jeremiah Snagglebark",
    race: "Forest Gnome",
    level: 2,
    class: 'Wizard',
    speed: 25,

    attributes: {
        str: 18,
        dex: 16,
        con: 12,
        int: 10,
        wis: 8,
        cha: 6
    },

    proficientSkills: [
        'Insight',
        'History',
        'Investigation',
        'Animal Handling'
    ]
}
