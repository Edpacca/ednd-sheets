import type { Bonuses } from "../components/bonuses/model/Bonuses";
import type { Character } from "../models/Character";

export function getProficiency(level: number): number {
    return Math.ceil(1 + (level / 4));
}

export function getAttributeBonus(value: number): number {
    return (value - 10) / 2;
}

export function getBonuses(character: Character): Bonuses {
    return {
        initiative: getAttributeBonus(character.attributes.dex),
        proficiency: getProficiency(character.level)
    }
}