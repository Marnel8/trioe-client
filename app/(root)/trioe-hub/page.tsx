"use client";
import PageHeader from "@/components/PageHeader";
import {
	type ComponentConfig,
	ConfigurationModal,
} from "@/components/trioe-hub/configuration-modal";
import Draggables, {
	type DraggableItemProps,
} from "@/components/trioe-hub/draggables";
import Dropbox from "@/components/trioe-hub/dropbox";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import React, { useState, useEffect } from "react";

const Boxes = [
	{ id: 1, name: "Space" },
	{ id: 2, name: "Space" },
	{ id: 3, name: "Space" },
	{ id: 4, name: "Space" },
	{ id: 5, name: "Space" },
	{ id: 6, name: "Space" },
	{ id: 7, name: "Space" },
	{ id: 8, name: "Space" },
	{ id: 9, name: "Space" },
	{ id: 10, name: "Space" },
	{ id: 11, name: "Space" },
	{ id: 12, name: "Space" },
	{ id: 13, name: "Space" },
	{ id: 14, name: "Space" },
	{ id: 15, name: "Space" },
	{ id: 16, name: "Space" },
	{ id: 17, name: "Space" },
	{ id: 18, name: "Space" },
	{ id: 19, name: "Space" },
	{ id: 20, name: "Space" },
];

const draggableItems = [
	{
		id: "1",
		type: "button",
		name: "Button",
	},
	{
		id: "2",
		type: "gauge",
		name: "Gauge",
	},
];

type BoxItem = DraggableItemProps & { config?: ComponentConfig };

const TrioeHubPage = () => {
	const [boxItems, setBoxItems] = useState<{
		[key: number]: BoxItem | null;
	}>({});
	const [isClient, setIsClient] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedBox, setSelectedBox] = useState<number | null>(null);

	useEffect(() => {
		setIsClient(true);
	}, []);

	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event;

		if (!over) return;

		const itemId = active.id as string;
		const boxId = over.id as number;

		const item = draggableItems.find((item) => item.id === itemId);

		if (item) {
			setSelectedBox(boxId);
			setIsModalOpen(true);
			setBoxItems((prev) => ({
				...prev,
				[boxId]: { ...item },
			}));
		}
	}

	function handleConfigSave(config: ComponentConfig) {
		if (selectedBox !== null) {
			setBoxItems((prev) => ({
				...prev,
				[selectedBox]: {
					...prev[selectedBox]!,
					config,
				},
			}));
		}
	}

	function handleRemove(boxId: number) {
		setBoxItems((prev) => {
			const newBoxItems = { ...prev };
			delete newBoxItems[boxId];
			return newBoxItems;
		});
	}

	function handleItemClick(boxId: number) {
		setSelectedBox(boxId);
		setIsModalOpen(true);
	}

	if (!isClient) {
		return null;
	}

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<div className="p-2 gap-2 flex ">
				<div className="border mb-3 p-4 w-[300px] flex flex-col gap-2 rounded-lg">
					<div>
						<h2 className="text-lg font-semibold mb-4">Components</h2>
					</div>
					{draggableItems.map((item) => (
						<div key={item.id}>
							<Draggables {...item} />
						</div>
					))}
				</div>
				<div className=" h-screen overflow-auto w-full flex flex-wrap gap-4 p-5">
					{Boxes.map((box) => (
						<div key={box.id} className="cursor-pointer">
							<Dropbox
								box={box}
								draggableItem={boxItems[box.id]}
								onRemove={handleRemove}
								onItemClick={handleItemClick}
							/>
						</div>
					))}
				</div>
			</div>
			<ConfigurationModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSave={handleConfigSave}
				initialConfig={
					selectedBox !== null ? boxItems[selectedBox]?.config : undefined
				}
			/>
		</DndContext>
	);
};

export default TrioeHubPage;
