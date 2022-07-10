import type { Class } from "../type/ClassType";
import type { Attributes } from "./Attributes";
import type { Skills } from "./Skills";

export interface CharacterSheetData {
    name: string;
    level: number;
    readonly class: Class;
    readonly race: string;
    readonly speed: number;
    readonly proficiencyBonus: number;
    readonly initiative: number
    attributes: Attributes;
    skills: Skills;
    hpMax: number;
    hpCurrent: number;
    inspired: boolean;
    spells: any[];
}