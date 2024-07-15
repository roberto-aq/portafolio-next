import { motion } from 'framer-motion';

export const Loader = () => {
	return (
		<div className=' flex flex-col items-center justify-center h-80 mt-5'>
			<div className='flex'>
				{[...Array(3)].map((_, i) => (
					<motion.div
						key={i}
						className='w-16 h-16 mx-2 bg-gradient-to-r from-blue-500 to-purple-500'
						animate={{
							scale: [1, 1.2, 1],
							rotate: [0, 180, 360],
							borderRadius: ['20%', '50%', '20%'],
							boxShadow: [
								'0px 0px 0px rgba(0, 0, 0, 0)',
								'0px 0px 20px rgba(0, 0, 255, 0.7)',
								'0px 0px 0px rgba(0, 0, 0, 0)',
							],
						}}
						transition={{
							duration: 2,
							ease: 'easeInOut',
							times: [0, 0.5, 1],
							repeat: Infinity,
							repeatDelay: 0.5,
							delay: i * 0.2,
						}}
					/>
				))}
			</div>
			<motion.p
				className='mt-6 text-slate-200 font-bold'
				animate={{ opacity: [0, 1, 0] }}
				transition={{
					duration: 1.5,
					ease: 'easeInOut',
					times: [0, 0.5, 1],
					repeat: Infinity,
				}}
			>
				Cargando...
			</motion.p>
		</div>
	);
};
