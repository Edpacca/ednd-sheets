import { calcAttributeBonus, calcProficiency } from "../../logic/characterStats";
import { SKILL_ATTRIBUTES } from "../const/SkillAttributes";
import type { CharacterData } from "../interface/CharacterData";
import type { AttributeType } from "../type/AttributeType";
import type { SkillType } from "../type/SkillType";
import type { Class } from "../type/ClassType";
export class Character {

    name: string;
    level: number;
    readonly class: Class;
    readonly race: string;
    readonly speed: number;
    readonly proficiencyBonus: number;
    readonly initiative: number

    attributes: Map<AttributeType, number> = new Map([
        ['str', 10], 
        ['dex', 10], 
        ['con', 10],
        ['int', 10], 
        ['wis', 10], 
        ['cha', 10],
    ]);

    skills: Map<SkillType, boolean> = new Map([
        ['Athletics', false],
        ['Acrobatics', false],
        ['Sleight of hand', false],
        ['Stealth', false],
        ['Arcana', false],
        ['History', false],
        ['Investigation', false],
        ['Nature', false],
        ['Religion', false],
        ['Animal handling', false],
        ['Insight', false],
        ['Medicine', false],
        ['Perception', false],
        ['Survival', false],
        ['Deception', false],
        ['Intimidation', false],
        ['Performance', false],
        ['Persuasion', false]
    ]);
    
    constructor(data: CharacterData) {
       this.attributes['str'] = data.attributes.str;
       this.attributes['dex'] = data.attributes.dex;
       this.attributes['con'] = data.attributes.con;
       this.attributes['int'] = data.attributes.int;
       this.attributes['wis'] = data.attributes.wis;
       this.attributes['cha'] = data.attributes.cha;

        data.proficientSkills.forEach(skill => this.skills[skill] = true);

        this.name = data.name;
        this.level = data.level;
        this.race = data.race;
        this.speed = data.speed;
        this.proficiencyBonus = calcProficiency(data.level);
        this.initiative = calcAttributeBonus(data.attributes.dex);
    }

    getSkillBonus = (skill: SkillType): number => {
        const bonus = this.skills[skill] ? this.proficiencyBonus : 0;
        const mod = calcAttributeBonus(this.attributes[SKILL_ATTRIBUTES.get(skill)]);
        return mod + bonus;
    };

    setProficiency = (skill: SkillType, proficienct: boolean) => {
        this.skills[skill] = proficienct;
    }
}
