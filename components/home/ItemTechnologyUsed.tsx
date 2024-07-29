interface Props {
	technologyName: string;
}

export const ItemTechnologyUsed = ({ technologyName }: Props) => {
	return (
		<li className='bg-teal-400/10 rounded-full px-3 py-1 flex items-center'>
			<span className='text-teal-300 leading-5 text-xs font-medium capitalize '>
				{technologyName}
			</span>
		</li>
	);
};
