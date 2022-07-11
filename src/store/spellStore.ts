import { Writable, writable } from 'svelte/store';
import { SPELLS } from '../data/spellData';

export const spells:Writable<any[]> = writable(SPELLS);
