import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./socials";
import NewsLetter from "./NewsLetter";
export default function Footer() {
	return (
		<footer className=" px-[40px]">
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{/* Left Column - Logo and Contact Info */}
					<div className="space-y-6 flex flex-col items-center md:items-start">
						<div className="flex items-center gap-4">
							<Image
								src="/images/BSU_LOGO.png"
								alt="Shield Logo"
								width={50}
								height={50}
								className="h-12 w-auto"
							/>
							<Image
								src="/images/LOGO_WITH_TEXT.png"
								alt="TRIOE Logo"
								width={100}
								height={50}
								className="h-12 w-auto"
							/>
						</div>
						<div className="space-y-4 text-sm text-muted-foreground text-center md:text-left">
							<div className="flex items-start gap-2">
								<MapPin className="mt-1 h-4 w-4 shrink-0" />
								<p>
									BatStateU-TNEU Alangilan, Batangas City,
									<br />
									Batangas 4200, Philippines
								</p>
							</div>
							<div className="flex justify-center md:justify-start items-center gap-2">
								<Mail className="h-4 w-4 shrink-0" />
								<p>devops.batstateu@gmail.com</p>
							</div>
							<div className="flex justify-center md:justify-start items-center gap-2">
								<Phone className="h-4 w-4 shrink-0" />
								<p>+63 908-266-5764</p>
							</div>
						</div>
						<Socials color="text-muted-foreground" size={16} />
					</div>

					{/* Middle Column - Navigation */}
					<div className="w-full flex justify-center md:justify-start">
						<nav className="space-y-4 w-full flex flex-col items-center md:items-start">
							<Link
								href="#"
								className="text-sm text-muted-foreground hover:text-foreground"
							>
								Kits
							</Link>
							<Link
								href="#"
								className="text-sm text-muted-foreground hover:text-foreground"
							>
								Courses
							</Link>
							<Link
								href="#"
								className="text-sm text-muted-foreground hover:text-foreground"
							>
								Events
							</Link>
							<Link
								href="#"
								className="text-sm text-muted-foreground hover:text-foreground"
							>
								Community
							</Link>
						</nav>
					</div>

					{/* Right Column - Newsletter */}
					<NewsLetter />
				</div>
				{/* Copyright */}
				<div className="mt-8 border-t text-center text-sm text-muted-foreground py-3">
					© 2024 TRIOE. All Rights Reserved.
				</div>
			</div>
		</footer>
	);
}
