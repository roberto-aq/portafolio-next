import { ProjectStatus } from '@prisma/client';

interface Technology {
	id?: number;
	name: string;
	image?: string;
}

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
	technologies: number[];
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
	technologies: Technology[];
	projects: Project[];
}

export const initialData: SeedData = {
	technologies: [
		{
			id: 1,
			name: 'Next.js',
			image:
				'https://utfs.io/f/601cf439-67e1-4e96-a1b0-521f6dd1a986-hcfblw.svg',
		},
		{
			id: 2,
			name: 'React.js',
			image:
				'https://utfs.io/f/bc816692-8633-4009-9e11-0851b574ebdc-1sj3pb.svg',
		},
		{
			id: 3,
			name: 'Node.js',
			image:
				'https://utfs.io/f/eb2abd95-b697-473a-859a-38d8368819de-h7agj9.svg',
		},
		{
			id: 4,
			name: 'Docker',
			image:
				'https://utfs.io/f/4a0f07f8-93d6-4f7f-991f-78f910588eb9-lxr74w.svg',
		},
		{
			id: 5,
			name: 'Nest.js',
			image:
				'https://utfs.io/f/74a1f379-2d97-4e20-8e88-6d940e8ecc5b-hciijj.svg',
		},
		{
			id: 6,
			name: 'Python',
			image:
				'https://utfs.io/f/68d83228-6578-4252-be25-4e837431402e-g3ezok.svg',
		},
		{
			id: 7,
			name: 'Django',
			image:
				'https://utfs.io/f/b4932775-9768-44c1-bc56-f6d0abf31284-m0jdt1.svg',
		},
		{
			id: 8,
			name: 'Typescript',
			image:
				'https://utfs.io/f/0bc0350f-76e4-42f3-b3f7-8ac5ebdf164b-8myeez.svg',
		},
		{
			id: 9,
			name: 'CSS 3',
			image:
				'https://utfs.io/f/c963d0e6-5c8e-4f95-9165-60fb3e534828-1tnrk.svg',
		},
		{
			id: 10,
			name: 'PostgreSQL',
			image:
				'https://utfs.io/f/51118ae4-fba5-4a92-85da-053d226911fa-ytjru4.svg',
		},
		{
			id: 11,
			name: 'ShadCN',
			image:
				'https://utfs.io/f/2eea6d2a-aefe-491e-8aac-e73bc70d7742-exyul9.svg',
		},
		{
			id: 12,
			name: 'Paypal',
			image:
				'https://utfs.io/f/19e9ae21-2ca7-406f-bbda-6c5f0d911b3e-ggipe5.svg',
		},
		{
			id: 13,
			name: 'Stripe',
			image:
				'https://utfs.io/f/28e22450-9bad-419a-9f52-0a743b38f1ec-er2coj.svg',
		},
		{
			id: 14,
			name: 'Prisma',
			image:
				'https://utfs.io/f/786623ff-3bdb-4bf0-b240-275db46e1fe5-g7gclc.svg',
		},
		{
			id: 15,
			name: 'Zustand',
			image:
				'https://utfs.io/f/14ac3857-14a8-4db2-a8cc-94986e8e253c-133hbv.svg',
		},
		{
			id: 16,
			name: 'TailwindCSS',
			image:
				'https://utfs.io/f/b770e700-754a-4569-9b60-a1d66a911c53-bhgw4o.svg',
		},
		{
			id: 17,
			name: 'Tanstack Query',
		},
		{
			id: 18,
			name: 'Zod',
		},
		{
			id: 19,
			name: 'Plaid',
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
			technologies: [1, 8, 10, 14, 17, 18, 13, 11],
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
			technologies: [1, 18, 11, 8, 10, 19],
			featured: true,
			teamSize: 1,
			status: 'completed',
		},
	],
};
