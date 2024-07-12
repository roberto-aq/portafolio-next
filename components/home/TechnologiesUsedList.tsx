import { ItemTechnologyUsed } from './ItemTechnologyUsed';

interface Props {
	technologies: string[];
}

export const TechnologiesUsedList = ({ technologies }: Props) => {
	return (
		<ul
			className='flex flex-wrap mt-2 gap-2'
			aria-label='Tecnologías utilizadas'
		>
			{technologies.map((technology, index) => (
				<ItemTechnologyUsed key={index} technology={technology} />
			))}
		</ul>
	);
};
