"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export interface Breadcrumb {
	href: string;
	label: string;
	isCurrent: boolean;
}

export function useBreadcrumbs() {
	const pathname = usePathname();

	const breadcrumbs = useMemo(() => {
		const segments = pathname.split("/").filter(Boolean);
		return segments.map((segment, index) => {
			const href = `/${segments.slice(0, index + 1).join("/")}`;
			return {
				href,
				label: segment.charAt(0).toUpperCase() + segment.slice(1),
				isCurrent: index === segments.length - 1,
			};
		});
	}, [pathname]);

	return breadcrumbs;
}
