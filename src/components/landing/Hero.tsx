import { Button } from '@/components/ui/button';

export function Hero() {
	return (
		<section className="container mx-auto px-4 py-20 md:py-32">
			<div className="max-w-4xl mx-auto text-center">
				<div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
					AI-Powered Headshots
				</div>
				<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
					Professional Headshots in Minutes
				</h1>
				<p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
					Transform your selfies into stunning professional headshots with AI. Perfect for LinkedIn,
					resumes, and business profiles.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button
						size="lg"
						className="text-lg px-8">
						Create Your Headshot
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="text-lg px-8">
						See Examples
					</Button>
				</div>
				<div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-muted-foreground">
					<div className="flex items-center gap-2">
						<svg
							className="w-5 h-5 text-primary flex-shrink-0"
							fill="currentColor"
							viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<span>No photo shoot needed</span>
					</div>
					<div className="flex items-center gap-2">
						<svg
							className="w-5 h-5 text-primary flex-shrink-0"
							fill="currentColor"
							viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<span>Ready in 5 minutes</span>
					</div>
					<div className="flex items-center gap-2">
						<svg
							className="w-5 h-5 text-primary flex-shrink-0"
							fill="currentColor"
							viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<span>100+ styles</span>
					</div>
				</div>
			</div>
		</section>
	);
}
