import { ProjectStatus } from '@prisma/client';

interface Project {
	name: string;
	shortDescription: string;
	longDescription: string;
	type: string;
	category: string;
	link: string;
	githubRepo?: string;
	frontImage: string;
	images?: string[];
	technologies: string[];
	features?: { [key: string]: string }[];
	featured: boolean;

	challenges?: string[];
	learnings?: string[];
	date?: {
		start: string;
		end: string;
	};
	teamSize?: number;
	responsibilities?: string[];
	duration?: string;
	status: ProjectStatus;
	testimonials?: string[];
	metrics?: {
		[key: string]: number | string;
	};
}

interface SeedData {
	technologies: {
		name: string;
		image: string;
	}[];
	projects: Project[];
}

export const initialData: SeedData = {
	technologies: [
		{
			name: 'CSS 3',
			image:
				'https://utfs.io/f/c963d0e6-5c8e-4f95-9165-60fb3e534828-1tnrk.svg',
		},
		{
			name: 'Next.js',
			image:
				'https://utfs.io/f/601cf439-67e1-4e96-a1b0-521f6dd1a986-hcfblw.svg',
		},
		{
			name: 'React.js',
			image:
				'https://utfs.io/f/bc816692-8633-4009-9e11-0851b574ebdc-1sj3pb.svg',
		},
		{
			name: 'Node.js',
			image:
				'https://utfs.io/f/eb2abd95-b697-473a-859a-38d8368819de-h7agj9.svg',
		},
		{
			name: 'Docker',
			image:
				'https://utfs.io/f/4a0f07f8-93d6-4f7f-991f-78f910588eb9-lxr74w.svg',
		},
		{
			name: 'Nest.js',
			image:
				'https://utfs.io/f/74a1f379-2d97-4e20-8e88-6d940e8ecc5b-hciijj.svg',
		},
		{
			name: 'Python',
			image:
				'https://utfs.io/f/68d83228-6578-4252-be25-4e837431402e-g3ezok.svg',
		},
		{
			name: 'Django',
			image:
				'https://utfs.io/f/b4932775-9768-44c1-bc56-f6d0abf31284-m0jdt1.svg',
		},
		{
			name: 'Typescript',
			image:
				'https://utfs.io/f/0bc0350f-76e4-42f3-b3f7-8ac5ebdf164b-8myeez.svg',
		},
	],
	projects: [
		{
			name: 'CaseSnake',
			shortDescription:
				'CaseSnake es una aplicación web que permite a los usuarios personalizar y comprar fundas para sus iPhones utilizando imágenes personalizadas. La aplicación ofrece una experiencia de usuario fluida y segura, con integración para autenticación, pagos y envío de correos.',
			longDescription: '',
			type: 'full-stack',
			category: 'e-commerce',
			link: 'https://casesnakepp.vercel.app/',
			githubRepo: '',
			frontImage: '/img/casesnake-frontImage.png',
			technologies: [
				'Nextjs',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'Tanstack Query',
				'Stripe',
				'Zod',
				'Shadcn',
			],
			teamSize: 1,
			featured: true,
			status: 'completed',
		},
		{
			name: 'Fallbank',
			shortDescription:
				'Construida con Nextjs, Fallbank es una plataforma financiera SaaS que se conecta a múltiples cuentas bancarias, muestra transacciones en tiempo real, permite a los usuarios transferir dinero a otros usuarios de la plataforma y administra sus finanzas por completo.',
			longDescription:
				'Fallbank es una solución financiera integral diseñada para simplificar la gestión de múltiples cuentas bancarias. Utilizando la API de Plaid, la plataforma ofrece una visión unificada de las finanzas del usuario, con actualizaciones en tiempo real de transacciones y saldos. La interfaz intuitiva, construida con Nextjs y Typescript, proporciona una experiencia de usuario fluida y responsive.',
			type: 'full-stack',
			category: 'bank',
			link: 'https://fallbank-ppworld.vercel.app/sign-up',
			githubRepo: 'https://github.com/yourusername/fallbank',
			frontImage: '/img/fallbank-frontImage.png',
			technologies: [
				'Nextjs',
				'PostgreSQL',
				'Typescript',
				'Plaid',
				'Zod',
				'Shadcn',
			],
			featured: true,
			teamSize: 1,
			status: 'completed',
		},
	],
};
