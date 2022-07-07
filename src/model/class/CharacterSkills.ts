import type { Skill } from "../interface/Skill";
import type { AttributeType } from "../type/AttributeType";
import type { SkillType } from "../type/SkillType";

export class CharacterSkills {
    acrobatics = new CharacterSkill('Acrobatics', 'str');
    sleightOfHand = new CharacterSkill('Sleight of Hand', 'dex');
    stealth = new CharacterSkill('Stealth', 'dex');
    arcana = new CharacterSkill('Arcanca', 'int');
    history = new CharacterSkill('History', 'int');
    investigation = new CharacterSkill('Investigation', 'int');
    nature = new CharacterSkill('Nature', 'int');
    religion = new CharacterSkill('Religion', 'int');
    animalHandling = new CharacterSkill('Animal Handling', 'wis');
    insight = new CharacterSkill('Insight', 'wis');
    medicine = new CharacterSkill('Medicine', 'wis');
    perception = new CharacterSkill('Perception', 'wis');
    survival = new CharacterSkill('Survival', 'wis');
    deception = new CharacterSkill('Deception', 'cha');
    intimidation = new CharacterSkill('Intimidation', 'cha');
    performance = new CharacterSkill('Performance', 'cha');
    persuasion = new CharacterSkill('Persuasion', 'cha');
}

class CharacterSkill {
    readonly skill: Skill
    proficienct: boolean;

    constructor (skill: SkillType, attribute: AttributeType) {
        this.skill = {skill, attribute}
        this.proficienct = false;
    }
}
