// module.ts
import type { Skill } from "../interface/Skill"

    export const athletics: Skill = { skill: 'Athletics', attribute: 'str' };
    export const acrobatics: Skill = {skill: 'Acrobatics', attribute: 'dex'};
    export const sleightOfHand: Skill = {skill: 'Sleight of Hand', attribute: 'dex'};
    export const stealth: Skill = {skill: 'Stealth', attribute: 'dex'};
    export const arcana: Skill = {skill: 'Arcanca', attribute: 'int'};
    export const history: Skill = {skill: 'History', attribute: 'int'};
    export const investigation: Skill = {skill: 'Investigation', attribute: 'int'};
    export const nature: Skill = {skill: 'Nature', attribute: 'int'};
    export const religion: Skill = {skill: 'Religion', attribute: 'int'};
    export const animalHandling: Skill = {skill: 'Animal Handling', attribute: 'wis'};
    export const insight: Skill = {skill: 'Insight', attribute: 'wis'};
    export const medicine: Skill = {skill: 'Medicine', attribute: 'wis'};
    export const perception: Skill = {skill: 'Perception', attribute: 'wis'};
    export const survival: Skill = {skill: 'Survival', attribute: 'wis'};
    export const deception: Skill = {skill: 'Deception', attribute: 'cha'};
    export const intimidation: Skill = {skill: 'Intimidation', attribute: 'cha'};
    export const performance: Skill = {skill: 'Performance', attribute: 'cha'};
    export const persuasion: Skill = {skill: 'Persuasion', attribute: 'cha'};

export * as Skills5e from './Skills5e';
