interface DecorativeLineProps {
	className?: string;
}

export default function DecorativeLine({ className = "" }: DecorativeLineProps) {
	return (
		<svg
			className={`w-32 lg:w-48 ${className}`}
			viewBox="0 0 200 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0 50 Q 50 10, 100 50 T 200 50"
				stroke="currentColor"
				strokeWidth="1"
				fill="none"
			/>
		</svg>
	);
}
