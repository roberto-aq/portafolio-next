import { HTMLInputTypeAttribute } from 'react';
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

import { projectFormSchema } from '@/lib/utils';
import { technologyFormSchema } from '@/lib/validations';

type schema = z.infer<typeof projectFormSchema> &
	z.infer<typeof technologyFormSchema>;

interface Props {
	control: Control<any>;
	name: FieldPath<schema>;
	label: string;
	placeholder: string;
	type?: HTMLInputTypeAttribute;
}

export const CustomInput = ({
	control,
	name,
	label,
	placeholder,
	type = 'text',
}: Props) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className=''>
					<FormLabel className='text-slate-200'>{label}:</FormLabel>
					<div className='flex w-full flex-col'>
						<FormControl>
							<Input
								placeholder={placeholder}
								className='text-slate-700'
								{...field}
								value={field.value as any}
								type={type}
							/>
						</FormControl>
						<FormMessage className='text-red-500 mt-2' />
					</div>
				</FormItem>
			)}
		/>
	);
};
