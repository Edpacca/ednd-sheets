import type { Bonuses } from "../components/bonuses/model/Bonuses";
import type { Skills } from "../components/skills/model/Skills";
import type { Attributes } from "../components/attributes/model/Attributes";
import type { Class } from "./Class";

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
