import { Writable, writable } from 'svelte/store';

import { TEST_CHARACTER } from '../data/characterData';
import { Character } from '../model/class/Character';

export const character: Writable<Character> = writable(new Character(TEST_CHARACTER));
