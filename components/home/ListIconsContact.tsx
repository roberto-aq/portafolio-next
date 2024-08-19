import {
	FaGithub,
	FaLinkedin,
	FaTelegram,
	FaXTwitter,
	FaYoutube,
} from 'react-icons/fa6';
import { Icon } from './Icon';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

const icons = [
	{
		component: FaGithub,
		href: 'https://github.com/roberto-aq',
		name: 'Github',
	},
	{
		component: FaYoutube,
		href: 'https://www.youtube.com/@programacionparaelmundo',
		name: 'Youtube',
	},
	{
		component: FaLinkedin,
		href: 'https://www.linkedin.com/in/roberto-andrade-quijije-2289561ba',
		name: 'Linkedin',
	},
	{
		component: FaXTwitter,
		href: 'https://x.com/RobertoXabier',
		name: 'X',
	},
	{
		component: FaTelegram,
		href: 'https://t.me/roberto_anq',
		name: 'Telegram',
	},
];

export const ListIconsContact = () => {
	return (
		<ul className='flex gap-5'>
			{icons.map((icon, index) => (
				<li key={index} className=''>
					<TooltipProvider delayDuration={200}>
						<Tooltip>
							<TooltipTrigger asChild>
								<a
									href={icon.href}
									target='_blank'
									rel='noreferrer noopener'
									aria-label={`Ir a ${icon.name}`}
									className='inline-block'
								>
									<Icon
										icon={icon.component}
										size={25}
										className='text-slate-400 hover:text-slate-200 transition-all'
										aria-hidden='true'
									/>
									<span className='sr-only'>{icon.name}</span>
								</a>
							</TooltipTrigger>
							<TooltipContent>
								<p className='text-slate-400'>{icon.name}</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</li>
			))}
		</ul>
	);
};
