import SensorDetails from "@/components/kits/sensors/sensor-details";

export default async function SensorPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const sensorId = (await params).id;
	return <SensorDetails sensorId={sensorId} />;
}
