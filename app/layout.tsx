import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider } from '@clerk/nextjs';

import { Provider } from '@/components/providers/Provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Roberto Andrade',
	description: 'Desarrollador Fullstack & Móvil ● Roberto Andrade',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='es'>
				<body className={inter.className}>
					<Provider>{children}</Provider>
					<Toaster />
					<SpeedInsights />
					<Analytics />
				</body>
			</html>
		</ClerkProvider>
	);
}
