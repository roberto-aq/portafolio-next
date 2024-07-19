import { Loader } from '@/components/Loader';

export default function Loading() {
	return (
		<div className='flex justify-center items-center bg-slate-900 h-screen'>
			<Loader />;
		</div>
	);
}
