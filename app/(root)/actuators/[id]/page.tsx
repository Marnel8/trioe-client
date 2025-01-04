import ActuatorDetails from "@/components/kits/actuators/actuator-details";

export default async function ActuatorPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const actuatorId = (await params).id;

	return <ActuatorDetails actuatorId={actuatorId} />;
}
