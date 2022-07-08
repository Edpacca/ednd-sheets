import type { Attributes } from "../interface/Attributes";
import type { Class } from "../type/ClassType";
import type { CharacterValues } from "../interface/CharacterValues";
import type { AttributeType } from "../type/AttributeType";
import type { SkillType } from "../type/SkillType";
import { SkillAttributes } from "../const/SkillAttributes";
export class Character implements CharacterValues {

    name: string;
    level: number;
    class: Class;
    race: string;
    speed: number;
    readonly proficiencyBonus: number;

    attributes: Map<AttributeType, number>

    skills: Map<SkillType, boolean> = new Map([
        ['Athletics', false],
        ['Acrobatics', false],
        ['Sleight of Hand', false],
        ['Stealth', false],
        ['Arcanca', false],
        ['History', false],
        ['Investigation', false],
        ['Nature', false],
        ['Religion', false],
        ['Animal Handling', false],
        ['Insight', false],
        ['Medicine', false],
        ['Perception', false],
        ['Survival', false],
        ['Deception', false],
        ['Intimidation', false],
        ['Performance', false],
        ['Persuasion', false]
    ]);
    
    constructor(str: number, dex: number, con: number, int: number, wis: number, cha: number) {
       this.attributes = new Map([
            ['str', str], ['dex', dex], ['con', con],
            ['int', int], ['wis', wis], ['cha', cha],
        ]);
    }

    getProficiency = (): number => Math.ceil(1 + (this.level / 4));
    getInitiative = (): number => this.getAttributeBonus(this.attributes.dex);
    getAttributeBonus = (value: number): number => (value - 10) / 2;
    getSkillBonus = (skill: SkillType): number => {
        const bonus = this.skills[skill] ? this.getProficiency() : 0;
        const mod = this.getAttributeBonus(this.attributes[SkillAttributes[skill]]);
        return mod + bonus;
    };

    setAttribute = (attribute: AttributeType, value: number) => {
        this.attributes[attribute] = value;
    }
}
