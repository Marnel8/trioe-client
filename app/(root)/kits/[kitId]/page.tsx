import KitDetails from "@/components/kits/KitDetails";
import { kits } from "@/constants";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ kitId: string }>;
}) {
	const kitId = (await params).kitId;
	const kit = kits.find((k) => k.id === Number(kitId));

	if (!kit) return;

	return {
		title: kit.name,
		description: kit.description,
		openGraph: {
			title: kit.name,
			description: kit.description,
			type: "article",
			locale: "en_US",
			url: `https://trioe.dev/actuators/${kitId}`,
			siteName: "TRIOE",
			images: [
				{
					url: kit.images[0],
				},
			],
		},
	};
}

const SteamKit = async ({ params }: { params: Promise<{ kitId: string }> }) => {
	const kitId = (await params).kitId;

	return <KitDetails kitId={kitId} />;
};

export default SteamKit;
