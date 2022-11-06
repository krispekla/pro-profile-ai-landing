interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
	return (
		<div className="bg-card border rounded-lg p-8 hover:shadow-lg transition-shadow">
			<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
				{icon}
			</div>
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-muted-foreground">{description}</p>
		</div>
	);
}

export function Features() {
	const features = [
		{
			icon: (
				<svg
					className="w-6 h-6 text-primary"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M13 10V3L4 14h7v7l9-11h-7z"
					/>
				</svg>
			),
			title: 'Lightning Fast',
			description:
				'Upload your photos and get professional headshots in just 5 minutes. No waiting, no hassle.',
		},
		{
			icon: (
				<svg
					className="w-6 h-6 text-primary"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
					/>
				</svg>
			),
			title: 'Studio Quality',
			description:
				'AI-powered technology delivers professional results that rival expensive photo studios.',
		},
		{
			icon: (
				<svg
					className="w-6 h-6 text-primary"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
			),
			title: 'Multiple Styles',
			description:
				'Choose from 100+ professional styles and backgrounds to match your industry and personality.',
		},
	];

	return (
		<section
			id="features"
			className="container mx-auto px-4 py-20">
			<div className="text-center mb-16">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Pro Profile AI?</h2>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
					Skip the expensive photo shoots and get professional results instantly
				</p>
			</div>
			<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
				{features.map((feature, index) => (
					<FeatureCard
						key={index}
						{...feature}
					/>
				))}
			</div>
		</section>
	);
}
