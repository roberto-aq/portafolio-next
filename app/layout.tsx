import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { ClerkProvider } from '@clerk/nextjs';

import { Provider } from '@/components/providers/Provider';
import { Toaster } from '@/components/ui/toaster';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Portafolio Web',
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
				</body>
			</html>
		</ClerkProvider>
	);
}
