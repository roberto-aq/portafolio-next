'use server';

import prisma from '@/lib/prisma';

export const deleteTechnology = async (id: number) => {
	try {
		await prisma.technology.delete({
			where: { id },
		});
	} catch (error) {
		console.log(error);

		return {
			ok: false,
			message: 'No se pudo borrar la tecnología',
		};
	}
};
