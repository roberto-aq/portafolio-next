import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { getProjects } from '@/actions/projects/get-projects';
import { notFound } from 'next/navigation';
import { TableProjects } from '@/components/dashboard/projects/TableProjects';

export default async function ProjectsPage() {
	const projects = await getProjects();

	if (!projects) return notFound();

	return (
		<div className='flex flex-col gap-7 '>
			<header className='flex justify-between items-center'>
				<h1 className='text-2xl font-bold text-slate-200'>
					Todos los proyectos
				</h1>

				<Button variant='secondary' className='flex gap-2' asChild>
					<Link href='/dashboard/projects/new'>
						<PlusCircle size={20} />
						Nuevo Proyecto
					</Link>
				</Button>
			</header>
			<TableProjects projects={projects} />
		</div>
	);
}
