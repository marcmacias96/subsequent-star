import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import DecorativeLine from './DecorativeLine';

export default function AboutSection() {
	const sectionRef = useRef(null);
	const { ref: contentRef, isVisible } = useScrollAnimation(0.3);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"]
	});

	const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

	return (
		<section ref={sectionRef} className="py-16 lg:py-32 px-mobile-gutter lg:px-desktop-gutter bg-cream overflow-hidden">
			<div className="max-w-container mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Imagen con Parallax */}
					<motion.div
						style={{ y, opacity }}
						className="overflow-hidden"
					>
						<motion.img
							src="/images/bedroom-elegant.jpg"
							alt="Nuestro espacio"
							className="w-full h-[600px] object-cover"
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.6 }}
						/>
					</motion.div>

					{/* Contenido con animación */}
					<motion.div
						ref={contentRef}
						initial={{ opacity: 0, x: 50 }}
						animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<motion.p
							initial={{ opacity: 0 }}
							animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
							transition={{ delay: 0.2 }}
							className="text-sm uppercase tracking-wider mb-6 text-secondary"
						>
							NUESTRA MISIÓN
						</motion.p>

						<motion.div
							initial={{ opacity: 0, scaleX: 0 }}
							animate={isVisible ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
							transition={{ delay: 0.3, duration: 0.6 }}
							className="origin-left"
						>
							<DecorativeLine className="mb-8 text-primary/20" />
						</motion.div>

						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ delay: 0.4 }}
							className="font-serif text-display lg:text-hero text-primary mb-8"
						>
							Con Oneirós, experimentar sueños lúcidos dejará de ser un misterio
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ delay: 0.5 }}
							className="text-lg text-secondary mb-6 leading-relaxed"
						>
							Durante años, el sueño lúcido ha sido una experiencia reservada para unos pocos
							afortunados. Nosotros lo democratizamos a través de ciencia, tecnología y
							dedicación.
						</motion.p>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ delay: 0.6 }}
							className="text-lg text-secondary mb-8 leading-relaxed"
						>
							Nuestras instalaciones combinan investigación neurocientífica con diseño de
							experiencias. Cada detalle está pensado para que alcances consciencia durante
							tus sueños de forma segura y consistente.
						</motion.p>

						<motion.button
							initial={{ opacity: 0, y: 20 }}
							animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ delay: 0.7 }}
							whileHover={{ scale: 1.05, backgroundColor: '#000000', color: '#EDE8E1' }}
							whileTap={{ scale: 0.98 }}
							className="px-8 py-3 border-2 border-primary bg-transparent text-primary font-semibold uppercase text-sm transition-colors duration-300"
						>
							MÁS INFORMACIÓN
						</motion.button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
