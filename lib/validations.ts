import { z } from 'zod';

export const technologyFormSchema = z.object({
	name: z
		.string()
		.min(2, 'El nombre debe tener al menos 2 carácteres'),
	image: z.string().optional(),
});
