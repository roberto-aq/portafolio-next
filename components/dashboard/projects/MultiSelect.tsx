'use client';

import { useState } from 'react';
import { cn, projectFormSchema } from '@/lib/utils';
import { Check, ChevronsUpDown, Plus, X } from 'lucide-react';

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
import { useNewTechnology } from '@/hooks';

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
	const [searchValue, setSearchValue] = useState('');

	const { mutate, data } = useNewTechnology();

	const fieldValue = useWatch({
		control,
		name,
		defaultValue: [],
	}) as string[];

	const filteredItems = items.filter(item =>
		item.label.toLowerCase().includes(searchValue.toLowerCase())
	);

	const handleSelect = (currentValue: string) => {
		console.log('Seleccionando:', currentValue);
		const updatedValues = fieldValue.includes(currentValue)
			? fieldValue.filter(value => value !== currentValue)
			: [...fieldValue, currentValue];

		console.log('Valores actualizados:', updatedValues);
		setValue(name, updatedValues, { shouldValidate: true });
	};

	const handleAddNewTechnology = async () => {
		if (searchValue.trim()) {
			mutate(
				{ name: searchValue.trim() },
				{
					onSuccess: (data: any) => {
						handleSelect(data?.id.toString());
						console.log(data);
					},
				}
			);
			setSearchValue('');
			setOpen(false);
		}
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (e.key === 'Enter' && filteredItems.length === 0) {
			e.preventDefault();
			handleAddNewTechnology();
			setOpen(false);
		}
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
									<CommandInput
										placeholder='Search technology...'
										value={searchValue}
										onValueChange={setSearchValue}
										onKeyDown={handleKeyDown}
									/>
									<CommandList>
										<CommandEmpty className='grid place-items-center p-3'>
											<Button
												className='w-full flex items-center justify-start font-semibold capitalize'
												onClick={handleAddNewTechnology}
												variant='ghost'
											>
												<Plus
													className={cn('mr-2 h-4 w-4 text-primary')}
												/>
												{searchValue}
											</Button>
										</CommandEmpty>
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
