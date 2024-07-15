import { Navbar } from '@/components/dashboard/Navbar';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='bg-slate-900 min-h-screen flex flex-col gap-7'>
			<Navbar />
			<main className='container flex-1'>{children}</main>
		</div>
	);
}
