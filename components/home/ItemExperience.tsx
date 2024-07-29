import { Technology } from '@prisma/client';
import { TechnologiesUsedList } from './TechnologiesUsedList';

interface Props {
	technologies: Technology[];
	description: string;
	period: string;
	company: string;
	title: string;
}

export const ItemExperience = ({
	technologies,
	description,
	title,
	period,
	company,
}: Props) => {
	return (
		<div className='relative flex flex-col  lg:flex-row lg:justify-end mb-6'>
			<span className='text-slate-500 tracking-wide font-semibold uppercase text-xs pl-10 mb-3 lg:pl-0 lg:absolute lg:left-0 lg:top-0 '>
				{period}
			</span>
			{/* Circulo */}
			<div className='absolute  lg:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-400 rounded-full border-2 border-slate-600' />
			<div className='flex flex-col gap-1  w-full text-slate-400 pl-10 lg:w-1/2'>
				<h3 className='leading-normal font-bold text-slate-200'>
					{title} &bull; {company}
				</h3>
				<p className='tracking-tight text-sm'>{description}</p>
				<TechnologiesUsedList technologies={technologies} />
			</div>
		</div>
	);
};
