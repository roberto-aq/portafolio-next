'use client';

import { useSearchParams } from 'next/navigation';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function PagoExitosoPage() {
	const searchParams = useSearchParams();
	const orderId = searchParams.get('orderId');
	const amount = searchParams.get('amount');

	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center p-4'>
			<Card className='w-full max-w-lg shadow-2xl'>
				<CardHeader className='text-center'>
					<div className='flex justify-center mb-4'>
						<CheckCircle2 className='w-16 h-16 text-green-500' />
					</div>
					<CardTitle className='text-3xl font-bold'>
						¡Pago Exitoso!
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-6'>
					<p className='text-lg text-center'>
						Tu pago ha sido procesado correctamente. Gracias por tu
						transacción.
					</p>
					<div className='bg-gray-50 p-6 rounded-lg shadow-inner'>
						<h3 className='text-xl font-semibold mb-4 text-gray-700'>
							Detalles de la transacción:
						</h3>
						<div className='space-y-2'>
							<p>
								<strong className='text-gray-600'>Orden ID:</strong>{' '}
								<span className='font-medium'>{orderId}</span>
							</p>
							<p>
								<strong className='text-gray-600'>
									Monto pagado:
								</strong>{' '}
								<span className='font-medium'>${amount}</span>
							</p>
							<p>
								<strong className='text-gray-600'>Fecha:</strong>{' '}
								<span className='font-medium'>
									{new Date().toLocaleString()}
								</span>
							</p>
						</div>
					</div>
					<p className='text-sm text-gray-600 text-center'>
						Si tienes alguna pregunta sobre tu pago, por favor
						contáctanos con tu número de Orden ID.
					</p>
				</CardContent>
				<CardFooter>
					<Link href='/pay' className='w-full'>
						<Button className='w-full bg-blue-600 hover:bg-blue-700 text-white'>
							Realizar otro pago
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}
