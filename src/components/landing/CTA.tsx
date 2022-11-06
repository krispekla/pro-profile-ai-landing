import { Button } from '@/components/ui/button';

export function CTA() {
	return (
		<section className="container mx-auto px-4 py-20">
			<div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-12 text-center text-primary-foreground">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">
					Ready to Get Your Professional Headshot?
				</h2>
				<p className="text-xl mb-8 opacity-90">
					Join thousands of professionals who have upgraded their profile pictures with AI
				</p>
				<Button
					size="lg"
					className="bg-background text-foreground hover:bg-background/90 text-lg px-8">
					Start Creating Now
				</Button>
			</div>
		</section>
	);
}
