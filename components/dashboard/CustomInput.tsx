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

interface Props {
	control: Control<z.infer<typeof projectFormSchema>>;
	name: FieldPath<z.infer<typeof projectFormSchema>>;
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
