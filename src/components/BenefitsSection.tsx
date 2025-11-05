import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 50, scale: 0.9 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
	},
};

export default function BenefitsSection() {
	const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);
	const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.2);

	const benefits = [
		{
			title: 'AUTOCONOCIMIENTO PROFUNDO',
			description: 'Explora tu subconsciente de forma consciente. Descubre partes de ti que solo emergen mientras sueñas.'
		},
		{
			title: 'CREATIVIDAD ILIMITADA',
			description: 'Resuelve problemas creativos en un estado donde las leyes de la física no aplican. Artistas y científicos han encontrado inspiración en sueños lúcidos.'
		},
		{
			title: 'SUPERACIÓN DE MIEDOS',
			description: 'Enfrenta pesadillas y ansiedades en un entorno controlado. Muchos clientes han superado fobias a través de nuestras sesiones.'
		},
		{
			title: 'PRÁCTICA MENTAL',
			description: 'Deportistas y músicos usan sueños lúcidos para practicar sin límites físicos. Tu cerebro no distingue entre práctica real y onírica.'
		},
		{
			title: 'AVENTURA Y EXPLORACIÓN',
			description: 'Vuela, visita mundos imposibles, experimenta lo inimaginable. El único límite es tu imaginación.'
		},
		{
			title: 'DESCANSO ACTIVO',
			description: 'Aprovecha tus horas de sueño para algo más que descansar. Vive experiencias significativas mientras tu cuerpo se recupera.'
		}
	];

	return (
		<section className="py-16 lg:py-24 px-mobile-gutter lg:px-desktop-gutter bg-neutral-light overflow-hidden">
			<div className="max-w-container mx-auto">
				<motion.div
					ref={headerRef}
					initial={{ opacity: 0, y: 30 }}
					animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="font-serif text-display text-primary mb-4">
						¿POR QUÉ SUEÑOS LÚCIDOS?
					</h2>
					<p className="text-xl text-secondary mb-16 max-w-3xl">
						Más que dormir: una puerta a experiencias que transformarán tu percepción de la realidad
					</p>
				</motion.div>

				<motion.div
					ref={gridRef}
					variants={containerVariants}
					initial="hidden"
					animate={gridVisible ? "visible" : "hidden"}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{benefits.map((benefit, index) => (
						<motion.div
							key={benefit.title}
							variants={itemVariants}
							whileHover={{
								y: -8,
								scale: 1.02,
								boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
							}}
							className="p-8 bg-cream cursor-pointer"
						>
							<motion.div
								initial={{ opacity: 0, scale: 0.5 }}
								animate={gridVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
								transition={{ delay: 0.1 * index, duration: 0.5 }}
								className="text-6xl font-serif text-primary/20 mb-4"
							>
								{String(index + 1).padStart(2, '0')}
							</motion.div>
							<h3 className="text-h4 font-bold text-primary mb-3 uppercase">{benefit.title}</h3>
							<p className="text-base text-secondary leading-relaxed">{benefit.description}</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
