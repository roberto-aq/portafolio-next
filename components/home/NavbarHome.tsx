'use client';

import { ReactNode } from 'react';

import { type Section, useHomeStore } from '@/store/home.store';
import { cn } from '@/lib/utils';
import { Link } from 'react-scroll';

interface NavItemProps {
	to: Section;
	active: boolean;
	children: ReactNode;
}

const NavItem = ({ to, active, children }: NavItemProps) => {
	return (
		<Link
			to={to}
			href={`#${to}`}
			smooth={true}
			duration={500}
			spy={true}
			offset={-70}
			className={cn(
				'text-slate-500 tracking-widest uppercase font-semibold text-xs flex items-center gap-3 group hover:text-slate-200 cursor-pointer',
				active && 'text-slate-200'
			)}
		>
			<span
				className={cn(
					'w-8 h-[1px] bg-slate-500 group-hover:bg-slate-200 group-hover:w-14 group-hover:h-[2px] transition-all',
					active && 'w-14 h-[2px] bg-slate-200'
				)}
			/>
			{children}
		</Link>
	);
};

export const NavbarHome = () => {
	const activeSection = useHomeStore(state => state.activeSection);

	return (
		<nav
			className='hidden flex-col text-slate-200 mt-14 gap-4 md:flex'
			aria-label='Navegación principal'
		>
			<NavItem to='about' active={activeSection === 'about'}>
				Sobre mí
			</NavItem>
			<NavItem
				to='experience'
				active={activeSection === 'experience'}
			>
				Experiencia
			</NavItem>
			<NavItem to='projects' active={activeSection === 'projects'}>
				Proyectos
			</NavItem>
		</nav>
	);
};
