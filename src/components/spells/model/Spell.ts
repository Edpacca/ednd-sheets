export type Spell = {
    name: string,
    level: number,
    school: School,
    range: Range,
    details: string,
    aoe?: AreaOfEffect,
    damage?: Damage,
    save?: SavingThrow,
}

export type School = 'Evocation' | 'Divination' | 'Abjuration' | 'Conjuration'
export type Range = number | 'touch'
export type AreaOfEffect = [number, Area]
export type Area = 'cube' | 'cone' | 'sphere'
export type Damage = [number, number, number]
export type SavingThrow = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'