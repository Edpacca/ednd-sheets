import type { Bonuses } from "../interface/Bonuses";
import type { Skills } from "../interface/Skills";
import type { Attributes } from "../interface/Attributes";
import type { Class } from "../type/Class";
import type { AttributeType } from "../type/Attribute";
import { CharacterSkills } from "./CharacterSkills";
import type { CharacterValues } from "../interface/CharacterValues";
import type { SkillType } from "../type/Skill";

export type Character = {
    level: number,
    class: Class,
    attributes: Attributes;
    skills: Skills;
    name: string;
    race: string;
    // bonuses: Bonuses;
    spells: {}[]
}

export class Character5e implements CharacterValues {

    name: string;
    level: number;

    class: Class;
    race: string;
    speed: number;
    
    attributes: Attributes;
    skills: CharacterSkills = new CharacterSkills();

    getProficiency = (): number => Math.ceil(1 + (this.level / 4));

}
