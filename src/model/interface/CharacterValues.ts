import type { SkillType } from "../type/SkillType";

export interface CharacterValues {
    getProficiency(): number;
    getSkillBonus(skill: SkillType): number;
}

