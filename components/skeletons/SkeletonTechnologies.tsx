import Marquee from '../magicui/marquee';

export const SkeletonTechnologies = () => {
	return (
		<Marquee className='[--duration:15s]'>
			{Array.from({ length: 4 }).map((skeleton, index) => (
				<div
					className='flex flex-col items-center justify-center gap-4 bg-slate-800  rounded-sm shadow-xl w-[100px] h-[100px] animate-pulse '
					key={index}
				></div>
			))}
		</Marquee>
	);
};
