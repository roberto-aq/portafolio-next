import { Technology } from '@prisma/client';
import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface TechnologiesState {
	selectedTechnology: null | Technology;
	setSelectedTechnology: (technology: Technology | null) => void;
}

const storeApi: StateCreator<TechnologiesState> = set => ({
	selectedTechnology: null,

	setSelectedTechnology: technology =>
		set({
			selectedTechnology: technology,
		}),
});

export const useTechnologiesStore = create<TechnologiesState>()(
	devtools(storeApi)
);
