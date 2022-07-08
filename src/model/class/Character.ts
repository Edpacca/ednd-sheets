import type { Attributes } from "../interface/Attributes";
import type { Class } from "../type/ClassType";
import type { CharacterValues } from "../interface/CharacterValues";
import type { AttributeType } from "../type/AttributeType";
import type { SkillType } from "../type/SkillType";
import { SkillAttributes } from "../const/SkillAttributes";
import { Writable, writable } from "svelte/store";
import type { CharacterData } from "../interface/CharacterData";
export class Character {

    name: Writable<string>;
    level: Writable<number>;
    class: Writable<Class>;
    race: Writable<string>;
    speed: Writable<number>;
    readonly proficiencyBonus: Writable<number>;

    attributes: Writable<Map<AttributeType, number>>

    skills: Writable<Map<SkillType, boolean>> = writable(new Map([
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
    ]));
    
    constructor(data: CharacterData) {
       this.attributes = writable(new Map([
            ['str', data.attributes.str], 
            ['dex', data.attributes.dex], 
            ['con', data.attributes.con],
            ['int', data.attributes.int], 
            ['wis', data.attributes.wis], 
            ['cha', data.attributes.cha],
        ]));

        data.proficientSkills.forEach(skill => this.skills[skill] = true);
        this.proficiencyBonus = writable(this.getProficiency(data.level));
    }

    getProficiency = (level: number): number => Math.ceil(1 + (level / 4));
    getInitiative = (): number => this.getAttributeBonus(this.attributes['dex']);
    getAttributeBonus = (value: number): number => (value - 10) / 2;

    getSkillBonus = (skill: SkillType): number => {
        const bonus = this.skills[skill] ? this.proficiencyBonus : 0;
        const mod = this.getAttributeBonus(this.attributes[SkillAttributes[skill]]);
        return mod + bonus;
    };

    getSkillBonuses = (): Map<SkillType, number> => {
        const map = new Map();
        this.skills.forEach((value, key) => {
            map.set(key, this.getSkillBonus(key));
        });

        return map;
    }

    setAttribute = (attribute: AttributeType, value: number) => {
        this.attributes[attribute] = value;
    }
}
