'use client';

import { Form } from '@/components/ui/form';
import { projectFormSchema } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CustomInput } from '../CustomInput';
import { Button } from '@/components/ui/button';
import { CustomTextarea } from '../CustomTextarea';
import { Combobox } from './Combobox';
import { MultiSelect } from './MultiSelect';
import { FeatureField } from './FeatureField';
import { useNewProject } from '@/hooks';
import { Loader } from '@/components/Loader';
import { UploadButton } from '@/lib/uploadthing';
import { technologiesList } from '@/constants/technologies';

export const NewProjectForm = () => {
	const form = useForm<z.infer<typeof projectFormSchema>>({
		resolver: zodResolver(projectFormSchema),
		defaultValues: {
			name: '',
			shortDescription: '',
			link: '',
			category: '',
			type: 'back-end',
			githubRepo: '',
			frontImage: '',
		},
	});

	const { mutate, isPending } = useNewProject();

	const onSubmit = async (
		data: z.infer<typeof projectFormSchema>
	) => {
		console.log(data);
		mutate({
			name: data.name,
			shortDescription: data.shortDescription,
			longDescription: data.longDescription,
			category: data.category,
			type: data.type,
			link: data.link,
			githubRepo: data?.githubRepo,
			status: data.status,
			frontImage: data.frontImage,
			technologies: data.technologies,
		});
	};

	if (isPending) return <Loader />;

	return (
		<div className='mt-7 mb-14'>
			<Form {...form}>
				<form
					className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3'
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<div className='bg-stone-950 p-8 rounded-lg shadow-lg flex flex-col gap-6 lg:col-span-2'>
						<CustomInput
							control={form.control}
							name='name'
							placeholder='Ejm: Proyecto XYZ'
							label='Nombre del proyecto'
							type='text'
						/>
						<CustomTextarea
							control={form.control}
							name='shortDescription'
							placeholder='Ejm: Descripción del proyecto XYZ'
							label='Descripción corta del proyecto'
						/>
					</div>

					<div className='bg-stone-950 p-8 rounded-lg shadow-lg flex flex-col gap-6 '>
						<Combobox
							items={[
								{ value: 'full-stack', label: 'Full Stack' },
								{ value: 'front-end', label: 'Frontend' },
								{ value: 'back-end', label: 'Backend' },
							]}
							name='type'
							control={form.control}
							setValue={form.setValue}
							label='Tipo de proyecto'
						/>
						<CustomInput
							control={form.control}
							label='Categoría del proyecto'
							placeholder='E-commerce'
							name='category'
						/>
					</div>

					<div className='bg-stone-950 p-8 rounded-lg shadow-lg flex flex-col gap-6 col-start-1 lg:col-span-2'>
						<CustomInput
							control={form.control}
							name='link'
							placeholder='Ejm: https://proyecto.xyz.vercel.app'
							label='Link del proyecto'
							type='url'
						/>
						<CustomInput
							control={form.control}
							name='githubRepo'
							placeholder='Ejm: https://github.com/proyectoxyz'
							label='Repositorio de Github'
							type='url'
						/>
					</div>

					<div className='bg-stone-950 p-8 rounded-lg shadow-lg flex flex-col gap-6 row-start-3 md:row-start-2 md:col-start-2 lg:col-start-3'>
						<MultiSelect
							name='technologies'
							control={form.control}
							setValue={form.setValue}
							label='Tecnologías Utilizadas'
							items={technologiesList}
						/>
					</div>

					<div className=' bg-stone-950 p-8 rounded-lg shadow-lg flex flex-col gap-6 col-span-2'>
						<CustomTextarea
							control={form.control}
							name='longDescription'
							placeholder='Ejm: Descripción del proyecto XYZ'
							label='Descripción larga del proyecto'
						/>

						<FeatureField
							control={form.control}
							setValue={form.setValue}
						/>
					</div>

					<div className='bg-stone-950 p-8 rounded-lg shadow-lg flex flex-col gap-6 lg:col-start-3'>
						<Combobox
							items={[
								{ value: 'completed', label: 'Completado' },
								{ value: 'in-progress', label: 'En progreso' },
								{ value: 'maintenance', label: 'Mantenimiento' },
							]}
							name='status'
							control={form.control}
							setValue={form.setValue}
							label='Estado del proyecto'
						/>
					</div>
					<div className='bg-stone-950 p-8 rounded-lg shadow-lg flex flex-col gap-6 col-span-full'>
						<CustomInput
							name='frontImage'
							control={form.control}
							type='text'
							label='Imagen de portada'
							placeholder=''
						/>
					</div>

					<div className='col-span-full flex justify-center'>
						<Button variant='secondary' className='px-10'>
							Guardar
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};
