'use server';

import prisma from '@/lib/prisma';

export const getProjects = async () => {
	try {
		const projects = await prisma.project.findMany();

		return {
			ok: true,
			projects,
		};
	} catch (error) {
		console.log(error);

		return {
			ok: false,
			message: 'No se pudo obtener los proyectos',
		};
	}
};
