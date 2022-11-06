import { Button } from '@/components/ui/button';

export function Navigation() {
	return (
		<nav className="container mx-auto px-4 py-6">
			<div className="flex items-center justify-between">
				<div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
					Pro Profile AI
				</div>
				<div className="hidden md:flex gap-8">
					<a
						href="#features"
						className="text-sm font-medium hover:text-primary transition-colors">
						Features
					</a>
					<a
						href="#how-it-works"
						className="text-sm font-medium hover:text-primary transition-colors">
						How It Works
					</a>
					<a
						href="#pricing"
						className="text-sm font-medium hover:text-primary transition-colors">
						Pricing
					</a>
				</div>
				<Button>Get Started</Button>
			</div>
		</nav>
	);
}
