import type { CharacterSheetData } from "../model/interface/CharacterSheetData";
import type { CharacterData } from "../model/interface/CharacterData";
import { calcAttributeBonus, calcProficiency } from "./dataHandlers";

export function generateCharacterSheetData(data: CharacterData): CharacterSheetData {
    const character: CharacterSheetData = {
        
        name: data.name,
        level: data.level,
        race: data.race,
        speed: data.speed,
        class: data.class,
        proficiencyBonus: calcProficiency(data.level),
        initiative: calcAttributeBonus(data.attributes.dex),
        hpMax: data.hpMax,
        hpCurrent: data.hpCurrent,
        inspired: data.inspired,

        attributes: {
            'str': data.attributes.str, 
            'dex': data.attributes.dex, 
            'con': data.attributes.con,
            'int': data.attributes.int, 
            'wis': data.attributes.wis, 
            'cha': data.attributes.cha,
        },

        skills: {
            'Athletics': data.proficientSkills.includes('Athletics'),
            'Acrobatics': data.proficientSkills.includes('Acrobatics'),
            'Sleight of hand': data.proficientSkills.includes('Sleight of hand'),
            'Stealth': data.proficientSkills.includes('Stealth'),
            'Arcana': data.proficientSkills.includes('Arcana'),
            'History': data.proficientSkills.includes('History'),
            'Investigation': data.proficientSkills.includes('Investigation'),
            'Nature': data.proficientSkills.includes('Nature'),
            'Religion': data.proficientSkills.includes('Religion'),
            'Animal handling': data.proficientSkills.includes('Animal handling'),
            'Insight': data.proficientSkills.includes('Insight'),
            'Medicine': data.proficientSkills.includes('Medicine'),
            'Perception': data.proficientSkills.includes('Perception'),
            'Survival': data.proficientSkills.includes('Survival'),
            'Deception': data.proficientSkills.includes('Deception'),
            'Intimidation': data.proficientSkills.includes('Intimidation'),
            'Performance': data.proficientSkills.includes('Performance'),
            'Persuasion': data.proficientSkills.includes('Persuasion')
        },
    }

    return character;
}

