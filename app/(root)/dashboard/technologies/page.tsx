import { ListTechnologies } from '@/components/dashboard/technologies/ListTechnologies';
import { NewFormTechnology } from '@/components/dashboard/technologies/NewFormTechnology';

export default function DashboardTechnologiesPage() {
	return (
		<div className='text-slate-200 flex flex-col gap-12 mt-7 mb-14 relative md:flex-row md:gap-5'>
			<div className='flex-1 flex flex-col gap-5'>
				<h1 className='text-2xl font-bold '>Tecnologías</h1>

				<ListTechnologies />
			</div>

			<div className='flex-1 relative'>
				<NewFormTechnology />
			</div>
		</div>
	);
}
