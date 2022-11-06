export function Footer() {
	return (
		<footer className="container mx-auto px-4 py-12 border-t">
			<div className="flex flex-col md:flex-row justify-between items-center gap-4">
				<div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
					Pro Profile AI
				</div>
				<div className="flex gap-6 text-sm text-muted-foreground">
					<a
						href="#"
						className="hover:text-foreground transition-colors">
						Privacy Policy
					</a>
					<a
						href="#"
						className="hover:text-foreground transition-colors">
						Terms of Service
					</a>
					<a
						href="#"
						className="hover:text-foreground transition-colors">
						Contact
					</a>
				</div>
				<div className="text-sm text-muted-foreground">
					© 2022 Pro Profile AI. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
