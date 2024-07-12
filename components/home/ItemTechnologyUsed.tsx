interface Props {
	technology: string;
}

export const ItemTechnologyUsed = ({ technology }: Props) => {
	return (
		<li className='bg-teal-400/10 rounded-full px-3 py-1 flex items-center'>
			<span className='text-teal-300 leading-5 text-xs font-medium  '>
				{technology}
			</span>
		</li>
	);
};
