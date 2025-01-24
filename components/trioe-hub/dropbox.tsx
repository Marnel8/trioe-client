import { useDroppable } from "@dnd-kit/core";
import type { DraggableItemProps } from "./draggables";
import { ResizableBox } from "react-resizable";
import { useState, useEffect } from "react";
import "react-resizable/css/styles.css";
import { X } from "lucide-react";

import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
	ssr: false,
});

type DropboxProps = {
	box: { id: number; name: string };
	draggableItem: DraggableItemProps | null;
	onRemove: (boxId: number) => void;
};

const Dropbox = ({ box, draggableItem, onRemove }: DropboxProps) => {
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

	return (
		<ResizableBox
			width={size.width}
			height={size.height}
			onResize={(e, { size }) => setSize(size)}
			minConstraints={[100, 50]}
			maxConstraints={[500, 500]}
		>
			<div
				className="bg-gray-100 rounded-md flex items-center justify-center overflow-hidden relative"
				ref={setNodeRef}
				style={{ width: "100%", height: "100%" }}
			>
				{draggableItem && (
					<button
						className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
						onClick={() => onRemove(box.id)}
					>
						<X size={16} />
					</button>
				)}
				{draggableItem ? (
					draggableItem.type === "button" ? (
						<button className="rounded">{draggableItem.name}</button>
					) : (
						<div className="w-full h-full flex flex-col items-center justify-center p-10 bg-black">
							<div>
								<h1 className="text-white text-2xl">{draggableItem.name}</h1>
								<p className="text-white text-sm">Temperature</p>
							</div>
							<GaugeComponent
								type="semicircle"
								arc={{
									width: 0.2,
									padding: 0.005,
									cornerRadius: 1,
									// gradient: true,
									subArcs: [
										{
											limit: 15,
											color: "#EA4228",
											showTick: true,
											tooltip: {
												text: "Too low temperature!",
											},
											onClick: () =>
												console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
											onMouseMove: () =>
												console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
											onMouseLeave: () =>
												console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
										},
										{
											limit: 17,
											color: "#F5CD19",
											showTick: true,
											tooltip: {
												text: "Low temperature!",
											},
										},
										{
											limit: 28,
											color: "#5BE12C",
											showTick: true,
											tooltip: {
												text: "OK temperature!",
											},
										},
										{
											limit: 30,
											color: "#F5CD19",
											showTick: true,
											tooltip: {
												text: "High temperature!",
											},
										},
										{
											color: "#EA4228",
											tooltip: {
												text: "Too high temperature!",
											},
										},
									],
								}}
								pointer={{
									color: "#345243",
									length: 0.8,
									width: 15,
									// elastic: true,
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
								value={22.5}
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
