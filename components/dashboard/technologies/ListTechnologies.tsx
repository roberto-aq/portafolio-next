'use client';

import { deleteTechnology } from '@/actions/technologies/delete-technologies';
import { Loader } from '@/components/Loader';
import { toast } from '@/components/ui/use-toast';
import { useTechnologies } from '@/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { X } from 'lucide-react';
import Image from 'next/image';

export const ListTechnologies = () => {
	const { isLoading, technologies } = useTechnologies();
	const queryClient = useQueryClient();

	const onDelete = async (id: number) => {
		await deleteTechnology(id);
		queryClient.invalidateQueries({ queryKey: ['technologies'] });

		toast({
			title: 'Éxito',
			description: 'La tecnología se ha eliminado correctamente',
			variant: 'default',
			duration: 1000,
		});
	};

	if (isLoading) return <Loader />;

	return (
		<div className='flex flex-wrap gap-5 '>
			{technologies?.map(technology => (
				<div
					className='flex flex-col items-center justify-center gap-4 bg-slate-800  rounded-sm shadow-xl w-[120px] h-[120px]   hover:bg-teal-400/20 relative group/card'
					key={technology.id}
				>
					<Image
						src={technology.image || ''}
						width={50}
						height={50}
						alt={technology.name}
						className='group-hover:scale-110'
					/>
					<p className='text-slate-200 font-semibold text-xs'>
						{technology.name}
					</p>
					<button
						className='bg-white flex items-center justify-center h-6 w-6 rounded-full absolute opacity-0 -top-2 -right-2 transition-all duration-300 group-hover/card:opacity-100  group hover:bg-red-500'
						onClick={() => onDelete(technology.id)}
					>
						<X
							className='text-red-500 group-hover:text-white'
							size={19}
						/>
					</button>
				</div>
			))}
		</div>
	);
};
