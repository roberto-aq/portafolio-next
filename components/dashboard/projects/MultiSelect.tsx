'use client';

import { useState } from 'react';
import { cn, projectFormSchema } from '@/lib/utils';
import { Check, ChevronsUpDown, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { FormField, FormItem, FormLabel } from '@/components/ui/form';
import {
	Control,
	FieldPath,
	UseFormSetValue,
	useWatch,
} from 'react-hook-form';
import { z } from 'zod';

interface Props {
	control: Control<z.infer<typeof projectFormSchema>>;
	name: FieldPath<z.infer<typeof projectFormSchema>>;
	setValue: UseFormSetValue<z.infer<typeof projectFormSchema>>;
	items: {
		label: string;
		value: string;
	}[];
	label: string;
}

export const MultiSelect = ({
	items = [],
	name,
	control,
	setValue,
	label,
}: Props) => {
	const [open, setOpen] = useState(false);

	const fieldValue = useWatch({
		control,
		name,
		defaultValue: [],
	}) as string[];

	const handleSelect = (currentValue: string) => {
		const updatedValues = fieldValue.includes(currentValue)
			? fieldValue.filter(value => value !== currentValue)
			: [...fieldValue, currentValue];

		setValue(name, updatedValues, { shouldValidate: true });
	};

	return (
		<>
			<FormField
				name={name}
				control={control}
				render={({ field }) => (
					<FormItem>
						<FormLabel className='text-slate-200'>{label}</FormLabel>
						<Popover open={open} onOpenChange={setOpen}>
							<PopoverTrigger asChild>
								<Button
									variant='outline'
									role='combobox'
									aria-expanded={open}
									className=' w-full md:w-[250px] justify-between'
								>
									Seleccionar Tecnologías
									<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
								</Button>
							</PopoverTrigger>
							<PopoverContent className='w-full  p-0'>
								<Command className=''>
									<CommandInput placeholder='Search technology...' />
									<CommandList>
										<CommandEmpty>Sin resultados.</CommandEmpty>
										<CommandGroup>
											{items.map(item => (
												<CommandItem
													key={item.value}
													onSelect={() => {
														handleSelect(item.value);
														setOpen(false);
													}}
												>
													<Check
														className={cn(
															'mr-2 h-4 w-4',
															fieldValue.includes(item.value)
																? 'opacity-100'
																: 'opacity-0'
														)}
													/>
													{item.label}
												</CommandItem>
											))}
										</CommandGroup>
									</CommandList>
								</Command>
							</PopoverContent>
						</Popover>
					</FormItem>
				)}
			/>

			{/*  */}
			<div className='flex flex-wrap gap-2'>
				{items
					.filter(item => fieldValue?.includes(item.value))
					.map(tech => (
						<Badge key={tech.value} variant='secondary'>
							{tech.label}
							<button
								className='ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2'
								onClick={() => handleSelect(tech.value)}
							>
								<X size={14} className='text-primary' />
							</button>
						</Badge>
					))}
			</div>
		</>
	);
};
