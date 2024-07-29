import { initialData } from './seed';

import prisma from '../lib/prisma';

async function main() {
	// Borrar registros previos
	await prisma.project.deleteMany();
	await prisma.job.deleteMany();
	await prisma.technology.deleteMany();

	const { technologies, projects } = initialData;

	// Crear las tecnologías y obtenerlas
	await prisma.technology.createMany({ data: technologies });

	// Crear proyectos
	for (const project of projects) {
		await prisma.project.create({
			data: {
				...project,
				technologies: {
					connect: project.technologies.map(id => ({ id })),
				},
			},
		});
	}

	console.log('Seed completado exitosamente');
}

(() => {
	if (process.env.NODE_ENV === 'production') return;

	main();
})();
