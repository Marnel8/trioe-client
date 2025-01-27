import { useDroppable } from "@dnd-kit/core";
import type { DraggableItemProps } from "./draggables";
import { ResizableBox } from "react-resizable";
import { useState, useEffect } from "react";
import "react-resizable/css/styles.css";
import { X } from "lucide-react";
import dynamic from "next/dynamic";
import type { ComponentConfig } from "./configuration-modal";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
	ssr: false,
});

type DropboxProps = {
	box: { id: number; name: string };
	draggableItem: (DraggableItemProps & { config?: ComponentConfig }) | null;
	onRemove: (boxId: number) => void;
	onItemClick: (boxId: number) => void;
};

const Dropbox = ({
	box,
	draggableItem,
	onRemove,
	onItemClick,
}: DropboxProps) => {
	const { setNodeRef } = useDroppable({
		id: box.id,
	});

	const [size, setSize] = useState({ width: 150, height: 150 });

	useEffect(() => {
		if (draggableItem) {
			if (draggableItem.type === "button") {
				setSize({ width: 200, height: 60 });
			} else if (draggableItem.type === "gauge") {
				setSize({ width: 200, height: 200 });
			}
		}
	}, [draggableItem]);

	const config = draggableItem?.config;

	const containerStyle = {
		width: "100%",
		height: "100%",
		backgroundColor: config?.backgroundColor || "#f3f4f6",
		color: config?.textColor || "#000000",
	};

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (draggableItem) {
			onItemClick(box.id);
		}
	};

	return (
		<ResizableBox
			width={size.width}
			height={size.height}
			onResize={(e, { size }) => setSize(size)}
			minConstraints={[100, 50]}
			maxConstraints={[500, 500]}
		>
			<div
				className="rounded-md flex items-center justify-center overflow-hidden relative"
				ref={setNodeRef}
				style={containerStyle}
				onClick={handleClick}
			>
				{draggableItem && (
					<button
						className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
						onClick={(e) => {
							e.stopPropagation();
							onRemove(box.id);
						}}
					>
						<X size={16} />
					</button>
				)}
				{draggableItem ? (
					draggableItem.type === "button" ? (
						<button
							className="rounded w-full h-full"
							style={{ color: config?.textColor }}
						>
							{config?.name || draggableItem.name}
						</button>
					) : (
						<div className="w-full h-full flex flex-col items-center justify-center p-2">
							<div>
								<h1 className="text-2xl" style={{ color: config?.textColor }}>
									{config?.name || draggableItem.name}
								</h1>
								<p
									className="text-sm text-center"
									style={{ color: config?.textColor }}
								>
									{config?.sensor || "Temperature"}
								</p>
							</div>
							<GaugeComponent
								type="semicircle"
								arc={{
									width: 0.2,
									padding: 0.005,
									cornerRadius: 1,
									subArcs: [
										{ limit: 15, color: "#EA4228" },
										{ limit: 17, color: "#F5CD19" },
										{ limit: 28, color: "#5BE12C" },
										{ limit: 30, color: "#F5CD19" },
										{ color: "#EA4228" },
									],
								}}
								pointer={{
									color: "#345243",
									length: 0.8,
									width: 15,
									elastic: true,
								}}
								labels={{
									valueLabel: { formatTextValue: (value) => value + "ºC" },
									tickLabels: {
										type: "outer",
										defaultTickValueConfig: {
											formatTextValue: (value: any) => value + "ºC",
											style: { fontSize: 10 },
										},
										ticks: [{ value: 13 }, { value: 22.5 }, { value: 32 }],
									},
								}}
								value={32}
								minValue={10}
								maxValue={35}
							/>
						</div>
					)
				) : (
					<p className="text-gray-400">{box.name}</p>
				)}
			</div>
		</ResizableBox>
	);
};

export default Dropbox;
