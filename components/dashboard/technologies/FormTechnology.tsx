'use client';

import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CustomInput } from '../CustomInput';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/Loader';
import { technologyFormSchema } from '@/lib/validations';
import { useNewTechnology } from '@/hooks';
import { useTechnologiesStore } from '@/store/technologies.store';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';

export const FormTechnology = () => {
	const { mutate: create, isPending } = useNewTechnology();

	const selectedTechnology = useTechnologiesStore(
		state => state.selectedTechnology
	);
	const setSelectedTechnology = useTechnologiesStore(
		state => state.setSelectedTechnology
	);

	const form = useForm<z.infer<typeof technologyFormSchema>>({
		resolver: zodResolver(technologyFormSchema),
		defaultValues: {
			name: '',
			image: '',
		},
	});

	useEffect(() => {
		if (selectedTechnology) {
			form.reset({
				name: selectedTechnology.name,
				image: selectedTechnology.image || '',
			});
		}
	}, [selectedTechnology, form]);

	const onSubmit = async (
		data: z.infer<typeof technologyFormSchema>
	) => {
		if (!selectedTechnology) {
			create({ name: data.name, image: data.image });
		}

		setSelectedTechnology(null);
		console.log('Esta seleccionada una tecnología');

		form.reset({
			name: '',
			image: '',
		});
	};

	const onCancelEdit = () => {
		setSelectedTechnology(null);

		form.reset({
			name: '',
			image: '',
		});
	};

	if (isPending)
		return (
			<div className='flex flex-col gap-5 '>
				<Loader />
			</div>
		);

	return (
		<div className=' flex flex-col gap-5 pt-14  sticky top-0'>
			<h2 className='font-bold text-2xl text-center'>
				{selectedTechnology
					? 'Editar Tecnología'
					: 'Agregar Tecnología'}
			</h2>
			<Form {...form}>
				<form
					className='flex flex-col gap-5'
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<div className='bg-card p-8 rounded-lg shadow-lg flex flex-col gap-6 lg:col-span-2'>
						<CustomInput
							control={form.control}
							name='name'
							placeholder='Ejm: Golang'
							label='Nombre de la tecnología'
							type='text'
						/>
						<CustomInput
							control={form.control}
							name='image'
							placeholder='Ejm: https://utfs.io/f/51118ae4-fba5-4a92-85da-053d226911fa-ytjru4.svg'
							label='Url de la imagen de la tecnología'
							type='text'
						/>
					</div>

					<div
						className={cn(
							'flex',
							selectedTechnology
								? 'justify-between gap-3'
								: 'justify-end'
						)}
					>
						{selectedTechnology && (
							<Button
								variant='destructive'
								className='px-20'
								onClick={onCancelEdit}
								type='button'
							>
								Cancelar
							</Button>
						)}
						<Button variant='secondary' className='px-20'>
							{selectedTechnology ? 'Actualizar' : 'Guardar'}
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};
