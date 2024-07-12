import { ItemExperience } from '@/components/home/ItemExperience';
import { ListIconsContact } from '@/components/home/ListIconsContact';
import { TechnologiesUsedList } from '@/components/home/TechnologiesUsedList';
import { jobsExperience } from '@/constants/experience';
import { projects } from '@/constants/projects';
import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';

export default function Home() {
	return (
		<div className='min-h-screen relative  bg-slate-900'>
			<div className='container flex flex-col md:flex-row min-h-screen gap-5 py-12 md:px-12 lg:px-24 lg:py-0 '>
				<header className='flex-1 flex md:sticky md:top-0 md:max-h-screen md:py-24 flex-col gap-10 justify-between'>
					<div className='flex flex-col gap-3'>
						<h1 className='text-4xl font-bold text-slate-200 tracking-tighter md:text-5xl'>
							Roberto Andrade
						</h1>
						<h2 className='font-medium text-lg tracking-tight text-slate-200 sm:text-xl'>
							Desarrollador Fullstack & móvil
						</h2>
						<p className='leading-normal text-slate-400 max-w-xs'>
							Creo experiencias digitales perfectas en interfaces
							atractivas y accesibles.
						</p>

						<nav className='hidden flex-col text-slate-200 mt-14 gap-4 md:flex'>
							<a
								href='#about'
								className='text-slate-200 tracking-widest uppercase font-semibold text-xs flex items-center gap-3'
							>
								<span className='w-14 h-[2px] bg-slate-200' />
								Sobre mí
							</a>
							<a
								href='#experience'
								className='text-slate-500 tracking-widest uppercase font-semibold text-xs flex items-center gap-3 group hover:text-slate-200'
							>
								<span className='w-8 h-[1px] bg-slate-500 group-hover:bg-slate-200 group-hover:w-14 group-hover:h-[2px] transition-all' />
								Experiencia
							</a>
							<a
								href='#projects'
								className='text-slate-500 tracking-widest uppercase font-semibold text-xs flex items-center gap-3 group hover:text-slate-200'
							>
								<span className='w-8 h-[1px] bg-slate-500 group-hover:bg-slate-200 group-hover:w-14 group-hover:h-[2px] transition-all' />
								Proyectos
							</a>
						</nav>
					</div>

					<ListIconsContact />
				</header>
				<main className='flex-1 py-24'>
					<section
						className='flex flex-col gap-4  text-slate-400 text-md'
						id='about'
					>
						<div className='sticky top-0 z-20 backdrop-blur py-5  bg-slate-900/70 mb-5 md:sr-only -mx-[32px]'>
							<h2 className='container text-sm font-bold uppercase text-slate-200 tracking-widest md:sr-only'>
								Sobre mí
							</h2>
						</div>
						<p>
							Soy un desarrollador web y móvil especializado en
							Javascript y Typescript. Soy persistente y sobresalgo en
							la resolución de problemas, lo que me permite mantenerme
							concentrado incluso en situaciones desafiantes.
						</p>
						<p>
							Mi principial objetivo en estos días es crear
							aplicaciones completas en donde el usuario y el cliente
							estén satisfechos.
						</p>
						<p>
							Aprendo rápido y siempre busco mejorar mientras acepto
							el trabajo en equipo para mejorar mis habilidades.
							También doy clases y tutorías de programación y tengo un
							canal de youtube con 5.500 suscriptores donde enseño a
							crear proyectos web desde cero.
						</p>
						<p>
							Cuando no estoy en la computadora, usualmente estoy en
							el gimnasio entrenando o corriendo una maratón.
						</p>
					</section>

					<section
						id='experience'
						className='my-24 '
						aria-label='Experiencia Laboral'
					>
						<div className='sticky top-0 z-20 backdrop-blur py-5  bg-slate-900/70 mb-5 md:sr-only -mx-[32px]'>
							<h2 className='container text-sm font-bold uppercase text-slate-200 tracking-widest md:sr-only'>
								Experiencia
							</h2>
						</div>
						{/* LISTA */}
						<div className='relative'>
							{/* Línea central */}
							<div className='absolute lg:left-1/2 transform -translate-x-1/2 w-[1px] bg-slate-400 h-full'></div>
							{/* ITEM  */}
							{jobsExperience
								.sort((a, b) => +b.startDate - +a.startDate)
								.map(job => (
									<ItemExperience key={job.id} {...job} />
								))}
						</div>
					</section>

					<section
						id='projects'
						className='my-24'
						aria-label='Proyectos'
					>
						<div className='sticky top-0 z-20 backdrop-blur py-5  bg-slate-900/70 mb-5 md:sr-only -mx-[32px]'>
							<h2 className='container text-sm font-bold uppercase text-slate-200 tracking-widest md:sr-only'>
								Proyectos
							</h2>
						</div>
						<div className='flex flex-col gap-10'>
							{projects.map(project => (
								<div
									className='flex gap-5 lg:p-5  rounded-md lg:hover:bg-teal-400/10  hover:shadow-sm transition-all flex-col lg:flex-row'
									key={project.id}
								>
									<div className='w-[150px] h-[100px]'>
										<Image
											src={project.frontImage}
											alt={project.name}
											width={150}
											height={150}
											className='rounded-md object-cover h-full w-full'
										/>
									</div>

									<div className='flex flex-col gap-1 flex-1'>
										<h3>
											<a
												href={project.link}
												target='_blank'
												rel='noreferrer noopener'
												className='text-slate-200 font-semibold tracking-wide  leading-tight text-base flex items-center gap-1.5 group hover:text-teal-300 '
											>
												{project.name}
												<MdOutlineArrowOutward
													className='group-hover:text-teal-300 self-end'
													size={16}
												/>
											</a>
										</h3>
										<p className='leading-normal text-sm text-slate-400 mb-1'>
											{project.shortDescription}
										</p>
										{project.technologies.length > 0 && (
											<TechnologiesUsedList
												technologies={project.technologies}
											/>
										)}
									</div>
								</div>
							))}
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
