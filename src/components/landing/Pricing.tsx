import { Button } from '@/components/ui/button';

interface PricingTier {
	name: string;
	price: number;
	features: string[];
	popular?: boolean;
	variant?: 'default' | 'outline';
}

function CheckIcon() {
	return (
		<svg
			className="w-5 h-5 mt-0.5 flex-shrink-0"
			fill="currentColor"
			viewBox="0 0 20 20">
			<path
				fillRule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

interface PricingCardProps {
	tier: PricingTier;
}

function PricingCard({ tier }: PricingCardProps) {
	if (tier.popular) {
		return (
			<div className="bg-primary text-primary-foreground rounded-lg p-8 relative border-2 border-primary shadow-xl scale-105">
				<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-foreground px-4 py-1 rounded-full text-sm font-medium">
					Most Popular
				</div>
				<h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
				<div className="mb-4">
					<span className="text-4xl font-bold">${tier.price}</span>
					<span className="opacity-80">/one-time</span>
				</div>
				<ul className="space-y-3 mb-8">
					{tier.features.map((feature, index) => (
						<li
							key={index}
							className="flex items-start gap-2">
							<CheckIcon />
							<span>{feature}</span>
						</li>
					))}
				</ul>
				<Button className="w-full bg-background text-foreground hover:bg-background/90">
					Get Started
				</Button>
			</div>
		);
	}

	return (
		<div className="bg-card border rounded-lg p-8">
			<h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
			<div className="mb-4">
				<span className="text-4xl font-bold">${tier.price}</span>
				<span className="text-muted-foreground">/one-time</span>
			</div>
			<ul className="space-y-3 mb-8">
				{tier.features.map((feature, index) => (
					<li
						key={index}
						className="flex items-start gap-2">
						<CheckIcon />
						<span>{feature}</span>
					</li>
				))}
			</ul>
			<Button
				className="w-full"
				variant={tier.variant || 'outline'}>
				Get Started
			</Button>
		</div>
	);
}

export function Pricing() {
	const tiers: PricingTier[] = [
		{
			name: 'Starter',
			price: 29,
			features: ['40 AI headshots', '5 different styles', 'HD downloads'],
			variant: 'outline',
		},
		{
			name: 'Professional',
			price: 49,
			features: ['100 AI headshots', '15 different styles', '4K downloads', 'Priority support'],
			popular: true,
		},
		{
			name: 'Premium',
			price: 99,
			features: [
				'200 AI headshots',
				'All styles included',
				'8K downloads',
				'Custom styles',
				'24/7 support',
			],
			variant: 'outline',
		},
	];

	return (
		<section
			id="pricing"
			className="container mx-auto px-4 py-20">
			<div className="text-center mb-16">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
					Professional headshots at a fraction of the cost of traditional photography
				</p>
			</div>
			<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
				{tiers.map((tier) => (
					<PricingCard
						key={tier.name}
						tier={tier}
					/>
				))}
			</div>
		</section>
	);
}
