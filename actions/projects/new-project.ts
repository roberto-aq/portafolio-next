'use server';

import prisma from '@/lib/prisma';
import { Project, ProjectStatus } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export type CreateProjectInput = {
	name: string;
	shortDescription: string;
	longDescription: string;
	type: string;
	category: string;
	frontImage: string;
	images?: string[];
	link: string;
	githubRepo?: string;
	technologies: string[];
	status: ProjectStatus;
	teamSize?: number;
	features?: Record<string, any>[];
};

export const createNewProject = async (
	projectInput: CreateProjectInput
) => {
	try {
		const project = await prisma.project.create({
			data: {
				name: projectInput.name,
				shortDescription: projectInput.shortDescription,
				longDescription: projectInput.longDescription,
				type: projectInput.type,
				category: projectInput.category,
				frontImage: projectInput.frontImage,
				link: projectInput.link,
				githubRepo: projectInput.githubRepo,
				technologies: projectInput.technologies,
				status: projectInput.status,
				features: projectInput.features,
			},
		});

		revalidatePath("/dashboard/projects")
		revalidatePath("/")

		return { ok: true, project };
	} catch (error) {
		console.log(error);
		return {
			ok: false,
			message: 'No se pudo crear el proyecto, revisa los logs',
		};
	}
};
