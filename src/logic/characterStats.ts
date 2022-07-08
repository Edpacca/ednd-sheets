export const calcProficiency = (level: number): number => Math.ceil(1 + (level / 4));
export const calcAttributeBonus = (value: number): number => Math.floor((value - 10) / 2);
