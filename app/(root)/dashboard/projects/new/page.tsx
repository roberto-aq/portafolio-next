import { NewProjectForm } from '@/components/dashboard/projects/NewProjectForm';

export default function NewProjectPage() {
	return (
		<div className='my-5 flex flex-col'>
			<h1 className='text-slate-200 text-2xl font-bold'>
				Agregar nuevo proyecto
			</h1>
			<NewProjectForm />
		</div>
	);
}
