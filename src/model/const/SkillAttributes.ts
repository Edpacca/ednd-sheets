import type { AttributeType } from "../type/AttributeType";
import type { SkillType } from "../type/SkillType";

export const SKILL_ATTRIBUTES: Map <SkillType, AttributeType> = new Map([
    ['Athletics', 'str' ],
    ['Acrobatics', 'dex'],
    ['Sleight of hand', 'dex'],
    ['Stealth', 'dex'],
    ['Arcana', 'int'],
    ['History', 'int'],
    ['Investigation', 'int'],
    ['Nature', 'int'],
    ['Religion', 'int'],
    ['Animal handling', 'wis'],
    ['Insight', 'wis'],
    ['Medicine', 'wis'],
    ['Perception', 'wis'],
    ['Survival', 'wis'],
    ['Deception', 'cha'],
    ['Intimidation', 'cha'],
    ['Performance', 'cha'],
    ['Persuasion', 'cha']
]); 

