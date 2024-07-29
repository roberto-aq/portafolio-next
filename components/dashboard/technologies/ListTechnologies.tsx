'use client';

import { deleteTechnology } from '@/actions/technologies/delete-technologies';
import { Loader } from '@/components/Loader';
import { toast } from '@/components/ui/use-toast';
import { useTechnologies } from '@/hooks';
import { useTechnologiesStore } from '@/store/technologies.store';
import { useQueryClient } from '@tanstack/react-query';
import { X } from 'lucide-react';
import Image from 'next/image';

export const ListTechnologies = () => {
	const { isLoading, technologies } = useTechnologies();
	const setSelectedTechnology = useTechnologiesStore(
		state => state.setSelectedTechnology
	);
	const queryClient = useQueryClient();

	const onDelete = async (event: React.MouseEvent, id: number) => {
		// Detener la propagación del evento
		event.stopPropagation();

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
					className='flex flex-col items-center justify-center gap-4 bg-slate-800  rounded-sm shadow-xl w-[120px] h-[120px]   hover:bg-teal-400/20 cursor-pointer relative group/card'
					key={technology.id}
					onClick={() => setSelectedTechnology(technology)}
				>
					<Image
						src={
							technology.image ||
							'https://utfs.io/f/0bc1634a-9a4c-41be-aef6-4c976f30f1b5-7e70s1.png'
						}
						width={50}
						height={50}
						alt={technology.name}
						className='group-hover:scale-110'
					/>
					<p className='text-slate-200 font-semibold text-xs text-center'>
						{technology.name}
					</p>
					<button
						className='bg-white flex items-center justify-center h-6 w-6 rounded-full absolute opacity-0 -top-2 -right-2 transition-all duration-300 group-hover/card:opacity-100  group hover:bg-red-500'
						onClick={e => onDelete(e, technology.id)}
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
