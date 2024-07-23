import { initialData } from './seed';

import prisma from '../lib/prisma';

async function main() {
	// Borrar registros previos
	await prisma.project.deleteMany();
	await prisma.job.deleteMany();
	await prisma.technology.deleteMany();

	const { technologies, projects } = initialData;

	await prisma.technology.createMany({ data: technologies });
	await prisma.project.createMany({ data: projects });
}

(() => {
	if (process.env.NODE_ENV === 'production') return;

	main();
})();
