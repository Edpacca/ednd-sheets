import { Writable, writable } from 'svelte/store';

export const spells:Writable<any[]> = writable([]);
