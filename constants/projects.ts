interface Project {
	id: number;
	name: string;
	shortDescription: string;
	longDescription: string;
	type: string;
	category: string;
	link: string;
	githubRepo?: string;
	frontImage: string;
	images: string[];
	technologies: string[];
	features: { [key: string]: string }[];
	challenges: string[];
	learnings: string[];
	date: {
		start: string;
		end: string;
	};
	role: string;
	teamSize?: number;
	responsibilities: string[];
	duration: string;
	status: 'in-progress' | 'completed' | 'maintenance';
	testimonials?: string[];
	metrics?: {
		[key: string]: number | string;
	};
}

export const projects: Project[] = [
	// {
	// 	id: 1,
	// 	name: 'CaseSnake',
	// 	shortDescription:
	// 		'CaseSnake es una aplicación web que permite a los usuarios personalizar y comprar fundas para sus iPhones utilizando imágenes personalizadas. La aplicación ofrece una experiencia de usuario fluida y segura, con integración para autenticación, pagos y envío de correos.',
	// 	type: 'full-stack',
	// 	category: 'e-commerce',
	// 	link: 'https://casesnakepp.vercel.app/',
	// 	githubRepo: '',
	// 	frontImage: '/img/casesnake-frontImage.png',
	// 	images: [],
	// 	technologies: [
	// 		'Nextjs',
	// 		'Typescript',
	// 		'PostgreSQL',
	// 		'Prisma',
	// 		'Tanstack Query',
	// 		'Stripe',
	// 		'Zod',
	// 		'Shadcn',
	// 	],
	// 	features: [
	// 		{
	// 			title: 'Authentication',
	// 			description:
	// 				'An ultra-secure SSR authentication with proper validations and authorization',
	// 		},
	// 	],
	// },
	{
		id: 2,
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
		images: [
			'/img/fallbank-dashboard.png',
			'/img/fallbank-transactions.png',
			'/img/fallbank-transfer.png',
		],
		technologies: [
			'Nextjs',
			'PostgreSQL',
			'Typescript',
			'Plaid',
			'Zod',
			'Shadcn',
		],
		features: [
			{
				title: 'Authentication',
				description:
					'An ultra-secure SSR authentication with proper validations and authorization',
			},
			{
				title: 'Multi-bank Integration',
				description:
					'Connect and manage multiple bank accounts from different institutions',
			},
			{
				title: 'Real-time Transactions',
				description:
					'View and categorize transactions as they occur across all connected accounts',
			},
			{
				title: 'User-to-User Transfers',
				description:
					'Securely transfer funds between Fallbank users instantly',
			},
		],
		challenges: [
			'Implementar una integración segura con múltiples APIs bancarias',
			'Diseñar una arquitectura escalable para manejar grandes volúmenes de transacciones',
			'Asegurar la protección de datos financieros sensibles',
		],
		learnings: [
			'Profundización en seguridad de aplicaciones financieras',
			'Optimización de consultas a bases de datos para mejorar el rendimiento',
			'Implementación de arquitectura de microservicios para mayor escalabilidad',
		],
		date: {
			start: '2023-06-01',
			end: '2023-12-15',
		},
		role: 'Desarrollador Full Stack Principal',
		teamSize: 1,
		responsibilities: [
			'Diseño de la arquitectura del sistema',
			'Implementación de la autenticación y autorización',
			'Desarrollo de la integración con Plaid',
			'Optimización del rendimiento de la aplicación',
		],
		duration: '6.5 meses',
		status: 'completed',
		testimonials: [
			'Fallbank ha revolucionado la forma en que manejo mis finanzas. La interfaz es intuitiva y las funcionalidades son exactamente lo que necesitaba. - María G., usuaria beta',
		],
		metrics: {
			usuarios_activos: 5000,
			transacciones_diarias: 15000,
			tiempo_carga_promedio: '0.8 segundos',
		},
	},
];
