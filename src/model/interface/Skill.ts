import type { AttributeType } from "../type/AttributeType";
import type { SkillType } from "../type/SkillType";

export interface Skill {
    readonly skill: SkillType;
    readonly attribute: AttributeType;
}
