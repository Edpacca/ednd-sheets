import type { Skill } from "../interface/Skill"
import type { AttributeType } from "../type/AttributeType";
import type { SkillType } from "../type/SkillType";

export const SkillAttributes: Map <SkillType, AttributeType> = new Map([
    ['Athletics', 'str' ],
    ['Acrobatics', 'dex'],
    ['Sleight of Hand', 'dex'],
    ['Stealth', 'dex'],
    ['Arcanca', 'int'],
    ['History', 'int'],
    ['Investigation', 'int'],
    ['Nature', 'int'],
    ['Religion', 'int'],
    ['Animal Handling', 'wis'],
    ['Insight', 'wis'],
    ['Medicine', 'wis'],
    ['Perception', 'wis'],
    ['Survival', 'wis'],
    ['Deception', 'cha'],
    ['Intimidation', 'cha'],
    ['Performance', 'cha'],
    ['Persuasion', 'cha']
]); 
