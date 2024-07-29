import { FormPayment } from '@/components/FormPayment';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function PayPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-900 to-zinc-700 flex items-center justify-center p-4'>
			<Card className='w-full max-w-md shadow-xl'>
				<CardHeader className='text-center'>
					<CardTitle className='text-3xl font-bold'>
						Realizar Pago
					</CardTitle>
				</CardHeader>
				<CardContent>
					<FormPayment />
				</CardContent>
			</Card>
		</div>
	);
}
