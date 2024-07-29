'use client';

import { PropsWithChildren } from 'react';
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { ThemeProvider } from './ThemeProvider';

const client = new QueryClient();

export const Provider = ({ children }: PropsWithChildren) => {
	return (
		<QueryClientProvider client={client}>
			<ThemeProvider
				attribute='class'
				defaultTheme='dark'
				enableSystem={false}
			>
				{children}
			</ThemeProvider>
		</QueryClientProvider>
	);
};
