import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
			<div className="text-center">
				<h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
				<h2 className="text-3xl font-semibold text-gray-700 mb-6">
					Page Not Found
				</h2>
				<p className="text-xl text-gray-600 mb-8">
					Oops! The page you're looking for doesn't exist.
				</p>
				<div className="flex flex-col sm:flex-row justify-center gap-4">
					<Button asChild variant="outline" className="flex items-center gap-2">
						<Link href="/">
							<Home className="w-4 h-4" />
							<span>Go to Homepage</span>
						</Link>
					</Button>
					<Button asChild className="flex items-center gap-2">
						<Link href="javascript:history.back()">
							<ArrowLeft className="w-4 h-4" />
							<span>Go Back</span>
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
