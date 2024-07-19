'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Events, scrollSpy } from 'react-scroll';

import { MdOutlineArrowOutward } from 'react-icons/md';
import { TechnologiesUsedList } from './TechnologiesUsedList';
import { projects } from '@/constants/projects';
import { ItemExperience } from './ItemExperience';
import { jobsExperience } from '@/constants/experience';
import { useHomeStore } from '@/store/home.store';
import { Project } from '@prisma/client';

interface Props {
	projects: Project[];
}

export const MainContent = ({ projects }: Props) => {
	const setActiveSection = useHomeStore(
		state => state.setActiveSection
	);

	const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
	const [experienceRef, experienceInView] = useInView({
		threshold: 0.5,
	});
	const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });

	useEffect(() => {
		if (aboutInView) setActiveSection('about');
		if (experienceInView) setActiveSection('experience');
		if (projectsInView) setActiveSection('projects');
	}, [
		aboutInView,
		experienceInView,
		projectsInView,
		setActiveSection,
	]);

	useEffect(() => {
		Events.scrollEvent.register('begin', function () {
			// console.log('begin', arguments);
		});

		Events.scrollEvent.register('end', function () {
			// console.log('end', arguments);
		});

		scrollSpy.update();

		return () => {
			Events.scrollEvent.remove('begin');
			Events.scrollEvent.remove('end');
		};
	}, []);

	return (
		<main className='flex-1 py-24'>
			<section
				className='flex flex-col gap-4  text-slate-400 text-md'
				id='about'
				ref={aboutRef}
				aria-label='Sobre mí'
			>
				<div className='sticky top-0 z-20 backdrop-blur py-5  bg-slate-900/70 mb-5 md:sr-only -mx-[32px]'>
					<h2 className='container text-sm font-bold uppercase text-slate-200 tracking-widest md:sr-only'>
						Sobre mí
					</h2>
				</div>
				<p>
					Soy un desarrollador web y móvil especializado en Javascript
					y Typescript. Soy persistente y sobresalgo en la resolución
					de problemas, lo que me permite mantenerme concentrado
					incluso en situaciones desafiantes.
				</p>
				<p>
					Mi principial objetivo en estos días es crear aplicaciones
					completas en donde el usuario y el cliente estén
					satisfechos.
				</p>
				<p>
					Aprendo rápido y siempre busco mejorar mientras acepto el
					trabajo en equipo para mejorar mis habilidades. También doy
					clases y tutorías de programación y tengo un canal de
					youtube con 5.500 suscriptores donde enseño a crear
					proyectos web desde cero.
				</p>
				<p>
					Cuando no estoy en la computadora, usualmente estoy en el
					gimnasio entrenando o corriendo una maratón.
				</p>
			</section>

			<section
				id='experience'
				className='my-24 '
				aria-label='Experiencia Laboral'
				ref={experienceRef}
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
				ref={projectsRef}
			>
				<div className='sticky top-0 z-20 backdrop-blur py-5  bg-slate-900/70 mb-5 md:sr-only -mx-[32px]'>
					<h2 className='container text-sm font-bold uppercase text-slate-200 tracking-widest md:sr-only'>
						Proyectos
					</h2>
				</div>
				<div className='flex flex-col gap-10'>
					{projects ? (
						projects.map(project => (
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
						))
					) : (
						<p className='text-slate-200 font-bold'>No hay proyectos</p>
					)}
				</div>
			</section>
		</main>
	);
};
