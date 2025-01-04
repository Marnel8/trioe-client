"use client";
import { ChevronRight, Home } from "lucide-react";
import { useBreadcrumbs, Breadcrumb } from "@/hooks/useBreadcrumb";
import {
	Breadcrumb as BreadcrumbRoot,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadCrumbs() {
	const breadcrumbs = useBreadcrumbs();

	return (
		<BreadcrumbRoot>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/" aria-label="Home">
						<Home className="h-4 w-4" />
					</BreadcrumbLink>
				</BreadcrumbItem>
				{breadcrumbs.map((breadcrumb: Breadcrumb, index: number) => (
					<BreadcrumbItem key={breadcrumb.href}>
						{index > 0 && (
							<ChevronRight className="h-4 w-4 mx-2 flex-shrink-0 text-muted-foreground" />
						)}
						{breadcrumb.isCurrent ? (
							<BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
						) : (
							<>
								<BreadcrumbLink
									href={breadcrumb.href}
									className="hidden sm:inline-block"
								>
									{breadcrumb.label}
								</BreadcrumbLink>
								<BreadcrumbLink
									href={breadcrumb.href}
									className="sm:hidden"
									aria-label={breadcrumb.label}
								>
									...
								</BreadcrumbLink>
							</>
						)}
					</BreadcrumbItem>
				))}
			</BreadcrumbList>
		</BreadcrumbRoot>
	);
}
