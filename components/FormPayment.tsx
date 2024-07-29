'use client';

import { useEffect, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { PaypalButton } from '@/components/PaypalButton';
import { FaDollarSign } from 'react-icons/fa6';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export const FormPayment = () => {
	const [amount, setAmount] = useState('');
	const [inputValue, setInputValue] = useState('');
	const [description, setDescription] = useState('');
	const [isAmountSet, setIsAmountSet] = useState(false);

	const { setTheme } = useTheme();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const validAmount = parseFloat(inputValue).toFixed(2);
		setAmount(validAmount);
		setIsAmountSet(true);
		console.log('Monto establecido:', validAmount);
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = e.target.value;
		// Permitir solo números y hasta dos decimales
		if (/^\d*\.?\d{0,2}$/.test(value) || value === '') {
			setInputValue(value);
		}
	};

	useEffect(() => {
		setTheme('light');
	}, [setTheme]);

	return (
		<div className='w-full max-w-md mx-auto'>
			<form onSubmit={handleSubmit} className='space-y-6 '>
				<div className='space-y-2'>
					<label htmlFor='amount' className='text-sm font-medium'>
						Monto a pagar (USD)
					</label>
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
							<FaDollarSign className='text-gray-400' />
						</div>
						<Input
							id='amount'
							type='text'
							value={inputValue}
							onChange={handleInputChange}
							placeholder='0.00'
							required
							className='pl-10'
						/>
					</div>
				</div>
				<Button type='submit' className='w-full'>
					Establecer Monto
				</Button>

				{isAmountSet && (
					<div className='flex flex-col gap-5'>
						<div className='text-center'>
							<span className='text-5xl tracking-tighter font-bold text-zinc-700'>
								${amount}
							</span>
						</div>
						<div className='space-y-2'>
							<label
								htmlFor='description'
								className='text-sm font-medium'
							>
								Descripción (opcional)
							</label>
							<Textarea
								id='description'
								value={description}
								onChange={e => setDescription(e.target.value)}
								placeholder='Ingrese una descripción para este pago'
								rows={3}
								className='resize-none'
							/>
						</div>
						<PaypalButton amount={amount} description={description} />
					</div>
				)}
			</form>
		</div>
	);
};
