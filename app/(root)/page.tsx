import { getProjects } from '@/actions/projects/get-projects';
import { ListIconsContact } from '@/components/home/ListIconsContact';
import { MainContent } from '@/components/home/MainContent';
import { NavbarHome } from '@/components/home/NavbarHome';

export default async function Home() {
	return (
		<div className='min-h-screen relative  bg-slate-900'>
			<div className='container flex flex-col md:flex-row min-h-screen gap-5 py-12 md:px-12 lg:px-24 lg:py-0 '>
				<header className='flex-1 flex md:sticky md:top-0 md:max-h-screen md:py-24 flex-col gap-10 justify-between'>
					<div className='flex flex-col gap-3'>
						<h1 className='text-4xl font-bold text-slate-200 tracking-tighter md:text-5xl'>
							Roberto Andrade
						</h1>
						<h2 className='font-medium text-lg tracking-tight text-slate-200 sm:text-xl'>
							Desarrollador Fullstack & Móvil
						</h2>
						<p className='leading-normal text-slate-400 max-w-xs'>
							Creo experiencias digitales perfectas en interfaces
							atractivas y accesibles.
						</p>

						<NavbarHome />
					</div>

					<ListIconsContact />
				</header>

				<MainContent />
			</div>
		</div>
	);
}
