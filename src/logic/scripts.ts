import type { CharacterSheetData } from "../model/interface/CharacterSheetData";
import type { CharacterData } from "../model/interface/CharacterData";
import { calcAttributeBonus, calcProficiency } from "./dataHandlers";
import type { SkillType } from "src/model/type/SkillType";

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

        skillProficiencies: {
            'Athletics': getProficiencyValue(data, 'Athletics'),
            'Acrobatics': getProficiencyValue(data, 'Acrobatics'),
            'Sleight of hand': getProficiencyValue(data, 'Sleight of hand'),
            'Stealth': getProficiencyValue(data, 'Stealth'),
            'Arcana': getProficiencyValue(data, 'Arcana'),
            'History': getProficiencyValue(data, 'History'),
            'Investigation': getProficiencyValue(data, 'Investigation'),
            'Nature': getProficiencyValue(data, 'Nature'),
            'Religion': getProficiencyValue(data, 'Religion'),
            'Animal handling': getProficiencyValue(data, 'Animal handling'),
            'Insight': getProficiencyValue(data, 'Insight'),
            'Medicine': getProficiencyValue(data, 'Medicine'),
            'Perception': getProficiencyValue(data, 'Perception'),
            'Survival': getProficiencyValue(data, 'Survival'),
            'Deception': getProficiencyValue(data, 'Deception'),
            'Intimidation': getProficiencyValue(data, 'Intimidation'),
            'Performance': getProficiencyValue(data, 'Performance'),
            'Persuasion': getProficiencyValue(data, 'Persuasion')
        },

        currency: data.currency
    }

    return character;
}

function getProficiencyValue(data: CharacterData, skill: SkillType) {
    if (data.doubleProficientSkills.includes(skill))
        return 2;
    else if (data.proficientSkills.includes(skill))
        return 1;
    else
        return 0;
}
