import { BreadCrumbs } from "@/components/shared/BreadCrumb";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="font-roboto-regular">
			{/* <BreadCrumbs /> */}
			{children}
		</main>
	);
}
