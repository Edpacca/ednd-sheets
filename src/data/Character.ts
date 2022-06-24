import type { Bonuses } from "src/components/bonuses/model/Bonuses";
import type { Skills } from "src/components/skills/model/Skills";
import type { Attributes } from "../components/attributes/model/Attributes";

export type Character = {
    attributes: Attributes;
    skills: Skills;
    name: string;
    race: string;
    bonuses: Bonuses
    spells: {}[]
}
