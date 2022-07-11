import { Writable, writable } from 'svelte/store';
import { TEST_CHARACTER } from '../data/characterData';
import { generateCharacterSheetData } from '../logic/scripts';
import type { CharacterSheetData } from '../model/interface/CharacterSheetData';

export const character: Writable<CharacterSheetData> = writable(generateCharacterSheetData(TEST_CHARACTER));
