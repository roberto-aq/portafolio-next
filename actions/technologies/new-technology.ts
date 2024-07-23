'use server';

import prisma from '@/lib/prisma';

export const createTechnology = async (technologyInput: {
	name: string;
	image: string;
}) => {
	try {
		const technology = await prisma.technology.create({
			data: technologyInput,
		});

		return technology;
	} catch (error) {
		console.log(error);
		return {
			ok: false,
			message: 'No se pudo crear el proyecto, revisa los logs',
		};
	}
};
