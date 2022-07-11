import { SKILL_ATTRIBUTES } from "../model/const/SkillAttributes";
import type { CharacterSheetData } from "../model/interface/CharacterSheetData";
import type { SkillType } from "../model/type/SkillType";

export const calcProficiency = (level: number): number => Math.ceil(1 + (level / 4));
export const calcAttributeBonus = (value: number): number => Math.floor((value - 10) / 2);
export const getSkillBonus = (skill: SkillType, character: CharacterSheetData): number => {
    const bonus = character.skills[skill] ? character.proficiencyBonus : 0;
    const mod = calcAttributeBonus(character.attributes[SKILL_ATTRIBUTES.get(skill)]);
    return mod + bonus;
}

export const sortSpellsByLevel = (spells) => spells.sort((a, b) => a.level < b.level ? -1 : a.level > b.level ? 1 : 0);