export default function MarqueeSection() {
	return (
		<div className="overflow-hidden bg-primary py-12 lg:py-16">
			<div className="whitespace-nowrap">
				<div className="inline-block animate-marquee hover:pause font-serif text-6xl lg:text-8xl font-bold text-background">
					Consciente · Controlado · Transformador · Memorable · Consciente · Controlado · Transformador · Memorable ·
				</div>
			</div>
		</div>
	);
}
