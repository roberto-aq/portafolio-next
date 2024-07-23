'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Events, scrollSpy } from 'react-scroll';
import Marquee from '../magicui/marquee';

import { Project } from '@prisma/client';

import { MdOutlineArrowOutward } from 'react-icons/md';
import { TechnologiesUsedList } from './TechnologiesUsedList';
import { ItemExperience } from './ItemExperience';
import { jobsExperience } from '@/constants/experience';
import { useHomeStore } from '@/store/home.store';
import { useProjects, useTechnologies } from '@/hooks';
import { SkeletonTechnologies } from '../skeletons/SkeletonTechnologies';
import { SkeletonProject } from '../skeletons/SkeletonProject';

export const MainContent = () => {
	const { technologies, isLoading } = useTechnologies();
	const { projects, isLoadingProjects } = useProjects();

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

				{technologies?.length === 0 ? (
					<p className='text-slate-200 font-bold mt-4 text-lg'>
						Sin tecnologías registradas
					</p>
				) : (
					<div className='flex flex-col gap-3 w.full  md:w-[400px] mt-4'>
						<h3 className='text-slate-200 text-xl'>Tecnologías</h3>

						{isLoading || !technologies ? (
							<SkeletonTechnologies />
						) : (
							<Marquee className='[--duration:30s]'>
								{technologies.map(technology => (
									<div
										className='flex flex-col items-center justify-center gap-4 bg-slate-800  rounded-sm shadow-xl w-[100px] h-[100px]  relative group/card hover:bg-teal-400/20'
										key={technology.id}
									>
										<Image
											src={technology.image || ''}
											width={50}
											height={50}
											alt={technology.name}
											className='group-hover/card:-translate-y-3 group-hover/card:scale-105 transition-all duration-400 ease-in-out'
										/>
										<p className='text-slate-200 font-semibold text-xs absolute -bottom-10 transition-[bottom] duration-400 ease-in-out group-hover/card:bottom-3 '>
											{technology.name}
										</p>
									</div>
								))}
							</Marquee>
						)}
					</div>
				)}
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
					{!projects || isLoadingProjects ? (
						<SkeletonProject />
					) : projects.length === 0 ? (
						<p className='text-slate-200 font-bold text-lg'>
							No hay proyectos
						</p>
					) : (
						projects.map(project => (
							<div
								className='flex gap-5 lg:p-5  rounded-md lg:hover:bg-teal-400/10  hover:shadow-sm transition-all flex-col lg:flex-row'
								key={project.id}
							>
								<div className='w-full md:w-[200px] lg:w-[150px] h-full md:h-[120px]'>
									<Image
										src={project.frontImage}
										alt={project.name}
										width={150}
										height={150}
										className='rounded-md object-cover  h-full w-full'
									/>
								</div>

								<div className='flex flex-col gap-1 flex-1'>
									<h3 className='text-slate-200 font-semibold tracking-wide  leading-tight text-lg mb-2'>
										{project.name}
									</h3>
									<p className='leading-normal text-sm text-slate-400 mb-1'>
										{project.shortDescription}
									</p>
									{project.technologies.length > 0 && (
										<TechnologiesUsedList
											technologies={project.technologies}
										/>
									)}
									<a
										href={project.link}
										target='_blank'
										rel='noreferrer noopener'
										className='self-start text-slate-200 font-semibold tracking-wide  leading-tight text-md  flex items-center gap-1 group hover:text-teal-300 mt-4 md:self-end md:mt-2 md:text-sm'
									>
										Ir al Demo
										<MdOutlineArrowOutward
											className='group-hover:text-teal-300 group-hover:-translate-y-1 transition-transform duration-300 self-end'
											size={16}
										/>
									</a>
								</div>
							</div>
						))
					)}
				</div>
			</section>
		</main>
	);
};
