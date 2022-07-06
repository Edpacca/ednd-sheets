import type { Character } from "../models/Character";

export const TEST_CHARACTER: Character = {
    name: "Jeremiah Snagglebark",
    race: "Forest Gnome",
    level: 2,
    class: 'Wizard',

    attributes: {
        str: 18,
        dex: 16,
        con: 12,
        int: 10,
        wis: 8,
        cha: 6
    },

    skills: {
        athletics: [4, true],
        acrobatics: [2, false],
        sleightOfHand: [3, false],
        stealth: [5, false],
        arcana: [1, false],
        history: [0, false],
        investigation: [-3, true],
        nature: [-2, false],
        religion: [0, false],
        animalHandling: [7, false],
        insight: [10, false],
        medicine: [1, false],
        perception: [5, true],
        survival: [11, false],
        deception: [-2, false],
        intimidation: [-2, false],
        performance: [8, false],
        persuasion: [6, true]
    },

    // bonuses: {
    //     initiative: 3,
    //     proficiency: 2
    // },

    spells: []
}
