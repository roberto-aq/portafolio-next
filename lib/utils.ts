import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const projectFormSchema = z.object({
	name: z
		.string()
		.min(2, 'El nombre debe tener al menos 2 carácteres'),
	shortDescription: z
		.string()
		.min(
			10,
			'La descripción corta debe tener al menos 10 carácteres'
		),
	longDescription: z
		.string()
		.min(
			50,
			'La descripción larga debe tener al menos 50 cáracteres'
		),
	type: z.enum(['full-stack', 'front-end', 'back-end', 'mobile']),
	category: z
		.string()
		.min(2, 'La categoría debe tener al menos 2 caracteres'),
	link: z.string().url('Debe ser una URL válida'),
	githubRepo: z.string().url('Debe ser una URL válida'),
	// TODO: ARREGLAR LAS IMAGENES
	frontImage: z
		.string()
		.min(1, 'Debe proporcionar una ruta de imagen'),
	images: z
		.string()
		.min(1, 'Debe proporcionar una ruta de imagen')
		.nullish(),

	technologies: z
		.array(z.string())
		.min(1, 'Debe incluir al menos una tecnología'),
	features: z
		.array(
			z.object({
				title: z
					.string()
					.min(2, 'El título debe tener al menos 2 caracteres'),
				description: z
					.string()
					.min(
						10,
						'La descripción debe tener al menos 10 caracteres'
					),
			})
		)
		.nullish(),
	challenges: z.array(z.string()).optional(),
	learnings: z.array(z.string()).optional(),
	role: z
		.string()
		.min(2, 'El rol debe tener al menos 2 caracteres')
		.nullish(),
	teamSize: z.number().int().positive().optional(),
	responsibilities: z.array(z.string()).optional(),
	duration: z.string().optional(),
	status: z.enum(['in_progress', 'completed', 'maintenance']),
	testimonials: z.array(z.string()).optional(),
	metrics: z
		.record(z.string(), z.union([z.string(), z.number()]))
		.optional(),
});

export function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms * 1000));
}
