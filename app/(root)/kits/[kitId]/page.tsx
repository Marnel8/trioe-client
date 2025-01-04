import KitDetails from "@/components/kits/KitDetails";

const SteamKit = async ({ params }: { params: Promise<{ kitId: string }> }) => {
	const kitId = (await params).kitId;

	return <KitDetails kitId={kitId} />;
};

export default SteamKit;
