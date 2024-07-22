'use server';

import prisma from '@/lib/prisma';
import { sleep } from '@/lib/utils';

export const getProjects = async () => {
	try {
		const projects = await prisma.project.findMany();

		return projects;
	} catch (error) {
		console.log(error);

		throw new Error('No se pudo obtener los proyectos');
	}
};
