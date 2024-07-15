'use client';

import { useState } from 'react';
import { cn, projectFormSchema } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';

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
import { FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Control, FieldPath, UseFormSetValue } from 'react-hook-form';
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

export const Combobox = ({
	items = [],
	name,
	control,
	setValue,
	label,
}: Props) => {
	const [open, setOpen] = useState(false);

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel className='text-slate-200'>{label}</FormLabel>
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button
								variant='outline'
								role='combobox'
								className={cn(
									'w-full md:w-[250px] justify-between',
									!field.value && 'text-muted-foreground'
								)}
							>
								{field.value
									? items.find(item => item.value === field.value)
											?.label
									: 'Seleccione'}
								<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
							</Button>
						</PopoverTrigger>
						<PopoverContent className='w-full p-0'>
							<Command>
								<CommandInput placeholder='Buscar...' />
								<CommandList>
									<CommandEmpty>Sin resultados.</CommandEmpty>

									<CommandGroup>
										{items.map(item => (
											<CommandItem
												key={item.value}
												value={item.value}
												onSelect={() => {
													setValue(name, item.value);
													setOpen(false);
												}}
											>
												<Check
													className={cn(
														'mr-2 h-4 w-4',
														item.value === field.value
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
	);
};
