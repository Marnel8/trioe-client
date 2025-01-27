import { useState, useEffect } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

type ConfigurationModalProps = {
	isOpen: boolean;
	onClose: () => void;
	onSave: (config: ComponentConfig) => void;
	initialConfig?: ComponentConfig;
};

export type ComponentConfig = {
	name: string;
	dataDirection: "get" | "send";
	device: string;
	sensor: string;
	backgroundColor: string;
	textColor: string;
};

const devices = ["Device 1", "Device 2", "Device 3"];
const sensors = ["Sensor 1", "Sensor 2", "Sensor 3"];

export function ConfigurationModal({
	isOpen,
	onClose,
	onSave,
	initialConfig,
}: ConfigurationModalProps) {
	const [config, setConfig] = useState<ComponentConfig>({
		name: "",
		dataDirection: "get",
		device: "",
		sensor: "",
		backgroundColor: "#ffffff",
		textColor: "#000000",
	});

	useEffect(() => {
		if (initialConfig) {
			setConfig(initialConfig);
		}
	}, [initialConfig]);

	const handleSave = () => {
		onSave(config);
		onClose();
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Configure Component</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input
							id="name"
							value={config.name}
							onChange={(e) => setConfig({ ...config, name: e.target.value })}
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="dataDirection" className="text-right">
							Data Direction
						</Label>
						<Select
							value={config.dataDirection}
							onValueChange={(value) =>
								setConfig({ ...config, dataDirection: value as "get" | "send" })
							}
						>
							<SelectTrigger className="col-span-3">
								<SelectValue placeholder="Select data direction" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="get">Get Data</SelectItem>
								<SelectItem value="send">Send Data</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="device" className="text-right">
							Device
						</Label>
						<Select
							value={config.device}
							onValueChange={(value) => setConfig({ ...config, device: value })}
						>
							<SelectTrigger className="col-span-3">
								<SelectValue placeholder="Select device" />
							</SelectTrigger>
							<SelectContent>
								{devices.map((device) => (
									<SelectItem key={device} value={device}>
										{device}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="sensor" className="text-right">
							Sensor
						</Label>
						<Select
							value={config.sensor}
							onValueChange={(value) => setConfig({ ...config, sensor: value })}
						>
							<SelectTrigger className="col-span-3">
								<SelectValue placeholder="Select sensor" />
							</SelectTrigger>
							<SelectContent>
								{sensors.map((sensor) => (
									<SelectItem key={sensor} value={sensor}>
										{sensor}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="backgroundColor" className="text-right">
							Background Color
						</Label>
						<Input
							id="backgroundColor"
							type="color"
							value={config.backgroundColor}
							onChange={(e) =>
								setConfig({ ...config, backgroundColor: e.target.value })
							}
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="textColor" className="text-right">
							Text Color
						</Label>
						<Input
							id="textColor"
							type="color"
							value={config.textColor}
							onChange={(e) =>
								setConfig({ ...config, textColor: e.target.value })
							}
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit" onClick={handleSave}>
						Save changes
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
