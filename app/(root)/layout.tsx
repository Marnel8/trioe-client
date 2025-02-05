export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <main className="font-geist max-w-7xl mx-auto px-4">{children}</main>;
}
