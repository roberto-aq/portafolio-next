import { projectFormSchema } from '@/lib/utils';
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

interface Props {
	control: Control<z.infer<typeof projectFormSchema>>;
	name: FieldPath<z.infer<typeof projectFormSchema>>;
	label: string;
	placeholder: string;
}
export const CustomTextarea = ({
	control,
	name,
	label,
	placeholder,
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
							<Textarea
								placeholder={placeholder}
								className='resize-none text-slate-700'
								{...field}
							/>
						</FormControl>
						<FormMessage className='text-red-500 mt-2' />
					</div>
				</FormItem>
			)}
		/>
	);
};
