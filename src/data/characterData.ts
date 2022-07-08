
import type { CharacterData } from "src/model/interface/CharacterData";

export const TEST_CHARACTER: CharacterData = {

    name: "Jeremiah Snagglebark",
    race: "Forest Gnome",
    level: 2,
    class: 'Wizard',
    speed: 25,

    attributes: {
        str: 9,
        dex: 12,
        con: 14,
        int: 20,
        wis: 14,
        cha: 12
    },

    proficientSkills: [
        'Insight',
        'History',
        'Investigation',
        'Animal handling'
    ]
}
