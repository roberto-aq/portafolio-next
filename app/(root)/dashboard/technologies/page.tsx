import { FormTechnology } from '@/components/dashboard/technologies/FormTechnology';
import { ListTechnologies } from '@/components/dashboard/technologies/ListTechnologies';

export default function DashboardTechnologiesPage() {
	return (
		<div className='text-slate-200 flex flex-col gap-12 mt-7 mb-14 relative md:flex-row md:gap-5'>
			<div className='flex-1 flex flex-col gap-5'>
				<h1 className='text-2xl font-bold '>Tecnologías</h1>

				<ListTechnologies />
			</div>

			<div className='flex-1 relative'>
				<FormTechnology />
			</div>
		</div>
	);
}
