import type { Attributes } from "../interface/Attributes";
import type { Class } from "../type/ClassType";
import type { CharacterValues } from "../interface/CharacterValues";
import type { AttributeType } from "../type/AttributeType";
import type { SkillType } from "../type/SkillType";
import type { Skill } from "../interface/Skill";
import * as Skills5e from "../const/Skills5e";
export class Character implements CharacterValues {

    name: string;
    level: number;
    readonly proficiencyBonus: number;
    class: Class;
    race: string;
    speed: number;
    
    attributes: Attributes;
    skills: Map<Skill, boolean> = new Map([
        [Skills5e.athletics, false],
        [Skills5e.acrobatics, false],
        [Skills5e.sleightOfHand, false],
        [Skills5e.stealth, false],
        [Skills5e.arcana, false],
        [Skills5e.history, false],
        [Skills5e.investigation, false],
        [Skills5e.nature, false],
        [Skills5e.religion, false],
        [Skills5e.animalHandling, false],
        [Skills5e.insight, false],
        [Skills5e.medicine, false],
        [Skills5e.perception, false],
        [Skills5e.survival, false],
        [Skills5e.deception, false],
        [Skills5e.intimidation, false],
        [Skills5e.performance, false],
        [Skills5e.persuasion, false],
    ]);
    
    getProficiency = (): number => Math.ceil(1 + (this.level / 4));
    getInitiative = (): number => this.getAttributeBonus(this.attributes.dex);
    getAttributeBonus = (value: number): number => (value - 10) / 2;
    getSkillBonus = (skill: SkillType): number => {
        const bonus = this.skills[skill] ? this.getProficiency() : 0;
        const mod = this.skills[skill]
    };

    setAttribute = (attribute: AttributeType, value: number) => {
        this.attributes[attribute] = value;
    }
}
