'use client';

import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
	{ label: 'Resumen', href: '/dashboard/summary' },
	{ label: 'Proyectos', href: '/dashboard/projects' },
	{ label: 'Experiencia Laboral', href: '/dashboard/experience' },
];

export const Navbar = () => {
	const pathname = usePathname();

	return (
		<div className='px-5 py-3 flex justify-between items-center bg-slate-900/75 sticky top-0'>
			<Link href='/'>
				<span className='text-slate-200 text-xl font-bold'>Logo</span>
			</Link>

			<nav className='flex gap-5 '>
				{links.map(link => (
					<Link
						href={link.href}
						key={link.label}
						className={cn(
							'text-sm text-slate-400 hover:text-slate-200 hover:underline transition-all',
							pathname.includes(link.href) && 'text-slate-200 underline'
						)}
					>
						{link.label}
					</Link>
				))}
			</nav>

			<UserButton />
		</div>
	);
};
