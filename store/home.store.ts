import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type Section = 'about' | 'experience' | 'projects';

export interface HomeState {
	activeSection: Section;
	setActiveSection: (activeSection: Section) => void;
}

const storeApi: StateCreator<HomeState> = set => ({
	activeSection: 'about',

	setActiveSection: (activeSection: Section) =>
		set({ activeSection }),
});

export const useHomeStore = create<HomeState>()(devtools(storeApi));
