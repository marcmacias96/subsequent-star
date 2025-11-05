import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function MethodItem({ method, index }: { method: any; index: number }) {
	const { ref, isVisible } = useScrollAnimation(0.2);
	const isEven = index % 2 === 0;

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
			transition={{ duration: 0.6 }}
			className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
				!isEven ? 'lg:flex-row-reverse' : ''
			}`}
		>
			<motion.div
				initial={{ opacity: 0, x: isEven ? -50 : 50 }}
				animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
				transition={{ delay: 0.2, duration: 0.8 }}
				className={!isEven ? 'lg:order-2' : ''}
			>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
					transition={{ delay: 0.3, duration: 0.6 }}
					className="text-6xl lg:text-7xl font-serif text-primary/10 mb-4"
				>
					{method.number}
				</motion.div>
				<motion.h3
					initial={{ opacity: 0, y: 20 }}
					animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className="text-h3 font-bold text-primary mb-4 uppercase"
				>
					{method.title}
				</motion.h3>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ delay: 0.5, duration: 0.6 }}
					className="text-lg text-secondary leading-relaxed"
				>
					{method.description}
				</motion.p>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: isEven ? 50 : -50, scale: 0.9 }}
				animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: isEven ? 50 : -50, scale: 0.9 }}
				transition={{ delay: 0.3, duration: 0.8 }}
				className={!isEven ? 'lg:order-1' : ''}
			>
				<motion.img
					src={method.image}
					alt={method.title}
					className="w-full h-96 object-cover"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.4 }}
				/>
			</motion.div>
		</motion.div>
	);
}

export default function SleepPhases() {
	const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);

	const methods = [
		{
			number: '01',
			title: 'AMBIENTE CONTROLADO',
			description: 'Nuestras salas están diseñadas con tecnología de última generación que optimiza temperatura, luz, sonido y aromas para inducir el estado óptimo para sueños lúcidos.',
			image: '/images/relaxing-space.jpg'
		},
		{
			number: '02',
			title: 'PROTOCOLO PERSONALIZADO',
			description: 'Cada sesión comienza con una evaluación de tu ciclo de sueño natural. Diseñamos un protocolo específico que maximiza tus probabilidades de experimentar consciencia onírica.',
			image: '/images/meditation-space.jpg'
		},
		{
			number: '03',
			title: 'GUÍA EXPERTA',
			description: 'Nuestro equipo te acompaña antes, durante y después de cada sesión. Aprenderás técnicas de inducción y mantenimiento de lucidez que podrás aplicar incluso fuera de nuestras instalaciones.',
			image: '/images/peaceful-sleep.jpg'
		},
		{
			number: '04',
			title: 'SEGUIMIENTO Y EVOLUCIÓN',
			description: 'Registramos tu progreso y ajustamos el método según tu evolución. Con cada sesión, aumenta tu capacidad de control consciente sobre tus experiencias oníricas.',
			image: '/images/bedroom-elegant.jpg'
		}
	];

	return (
		<section className="py-16 lg:py-24 px-mobile-gutter lg:px-desktop-gutter bg-background overflow-hidden">
			<div className="max-w-container mx-auto">
				<motion.div
					ref={headerRef}
					initial={{ opacity: 0, y: 30 }}
					animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="font-serif text-display text-primary mb-4">
						NUESTRO MÉTODO
					</h2>
					<p className="text-xl text-secondary mb-16 max-w-3xl">
						Cuatro pasos que transformarán tu relación con el sueño
					</p>
				</motion.div>

				<div className="space-y-16 lg:space-y-32">
					{methods.map((method, index) => (
						<MethodItem key={method.number} method={method} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
