import type { SkillType } from "./type/Skill"

export type Skills = {
    // Str
    athletics: SkillType,

    // Dex
    acrobatics: SkillType,
    sleightOfHand: SkillType,
    stealth: SkillType,

    // Int
    arcana: SkillType,
    history: SkillType,
    investigation: SkillType,
    nature: SkillType,
    religion: SkillType,

    // Wis
    animalHandling: SkillType,
    insight: SkillType,
    medicine: SkillType,
    perception: SkillType,
    survival: SkillType,

    // Cha
    deception: SkillType,
    intimidation: SkillType,
    performance: SkillType,
    persuasion: SkillType
}

