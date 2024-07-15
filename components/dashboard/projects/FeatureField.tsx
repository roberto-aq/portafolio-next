import { useState } from 'react';
import {
	useFieldArray,
	Control,
	UseFormSetValue,
} from 'react-hook-form';
import { z } from 'zod';
import { projectFormSchema } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Trash2 } from 'lucide-react';
import { FormLabel } from '@/components/ui/form';

interface FeatureFieldProps {
	control: Control<z.infer<typeof projectFormSchema>>;
	setValue: UseFormSetValue<z.infer<typeof projectFormSchema>>;
}

export const FeatureField = ({
	control,
	setValue,
}: FeatureFieldProps) => {
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'features',
	});

	const [newFeature, setNewFeature] = useState({
		title: '',
		description: '',
	});

	const handleAddFeature = () => {
		append(newFeature);
		setNewFeature({ title: '', description: '' });
	};

	return (
		<div className='space-y-4'>
			<FormLabel className='text-slate-200'>
				Características del proyecto:
			</FormLabel>

			<div className='space-y-2'>
				<Input
					placeholder='Nuevo título de característica'
					value={newFeature.title}
					onChange={e =>
						setNewFeature({ ...newFeature, title: e.target.value })
					}
				/>
				<Textarea
					placeholder='Nueva descripción de característica'
					value={newFeature.description}
					onChange={e =>
						setNewFeature({
							...newFeature,
							description: e.target.value,
						})
					}
					className='h-2'
				/>
				<Button
					onClick={handleAddFeature}
					variant='secondary'
					type='button'
				>
					Añadir Característica
				</Button>
			</div>

			{fields.map((field, index) => (
				<div
					key={field.id}
					className='flex items-center justify-between gap-2  '
				>
					<Input
						value={field.title}
						onChange={e =>
							setValue(`features.${index}.title`, e.target.value)
						}
						className='flex-1 bg-white text-slate-700 p-2 rounded-sm text-sm'
					/>
					<Textarea
						value={field.description}
						onChange={e =>
							setValue(
								`features.${index}.description`,
								e.target.value
							)
						}
						className='flex-[2] bg-white text-slate-700 p-2 rounded-sm text-sm h-full'
					/>

					<Button
						onClick={() => remove(index)}
						variant='destructive'
						className=' rounded-full'
						type='button'
					>
						<Trash2 size={15} />
					</Button>
				</div>
			))}
		</div>
	);
};
