import ActuatorDetails from "@/components/kits/actuators/actuator-details";
import { actuators } from "@/constants";

export default async function ActuatorPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const actId = (await params).id;
	return <ActuatorDetails actuatorId={actId} />;
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const actId = (await params).id;
	const actuator = actuators.find((act) => act.id === actId);

	if (!actuator) {
		return;
	}

	return {
		title: actuator.name,
		description: actuator.category,
		openGraph: {
			title: actuator.name,
			description: actuator.category,
			type: "article",
			locale: "en_US",
			url: `https://trioe.dev/actuators/${actId}`,
			siteName: "TRIOE",
			images: [
				{
					url: actuator.image,
				},
			],
		},
	};
}
