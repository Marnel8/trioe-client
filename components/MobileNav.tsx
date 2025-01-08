"use client";
import React from "react";
import Link from "next/link";
import {
	HomeIcon,
	BookOpenIcon,
	CalendarIcon,
	UsersIcon,
	PackageIcon,
	LogInIcon,
	SunIcon,
	MoonIcon,
	UserIcon,
	LogOutIcon,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ConfirmNavigationModal } from "./ConfirmNavigationModal";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { navLinks } from "@/constants";
import { useFetchUser } from "@/hooks/auth/useFetchuser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useLogout } from "@/hooks/auth/useLogout";
import { getImageUrl } from "@/utils/imageUtils";
import { Dock } from "./ui/dock";

// Map icons to link IDs
const ICON_MAP: { [key: string]: React.ElementType } = {
	home: HomeIcon,
	kits: PackageIcon,
	docs: BookOpenIcon,
	events: CalendarIcon,
	community: UsersIcon,
};

export function MobileNav() {
	const pathname = usePathname();
	const router = useRouter();
	const [modalOpen, setModalOpen] = React.useState(false);
	const [pendingNavigation, setPendingNavigation] = React.useState<
		string | null
	>(null);
	const [isScrolled, setIsScrolled] = React.useState(false);

	const { data: user } = useFetchUser();
	const { mutateAsync: logout, isPending: logoutPending } = useLogout();

	// Modify the scroll handling logic
	React.useEffect(() => {
		// Set initial scroll state
		setIsScrolled(window.scrollY > 20);

		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleNavigation = (href: string, title: string) => {
		if (
			href.includes("events") ||
			href.includes("community") ||
			href.includes("docs")
		) {
			setPendingNavigation(href);
			setModalOpen(true);
		} else {
			router.push(href);
		}
	};

	const isHomePage = (path: string) => {
		return path === "/" || path === "";
	};

	const handleLogout = async () => {
		try {
			await logout();
		} catch (error) {}
	};

	const handleConfirmNavigation = () => {
		if (pendingNavigation) {
			window.location.href = pendingNavigation;
		}
		setModalOpen(false);
	};

	const getPageTitle = () => {
		// Remove trailing slash if it exists
		const cleanPath = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

		// If it's the root path, return Home
		if (cleanPath === "") return "Home";

		// Remove hash fragment and get the last segment
		const segment = cleanPath.split("#")[0].split("/").pop();

		// Handle empty segment case
		if (!segment) return "Home";

		// Capitalize first letter and keep rest of the string
		return segment.charAt(0).toUpperCase() + segment.slice(1);
	};

	return (
		<>
			<div
				className={cn(
					"fixed bottom-4 left-4 right-4 z-50  mx-auto max-w-[400px] flex flex-col items-center gap-2 border-red-500"
				)}
			>
				{/* Page Indicator - Updated with darker background */}
				<div
					className={cn(
						"px-4 py-1 rounded-full bg-background/90 backdrop-blur-md border text-xs transition-opacity duration-200",
						isScrolled ? "opacity-0" : "opacity-100"
					)}
				>
					{getPageTitle()}
				</div>

				{/* Navigation Bar - Updated with darker background */}
				<div
					className={cn(
						" w-full transition-transform duration-200",
						isScrolled ? "-translate-y-3" : "translate-y-0"
					)}
				>
					<TooltipProvider>
						<Dock
							direction="middle"
							className="flex items-center justify-center gap-2 px-4 h-14 bg-background/90 backdrop-blur-md border rounded-2xl shadow-lg"
						>
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										href="/"
										aria-label="Home"
										className={cn(
											buttonVariants({ variant: "ghost", size: "icon" }),
											"size-10 rounded-full hover:bg-accent/50 ",
											pathname === "/" && "bg-accent"
										)}
									>
										<HomeIcon className="size-5" />
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p>Home</p>
								</TooltipContent>
							</Tooltip>
							<Separator orientation="vertical" className="h-8" />

							{navLinks.map((item) => {
								if (
									(item.id === "kits" || item.id === "courses") &&
									!isHomePage(pathname)
								) {
									return null;
								}
								return (
									<Tooltip key={item.id}>
										<TooltipTrigger asChild>
											<button
												onClick={() => handleNavigation(item.href, item.title)}
												aria-label={item.title}
												className={cn(
													buttonVariants({ variant: "ghost", size: "icon" }),
													"size-10 rounded-full hover:bg-accent/50",
													pathname === item.href && "bg-accent"
												)}
											>
												{ICON_MAP[item.id] &&
													React.createElement(ICON_MAP[item.id], {
														className: "size-5",
													})}
											</button>
										</TooltipTrigger>
										<TooltipContent>
											<p>{item.title}</p>
										</TooltipContent>
									</Tooltip>
								);
							})}

							<Separator orientation="vertical" className="h-8" />

							{user ? (
								<Popover>
									<PopoverTrigger asChild>
										<Avatar className="size-10 cursor-pointer hover:opacity-80 transition-opacity">
											<AvatarImage
												src={getImageUrl(user?.avatar)}
												alt={user?.firstName || "User avatar"}
												className="object-cover"
											/>
											<AvatarFallback className="bg-primary/10 text-primary">
												{user?.firstName
													? user.firstName
															.split(" ")
															.map((n: any) => n[0])
															.join("")
															.toUpperCase()
													: "U"}
											</AvatarFallback>
										</Avatar>
									</PopoverTrigger>
									<PopoverContent className="w-64 p-4" align="end">
										<div className="grid gap-4">
											<div className="flex items-center gap-4">
												<Avatar className="size-12">
													<AvatarImage
														src={getImageUrl(user.avatar)}
														alt={user.firstName || "User avatar"}
														className="object-cover"
													/>
													<AvatarFallback className="bg-primary/10 text-primary text-lg">
														{user.firstName
															? user.firstName
																	.split(" ")
																	.map((n: any) => n[0])
																	.join("")
																	.toUpperCase()
															: "U"}
													</AvatarFallback>
												</Avatar>
												<div className="space-y-1">
													<p className="text-sm font-medium leading-none">
														{`${user.firstName} ${user.lastName}` || "User"}
													</p>
													<p className="text-xs text-muted-foreground">
														{user.email}
													</p>
												</div>
											</div>
											<div className="grid gap-2">
												<Link
													href="/account"
													className={cn(
														buttonVariants({ variant: "outline", size: "sm" }),
														"w-full justify-start gap-2"
													)}
												>
													<UserIcon className="size-4" />
													Account
												</Link>
												<button
													onClick={handleLogout}
													className={cn(
														buttonVariants({ variant: "outline", size: "sm" }),
														"w-full justify-start gap-2"
													)}
												>
													<LogOutIcon className="size-4" />
													Log out
												</button>
											</div>
										</div>
									</PopoverContent>
								</Popover>
							) : (
								<Tooltip>
									<TooltipTrigger asChild>
										<Link
											href="/sign-in"
											className={cn(
												buttonVariants({ variant: "ghost", size: "icon" }),
												"size-10 rounded-full hover:bg-accent/50"
											)}
										>
											<LogInIcon className="size-5" />
										</Link>
									</TooltipTrigger>
									<TooltipContent>
										<p>Sign In</p>
									</TooltipContent>
								</Tooltip>
							)}

							<Tooltip>
								<TooltipTrigger asChild>
									<button
										className={cn(
											buttonVariants({ variant: "ghost", size: "icon" }),
											"size-10 rounded-full hover:bg-accent/50"
										)}
									>
										<MoonIcon className="size-5" />
									</button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Toggle theme</p>
								</TooltipContent>
							</Tooltip>
						</Dock>
					</TooltipProvider>
				</div>
			</div>

			<ConfirmNavigationModal
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
				onConfirm={handleConfirmNavigation}
				title={
					navLinks.find((link) => link.href === pendingNavigation)?.title || ""
				}
			/>
		</>
	);
}
