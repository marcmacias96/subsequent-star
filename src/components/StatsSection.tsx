export default function StatsSection() {
	const stats = [
		{
			number: '70-90',
			unit: 'MIN',
			description: 'Tiempo hasta el primer ciclo REM'
		},
		{
			number: '8',
			unit: 'HORAS',
			description: 'Recomendadas para adultos'
		},
		{
			number: '25%',
			unit: 'REM',
			description: 'Del ciclo de sueño total'
		},
		{
			number: '4-6',
			unit: 'CICLOS',
			description: 'Completos durante la noche'
		}
	];

	return (
		<section className="py-16 lg:py-24 px-mobile-gutter lg:px-desktop-gutter bg-primary text-white">
			<div className="max-w-container mx-auto">
				<h2 className="text-display font-bold uppercase mb-12">
					EL SUEÑO EN NÚMEROS
				</h2>

				<div className="grid grid-cols-2 lg:grid-cols-4 gap-grid">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="text-center p-6 lg:p-8 border-2 border-white transition-all duration-300 hover:bg-white hover:text-primary"
						>
							<div className="text-5xl lg:text-6xl font-bold mb-2">{stat.number}</div>
							<div className="text-2xl font-semibold mb-4">{stat.unit}</div>
							<p className="text-sm lg:text-base uppercase font-medium">{stat.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
