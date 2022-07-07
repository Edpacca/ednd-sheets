import type { Bonuses } from "./Bonuses";
import type { Skills } from "./Skills";
import type { Attributes } from "./Attributes";
import type { Class } from "./type/Class";

export type Character = {
    level: number,
    class: Class,
    attributes: Attributes;
    skills: Skills;
    name: string;
    race: string;
    // bonuses: Bonuses;
    spells: {}[]
}

