export const SkeletonProject = () => {
	return (
		<div className='flex-1 py-24'>
			<div className='animate-pulse space-y-4'>
				<div className='h-4 bg-slate-700 rounded w-3/4'></div>
				<div className='h-4 bg-slate-700 rounded'></div>
				<div className='h-4 bg-slate-700 rounded'></div>
				<div className='h-4 bg-slate-700 rounded w-5/6'></div>
			</div>
		</div>
	);
};
