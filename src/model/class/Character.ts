import type { Attributes } from "../interface/Attributes";
import type { Class } from "../type/ClassType";
import { CharacterSkills } from "./CharacterSkills";
import type { CharacterValues } from "../interface/CharacterValues";
import type { AttributeType } from "../type/AttributeType";
import type { SkillType } from "../type/SkillType";

export class Character implements CharacterValues {

    name: string;
    level: number;

    class: Class;
    race: string;
    speed: number;
    
    attributes: Attributes;
    skills: CharacterSkills = new CharacterSkills();

    getProficiency = (): number => Math.ceil(1 + (this.level / 4));
    getInitiative = (): number => this.getAttributeBonus(this.attributes.dex);
    getAttributeBonus = (value: number): number => (value - 10) / 2;
    getSkillBonus = (skill: SkillType): number => ;

    setAttribute = (attribute: AttributeType, value: number) => {
        this.attributes[attribute] = value;
    }
}
