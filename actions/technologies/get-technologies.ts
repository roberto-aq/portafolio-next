'use server';

import prisma from '@/lib/prisma';

export const getTechnologies = async () => {
	try {
		const technologies = await prisma.technology.findMany();

		return technologies;
	} catch (error) {
		console.log(error);

		throw new Error('No se pudo obtener las tecnologías');
	}
};
