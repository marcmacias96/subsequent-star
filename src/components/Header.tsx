import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const { scrollY } = useScroll();
	const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
	const headerBlur = useTransform(scrollY, [0, 100], [0, 10]);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ name: 'SERVICIOS', href: '#servicios' },
		{ name: 'ACERCA DE', href: '#acerca' },
		{ name: 'PRECIOS', href: '#precios' },
		{ name: 'BLOG', href: '#blog' },
	];

	return (
		<motion.header
			style={{ opacity: headerOpacity }}
			className={`fixed top-0 left-0 right-0 z-40 py-6 px-mobile-gutter lg:px-desktop-gutter border-b transition-all duration-300 ${
				isScrolled
					? 'bg-background/80 backdrop-blur-md border-primary/20 shadow-lg'
					: 'bg-background border-primary/10'
			}`}
		>
			<div className="max-w-container mx-auto flex justify-between items-center">
				{/* Logo */}
				<motion.div
					className="text-xl lg:text-2xl font-bold uppercase"
					whileHover={{ scale: 1.05 }}
				>
					ONEIRÓS
				</motion.div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<motion.a
							key={link.name}
							href={link.href}
							whileHover={{ y: -2 }}
							className="text-sm font-medium uppercase hover:text-accent transition-colors duration-300"
						>
							{link.name}
						</motion.a>
					))}
					<motion.a
						href="#reservar"
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.98 }}
						className="px-6 py-3 bg-primary text-background font-semibold uppercase text-sm transition-all duration-300 hover:bg-accent"
					>
						RESERVAR
					</motion.a>
				</nav>

				{/* Mobile Menu Button */}
				<motion.button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					whileTap={{ scale: 0.95 }}
					className="md:hidden text-primary"
					aria-label="Toggle menu"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						{isMenuOpen ? (
							<path d="M6 18L18 6M6 6l12 12" />
						) : (
							<path d="M4 6h16M4 12h16M4 18h16" />
						)}
					</svg>
				</motion.button>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<motion.nav
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: 'auto' }}
					exit={{ opacity: 0, height: 0 }}
					className="md:hidden mt-6 pb-6 flex flex-col gap-4"
				>
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="text-sm font-medium uppercase hover:text-accent transition-colors duration-300"
							onClick={() => setIsMenuOpen(false)}
						>
							{link.name}
						</a>
					))}
					<a
						href="#reservar"
						className="px-6 py-3 bg-primary text-background font-semibold uppercase text-sm text-center transition-all duration-300 hover:bg-accent"
						onClick={() => setIsMenuOpen(false)}
					>
						RESERVAR
					</a>
				</motion.nav>
			)}
		</motion.header>
	);
}
