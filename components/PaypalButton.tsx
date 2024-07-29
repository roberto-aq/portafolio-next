'use client';

import {
	PayPalButtons,
	usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import {
	CreateOrderData,
	CreateOrderActions,
	OnApproveData,
	OnApproveActions,
} from '@paypal/paypal-js';
import { useRouter } from 'next/navigation';
import { toast } from './ui/use-toast';
import { useEffect, useState, useCallback } from 'react';

interface Props {
	amount: string;
	description: string;
}

export const PaypalButton = ({ amount, description }: Props) => {
	const [{ isPending, isRejected }] = usePayPalScriptReducer();
	const [key, setKey] = useState(0);
	const router = useRouter();

	useEffect(() => {
		// Forzar la recreación del componente PayPalButtons cuando cambia amount
		setKey(prevKey => prevKey + 1);
	}, [amount]);

	const createOrder = useCallback(
		async (
			data: CreateOrderData,
			actions: CreateOrderActions
		): Promise<string> => {
			console.log('Creating order with amount:', amount);
			return await actions.order.create({
				intent: 'CAPTURE',
				purchase_units: [
					{
						amount: {
							value: amount,
							currency_code: 'USD',
						},
						description: description || 'Sin descripción',
					},
				],
			});
		},
		[amount, description]
	);

	const onApprove = async (
		data: OnApproveData,
		actions: OnApproveActions
	) => {
		return actions.order?.capture().then(function (details) {
			router.push(
				`/pago-exitoso?orderId=${
					details.id
				}&amount=${amount}`
			);
		});
	};

	const onError = (err: any) => {
		console.error('PayPal Checkout onError', err);
		toast({
			title: 'Error en el pago',
			description:
				'Hubo un problema al procesar tu pago. Por favor, intenta de nuevo.',
			variant: 'destructive',
		});
	};

	if (isPending) {
		return (
			<div className='animate-pulse flex flex-col gap-4 mb-10'>
				<div className='h-11 bg-gray-300 rounded'></div>
				<div className='h-11 bg-gray-300 rounded'></div>
			</div>
		);
	}
	if (isRejected)
		return (
			<div>
				PayPal no se pudo cargar. Por favor, intenta de nuevo.
			</div>
		);

	return (
		<PayPalButtons
			key={key} // Forzar la recreación del componente
			createOrder={createOrder}
			onApprove={onApprove}
			onError={onError}
			style={{
				layout: 'vertical',
				color: 'black',
				shape: 'rect',
				label: 'pay',
			}}
		/>
	);
};
