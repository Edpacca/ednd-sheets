import type { AttributeType } from "src/model/type/Attribute";
import type { SkillType } from "src/model/type/Skill"

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
    readonly skill: SkillType
    proficienct: boolean;

    constructor (name: string, attribute: AttributeType) {
        this.skill = {name, attribute}
        this.proficienct = false;
    }
}
