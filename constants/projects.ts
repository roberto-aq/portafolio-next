export const projects = [
	{
		id: 1,
		name: 'CaseSnake',
		shortDescription:
			'CaseSnake es una aplicación web que permite a los usuarios personalizar y comprar fundas para sus iPhones utilizando imágenes personalizadas. La aplicación ofrece una experiencia de usuario fluida y segura, con integración para autenticación, pagos y envío de correos.',
		type: 'full-stack',
		category: 'e-commerce',
		link: 'https://casesnakepp.vercel.app/',
		frontImage: '/img/casesnake-frontImage.png',
		images: [],
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
	},
	{
		id: 2,
		name: 'Fallbank',
		shortDescription:
			'Construida con Nextjs, Fallbank es una plataforma financiera SaaS que se conecta a múltiples cuentas bancarias, muestra transacciones en tiempo real, permite a los usuarios transferir dinero a otros usuarios de la plataforma y administra sus finanzas por completo.',
		category: 'bank',
		link: 'https://fallbank-ppworld.vercel.app/sign-up',
		frontImage: '/img/fallbank-frontImage.png',
		images: [],
		technologies: [
			'Nextjs',
			'PostgreSQL',
			'Typescript',
			'Plaid',
			'Zod',
			'Shadcn',
		],
	},
];
