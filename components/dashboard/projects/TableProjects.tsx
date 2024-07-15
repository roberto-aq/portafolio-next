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

import { Project } from '@prisma/client';
import Link from 'next/link';

interface Props {
	projects: Project[];
}

const statusName = {
	completed: 'Completado',
	in_progress: 'En progreso',
	maintenance: 'Mantenimiento',
};

export const TableProjects = ({ projects }: Props) => {
	return (
		<Table className='text-slate-200'>
			<TableHeader>
				<TableRow>
					<TableHead className='w-[100px]'>Nombre</TableHead>
					<TableHead>Descripción corta</TableHead>
					<TableHead>Tipo</TableHead>
					<TableHead>Categoría</TableHead>
					<TableHead>Tecnologías</TableHead>
					<TableHead className='text-right'>Estado</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{projects.map(project => (
					<TableRow key={project.id}>
						<TableCell className='font-bold capitalize'>
							<Link
								href={`/dashboard/projects/${project.id}`}
								className='hover:underline'
							>
								{project.name}
							</Link>
						</TableCell>
						<TableCell>{project.shortDescription}</TableCell>
						<TableCell>{project.type}</TableCell>
						<TableCell>{project.category}</TableCell>
						<TableCell className='flex gap-2'>
							{project.technologies.map((t, index) => (
								<Badge
									key={index}
									variant='secondary'
									className='capitalize'
								>
									{t}
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
