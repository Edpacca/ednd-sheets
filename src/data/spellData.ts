export const SPELLS: any[] = [
    {
        "name": "Rime's Binding Ice",
        "source": "FTD",
        "page": 21,
        "level": 2,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "cone",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "s": true,
            "m": "a vial of meltwater"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "entries": [
            "A burst of cold energy emanates from you in a 30-foot cone. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes {@damage 3d8} cold damage and is hindered by ice formations for 1 minute, or until it or another creature within reach of it uses an action to break away the ice. A creature hindered by ice has its speed reduced to 0. On a successful save, a creature takes half as much damage and isn't hindered by ice."
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "At Higher Levels",
                "entries": [
                    "When you cast this spell using a spell slot of 3rd level or higher, increase the cold damage by {@scaledamage 3d8|2-9|1d8} for each slot level above 2nd."
                ]
            }
        ],
        "damageInflict": [
            "cold"
        ],
        "savingThrow": [
            "constitution"
        ],
        "areaTags": [
            "N"
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "hasFluffImages": true
    },
    {
        "name": "Summon Draconic Spirit",
        "source": "FTD",
        "page": 21,
        "level": 5,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "an object with the image of a dragon engraved on it, worth at least 500 gp",
                "cost": 50000
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "entries": [
            "You call forth a {@creature draconic spirit|FTD}. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Draconic Spirit stat block. When you cast this spell, choose a family of dragon: chromatic, gem, or metallic. The creature resembles a dragon of the chosen family, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
            "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the {@action Dodge} action and uses its move to avoid danger."
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "At Higher Levels",
                "entries": [
                    "When you cast this spell using a spell slot of 6th level or higher, use the higher level wherever the spell's level appears in the stat block."
                ]
            }
        ],
        "savingThrow": [
            "dexterity"
        ],
        "miscTags": [
            "SGT",
            "SMN"
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        }
    },
    {
        "name": "Blade Barrier",
        "source": "PHB",
        "page": 218,
        "srd": true,
        "basicRules": true,
        "level": 6,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "entries": [
            "You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is {@quickref difficult terrain||3}.",
            "When a creature enters the wall's area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes {@damage 6d10} slashing damage. On a successful save, the creature takes half as much damage."
        ],
        "damageInflict": [
            "slashing"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "W"
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ]
        }
    },
    {
        "name": "Invisibility",
        "source": "PHB",
        "page": 254,
        "srd": true,
        "basicRules": true,
        "level": 2,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "an eyelash encased in gum arabic"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "entries": [
            "A creature you touch becomes {@condition invisible} until the spell ends. Anything the target is wearing or carrying is {@condition invisible} as long as it is on the target's person. The spell ends for a target that attacks or casts a spell."
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "At Higher Levels",
                "entries": [
                    "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
                ]
            }
        ],
        "conditionInflict": [
            "invisible"
        ],
        "areaTags": [
            "ST"
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer (Revisited)",
                    "source": "UAArtificerRevisited"
                },
                {
                    "name": "Artificer",
                    "source": "TCE"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Grassland"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Treachery (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Cloud"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Twilight (UA)",
                        "source": "UAClericDruidWizard"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB"
                    }
                }
            ]
        },
        "races": [
            {
                "name": "Dwarf (Duergar)",
                "source": "SCAG",
                "baseName": "Dwarf",
                "baseSource": "PHB"
            },
            {
                "name": "Dwarf (Duergar)",
                "source": "MTF",
                "baseName": "Dwarf",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Dispater)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Glasya)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Glasya)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Elf (Mark of Shadow)",
                "source": "ERLW",
                "baseName": "Elf",
                "baseSource": "PHB"
            }
        ],
        "eldritchInvocations": [
            {
                "name": "Shroud of Shadow",
                "source": "XGE"
            }
        ]
    },
    {
        "name": "Blade Barrier",
        "source": "PHB",
        "page": 218,
        "srd": true,
        "basicRules": true,
        "level": 6,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "entries": [
            "You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is {@quickref difficult terrain||3}.",
            "When a creature enters the wall's area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes {@damage 6d10} slashing damage. On a successful save, the creature takes half as much damage."
        ],
        "damageInflict": [
            "slashing"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "W"
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ]
        }
    },
    {
        "name": "Power Word Heal",
        "source": "PHB",
        "page": 266,
        "level": 9,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "entries": [
            "A wave of healing energy washes over the creature you touch. The target regains all its hit points. If the creature is {@condition charmed}, {@condition frightened}, {@condition paralyzed}, or {@condition stunned}, the condition ends. If the creature is {@condition prone}, it can use its reaction to stand up. This spell has no effect on undead or constructs."
        ],
        "affectsCreatureType": [
            "aberration",
            "beast",
            "celestial",
            "dragon",
            "elemental",
            "fey",
            "fiend",
            "giant",
            "humanoid",
            "monstrosity",
            "ooze",
            "plant"
        ],
        "miscTags": [
            "HL"
        ],
        "areaTags": [
            "ST"
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                }
            ],
            "fromClassListVariant": [
                {
                    "name": "Cleric",
                    "source": "PHB",
                    "definedInSource": "UAClassFeatureVariants"
                },
                {
                    "name": "Druid",
                    "source": "PHB",
                    "definedInSource": "UAClassFeatureVariants"
                },
                {
                    "name": "Cleric",
                    "source": "PHB",
                    "definedInSource": "TCE"
                }
            ]
        }
    }
]
