import { Writable, writable } from 'svelte/store';
import { TEST_CHARACTER } from '../data/characterData';
import type { Character } from '../model/Character';
import { getProficiency } from '../logic/characterStats';

export const character: Writable<Character> = writable(TEST_CHARACTER);
export const proficiency: Writable<Number> = writable(getProficiency(TEST_CHARACTER.level));
