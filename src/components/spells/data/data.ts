import type { Spell } from "../model/Spell";

export const SPELLS: Record<string, Spell> = {
    "Web": {
        name: "Web",
        level: 1,
        school: 'Conjuration',
        range: 60,
        aoe: [20, 'cube'],
        details: "A sticky spiderweb covers the area making it difficult terrain. lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum "
    },
    "Firebolt": {
        name: "Firebolt",
        level: 0,
        school: 'Evocation',
        range: 80,
        details: "A firebolt shoots form. lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum."
    },
    "Fireball": {
        name: "Fireball",
        level: 3,
        school: 'Evocation',
        range: 45,
        aoe: [30, 'sphere'],
        details: "A sticky spiderweb covers the area making it difficult terrain. lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum ."
    },

}