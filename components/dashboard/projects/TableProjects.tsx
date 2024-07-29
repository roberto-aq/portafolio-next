'use client';

import { Badge } from '@/components/ui/badge';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

import { Project, Technology } from '@prisma/client';
import Link from 'next/link';

type ProjectComplete = Project & {
	technologies: Technology[];
};

interface Props {
	projects: ProjectComplete[];
}

const statusName = {
	completed: 'Completado',
	in_progress: 'En progreso',
	maintenance: 'Mantenimiento',
};

export const TableProjects = ({ projects }: Props) => {
	return (
		<Table className='text-slate-200 border border-slate-700 rounded-lg overflow-hidden'>
			<TableHeader>
				<TableRow>
					<TableHead className='w-1/6'>Nombre</TableHead>
					<TableHead className='w-1/3'>Descripción corta</TableHead>
					<TableHead className='w-1/12'>Tipo</TableHead>
					<TableHead className='w-1/12'>Categoría</TableHead>
					<TableHead className='w-1/4'>Tecnologías</TableHead>
					<TableHead className='w-1/12 text-right'>Estado</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{projects.map(project => (
					<TableRow key={project.id}>
						<TableCell className='font-bold capitalize'>
							<Link
								href={`/dashboard/projects/${project.id}`}
								className='text-blue-400 hover:text-blue-300 transition-colors duration-200'
							>
								{project.name}
							</Link>
						</TableCell>
						<TableCell className='max-w-xs truncate'>
							{project.shortDescription}
						</TableCell>
						<TableCell>{project.type}</TableCell>
						<TableCell>{project.category}</TableCell>
						<TableCell className='flex flex-wrap gap-2 max-w[300px]'>
							{project.technologies.map((t, index) => (
								<Badge
									key={index}
									variant='secondary'
									className='capitalize whitespace-nowrap'
								>
									{t.name}
								</Badge>
							))}
						</TableCell>
						<TableCell className='text-right capitalize'>
							{statusName[project.status]}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};
