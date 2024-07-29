'use client';

import { PropsWithChildren } from 'react';
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { ThemeProvider } from './ThemeProvider';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const client = new QueryClient();

export const Provider = ({ children }: PropsWithChildren) => {
	return (
		<PayPalScriptProvider
			options={{
				clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? '',
				intent: 'capture',
				currency: 'USD',
			}}
		>
			<QueryClientProvider client={client}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem={false}
				>
					{children}
				</ThemeProvider>
			</QueryClientProvider>
		</PayPalScriptProvider>
	);
};
