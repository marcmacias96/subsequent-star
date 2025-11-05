import { useState } from 'react';

export default function NewsletterSection() {
	const [email, setEmail] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Aquí iría la lógica de suscripción
		console.log('Email:', email);
		setEmail('');
	};

	return (
		<section className="py-16 lg:py-24 px-mobile-gutter lg:px-desktop-gutter bg-background border-t border-primary/10">
			<div className="max-w-4xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					{/* Texto */}
					<div>
						<h2 className="font-serif text-h2 lg:text-display text-primary mb-6">
							Déjanos tu correo electrónico para recibir información
						</h2>
						<p className="text-base text-secondary leading-relaxed">
							Regístrate con tu dirección de correo electrónico para recibir noticias,
							actualizaciones y técnicas exclusivas sobre sueños lúcidos.
						</p>
					</div>

					{/* Formulario */}
					<div>
						<form onSubmit={handleSubmit} className="space-y-4">
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Correo electrónico"
								required
								className="w-full px-6 py-4 bg-cream border-2 border-transparent focus:border-primary outline-none text-primary placeholder-secondary transition-colors duration-300"
							/>
							<button
								type="submit"
								className="w-full px-8 py-4 bg-primary text-background font-semibold uppercase text-sm transition-all duration-300 hover:bg-accent"
							>
								SUSCRIBIRSE
							</button>
						</form>
						<p className="text-xs text-secondary mt-4">
							Valoramos y respetamos tu privacidad.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
