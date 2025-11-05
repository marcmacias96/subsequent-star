import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const cardVariants = {
	hidden: { opacity: 0, y: 60, scale: 0.95 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			delay: i * 0.15,
			duration: 0.7,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
	}),
};

export default function PricingSection() {
	const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);
	const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.2);

	const packages = [
		{
			name: 'EXPERIENCIA ÚNICA',
			price: '150',
			duration: 'Una sesión de 90 minutos',
			features: [
				'Evaluación inicial personalizada',
				'Sesión en sala premium',
				'Guía pre y post sesión',
				'Informe de experiencia',
			],
			cta: 'RESERVAR',
			featured: false,
		},
		{
			name: 'EXPLORADOR SEMANAL',
			price: '500',
			duration: '4 sesiones / mes',
			features: [
				'Todo lo del paquete único',
				'Protocolo personalizado evolutivo',
				'Acceso a comunidad privada',
				'Seguimiento semanal detallado',
				'Prioridad en reservas',
			],
			cta: 'MÁS POPULAR',
			featured: true,
		},
		{
			name: 'MAESTRO ONÍRICO',
			price: '1,200',
			duration: '12 sesiones / mes',
			features: [
				'Todo lo del paquete semanal',
				'Sesiones diarias disponibles',
				'Coach personal dedicado',
				'Técnicas avanzadas exclusivas',
				'Certificación al completar programa',
				'Acceso de por vida a recursos',
			],
			cta: 'COMENZAR',
			featured: false,
		},
	];

	return (
		<section id="precios" className="py-16 lg:py-24 px-mobile-gutter lg:px-desktop-gutter bg-background overflow-hidden">
			<div className="max-w-container mx-auto">
				<motion.div
					ref={headerRef}
					initial={{ opacity: 0, y: 30 }}
					animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="font-serif text-display text-primary mb-4">
						ELIGE TU EXPERIENCIA
					</h2>
					<p className="text-xl text-secondary max-w-2xl mx-auto">
						Diferentes opciones para tu viaje hacia el control consciente de tus sueños
					</p>
				</motion.div>

				<div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{packages.map((pkg, i) => (
						<motion.div
							key={pkg.name}
							custom={i}
							variants={cardVariants}
							initial="hidden"
							animate={cardsVisible ? "visible" : "hidden"}
							whileHover={{
								y: -12,
								scale: pkg.featured ? 1.05 : 1.03,
								boxShadow: pkg.featured
									? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
									: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
							}}
							className={`p-8 lg:p-10 ${
								pkg.featured
									? 'bg-primary text-background lg:scale-105'
									: 'bg-cream text-primary'
							} cursor-pointer relative`}
						>
							{pkg.featured && (
								<motion.div
									animate={{
										scale: [1, 1.02, 1],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									className="absolute inset-0 bg-primary/5 pointer-events-none"
								/>
							)}

							<h3 className="text-h4 font-bold uppercase mb-2 relative z-10">{pkg.name}</h3>
							<p className={`text-sm mb-6 relative z-10 ${pkg.featured ? 'text-background/70' : 'text-secondary'}`}>
								{pkg.duration}
							</p>

							<motion.div className="mb-8 relative z-10">
								<span className="text-5xl lg:text-6xl font-serif font-bold">${pkg.price}</span>
								<span className={`text-lg ml-2 ${pkg.featured ? 'text-background/70' : 'text-secondary'}`}>
									USD
								</span>
							</motion.div>

							<ul className="space-y-4 mb-8 relative z-10">
								{pkg.features.map((feature, index) => (
									<motion.li
										key={index}
										initial={{ opacity: 0, x: -20 }}
										animate={cardsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
										transition={{ delay: i * 0.15 + index * 0.1 }}
										className="flex items-start gap-3"
									>
										<span className="text-xl">✓</span>
										<span className={`text-sm ${pkg.featured ? 'text-background/90' : 'text-secondary'}`}>
											{feature}
										</span>
									</motion.li>
								))}
							</ul>

							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
								className={`w-full py-4 font-semibold uppercase text-sm transition-all duration-300 relative z-10 ${
									pkg.featured
										? 'bg-background text-primary hover:bg-background/90'
										: 'border-2 border-primary hover:bg-primary hover:text-background'
								}`}
							>
								{pkg.cta}
							</motion.button>
						</motion.div>
					))}
				</div>

				<motion.p
					initial={{ opacity: 0 }}
					animate={cardsVisible ? { opacity: 1 } : { opacity: 0 }}
					transition={{ delay: 0.6 }}
					className="text-center text-sm text-secondary mt-12"
				>
					¿Necesitas un plan personalizado? <a href="#contacto" className="underline hover:text-primary transition-colors">Contáctanos</a>
				</motion.p>
			</div>
		</section>
	);
}
