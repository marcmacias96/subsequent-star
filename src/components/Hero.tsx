import { motion } from 'framer-motion';
import DecorativeLine from './DecorativeLine';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
	},
};

export default function Hero() {
	return (
		<section className="py-24 lg:py-32 px-mobile-gutter lg:px-desktop-gutter bg-background relative overflow-hidden">
			<motion.div
				className="max-w-container mx-auto"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.p
					variants={itemVariants}
					className="text-sm uppercase tracking-wider mb-6 text-secondary"
				>
					¡HOLA! SOMOS ONEIRÓS
				</motion.p>

				<motion.div variants={itemVariants}>
					<DecorativeLine className="mb-8 text-primary/20" />
				</motion.div>

				<motion.h1
					variants={itemVariants}
					className="font-serif text-display lg:text-hero text-primary mb-8 max-w-4xl"
				>
					No te preocupes por soñar. Sueña como eres. Podemos ayudarte a experimentar tus sueños conscientemente.
				</motion.h1>

				<motion.p
					variants={itemVariants}
					className="text-xl lg:text-2xl text-secondary max-w-3xl mb-12 leading-relaxed font-light"
				>
					En Oneirós, nos especializamos en crear ambientes que permiten que el sueño lúcido
					sea mucho más probable. Vendemos espacios de tiempo donde tú controlas tus sueños.
				</motion.p>

				<motion.button
					variants={itemVariants}
					whileHover={{ scale: 1.05, y: -4 }}
					whileTap={{ scale: 0.98 }}
					className="px-10 py-4 bg-primary text-background font-semibold uppercase text-sm transition-all duration-300 hover:bg-accent shadow-lg hover:shadow-2xl"
				>
					RESERVAR EXPERIENCIA
				</motion.button>
			</motion.div>
		</section>
	);
}
