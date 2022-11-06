interface StepProps {
	number: number;
	title: string;
	description: string;
}

function Step({ number, title, description }: StepProps) {
	return (
		<div className="text-center">
			<div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
				{number}
			</div>
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-muted-foreground">{description}</p>
		</div>
	);
}

export function HowItWorks() {
	const steps = [
		{
			number: 1,
			title: 'Upload Your Photos',
			description: 'Upload 5-10 selfies from different angles. No professional equipment needed.',
		},
		{
			number: 2,
			title: 'AI Does the Magic',
			description:
				'Our AI analyzes your photos and generates professional headshots in various styles.',
		},
		{
			number: 3,
			title: 'Download & Use',
			description: 'Choose your favorites and download in high resolution. Ready for any platform!',
		},
	];

	return (
		<section
			id="how-it-works"
			className="container mx-auto px-4 py-20 bg-gradient-to-b from-transparent to-secondary/50">
			<div className="text-center mb-16">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
					Three simple steps to your perfect professional headshot
				</p>
			</div>
			<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
				{steps.map((step) => (
					<Step
						key={step.number}
						{...step}
					/>
				))}
			</div>
		</section>
	);
}
