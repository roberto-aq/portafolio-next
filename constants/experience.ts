import { Technology } from '@prisma/client';

interface Job {
	id: number;
	period: string;
	startDate: Date;
	title: string;
	company: string;
	description: string;
	technologies: Technology[];
}

export const jobsExperience: Job[] = [
	{
		id: 1,
		period: 'AGO 2022 - OCT 2022',
		startDate: new Date(2022, 7),
		title: 'Analista SQL',
		company: 'Altura S.A',
		description:
			'Duplicar y probar la base de datos, asegurando la integridad y consistencia de los datos',
		technologies: [
			{
				id: 1,
				name: 'MySQL',
				image: null,
			},
			{
				id: 2,
				name: 'Java',
				image: null,
			},
			{
				id: 3,
				name: 'Javascript',
				image: null,
			},
		],
	},
	{
		id: 2,
		period: 'MAR 2023 - MAY 2023',
		startDate: new Date(2023, 2),
		title: 'Desarrollador Frontend',
		company: 'Universidad Técnica de Manabí',
		description:
			'Desarrollé un dashboard para el sistema de becas de la universidad utilizando Angular, integrando una API existente para la visualización de datos.',
		technologies: [
			{
				id: 4,
				name: 'Angular',
				image: null,
			},
			{
				id: 5,
				name: 'CSS',
				image: null,
			},
			{
				id: 6,
				name: 'Typescript',
				image: null,
			},
			{
				id: 7,
				name: 'Material UI',
				image: null,
			},
		],
	},
	{
		id: 3,
		period: 'JUN 2023 - NOV 2023',
		startDate: new Date(2023, 5),
		title: 'Lider técnico y desarrollador Fullstack',
		company: 'TuApp',
		description:
			'Dirigí el desarrollo de una aplicación móvil de salud mental para un concurso internacional, usando React Native, NestJS, PostgreSQL y Docker. Implementé un chatbot con inteligencia artificial mediante la API de OpenAI, alcanzando la final del concurso.',
		technologies: [
			{
				id: 8,
				name: 'React Native',
				image: null,
			},
			{
				id: 9,
				name: 'Nestjs',
				image: null,
			},
			{
				id: 6,
				name: 'Typescript',
				image: null,
			},
			{
				id: 10,
				name: 'Open AI',
				image: null,
			},
			{
				id: 11,
				name: 'TailwindCSS',
				image: null,
			},
			{
				id: 12,
				name: 'PostgreSQL',
				image: null,
			},
			{
				id: 13,
				name: 'Docker',
				image: null,
			},
		],
	},
	{
		id: 4,
		period: 'MAR 2024 - PRESENTE',
		startDate: new Date(2024, 2),
		title: 'Desarrollador FullStack Freelance',
		company: 'Autónomo',
		description:
			'Como desarrollador freelance, he colaborado con startups y empresas emergentes, creando soluciones web personalizadas. Me he enfocado en mejorar la experiencia del usuario, optimizar el rendimiento y gestionar proyectos desde su concepción hasta su implementación.',
		technologies: [
			{
				id: 14,
				name: 'Nextjs',
				image: null,
			},
			{
				id: 15,
				name: 'Reactjs',
				image: null,
			},
			{
				id: 8,
				name: 'React Native',
				image: null,
			},
			{
				id: 9,
				name: 'Nestjs',
				image: null,
			},
			{
				id: 12,
				name: 'PostgreSQL',
				image: null,
			},
			{
				id: 13,
				name: 'Docker',
				image: null,
			},
			{
				id: 6,
				name: 'Typescript',
				image: null,
			},
		],
	},
];
