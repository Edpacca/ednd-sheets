import type { Class } from "../type/ClassType";
import type { SkillType } from "../type/SkillType";
import type { Attributes } from "./Attributes";
import type { Currency } from "./Currency";

export interface CharacterData {
    name: string;
    level: number;
    class: Class;
    race: string;
    speed: number;
    attributes: Attributes;
    proficientSkills: SkillType[];
    doubleProficientSkills: SkillType[];
    hpMax: number;
    hpCurrent: number;
    inspired: boolean;
    currency: Currency
}
