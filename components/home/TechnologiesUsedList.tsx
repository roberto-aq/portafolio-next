import { Technology } from '@prisma/client';
import { ItemTechnologyUsed } from './ItemTechnologyUsed';

interface Props {
	technologies: Technology[];
}

export const TechnologiesUsedList = ({ technologies }: Props) => {
	return (
		<ul
			className='flex flex-wrap mt-2 gap-2'
			aria-label='Tecnologías utilizadas'
		>
			{technologies.map((technology, index) => (
				<ItemTechnologyUsed
					key={index}
					technologyName={technology.name}
				/>
			))}
		</ul>
	);
};
