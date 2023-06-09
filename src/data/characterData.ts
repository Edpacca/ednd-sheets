
import type { CharacterData } from "src/model/interface/CharacterData";
import { SPELLS } from "./spellData";

export const TEST_CHARACTER: CharacterData = {

    name: "Jeremiah Snagglebark",
    race: "Forest Gnome",
    level: 2,
    class: 'Wizard',
    speed: 25,
    hpMax: 19,
    hpCurrent: 11,
    inspired: false,

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
    ],

    doubleProficientSkills: [
        'History',
        'Deception',
    ],

    currency: {
        'cp': 24,
        'sp': 10,
        'gp': 45,
        'pp': 0,
        'ep' : 0
    }
}
