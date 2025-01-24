"use client";
import PageHeader from "@/components/PageHeader";
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

const TrioeHubPage = () => {
	const [boxItems, setBoxItems] = useState<{
		[key: number]: DraggableItemProps | null;
	}>({});
	const [isClient, setIsClient] = useState(false);

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
			setBoxItems((prev) => ({
				...prev,
				[boxId]: item,
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

	if (!isClient) {
		return null;
	}

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<PageHeader title="TRIOE HUB" />
			<div className="p-5 gap-2 flex ">
				<div className="border mb-3 p-4 w-[300px] flex flex-col gap-2">
					{draggableItems.map((item) => (
						<div key={item.id}>
							<Draggables {...item} />
						</div>
					))}
				</div>

				<div className="border-4 h-screen overflow-auto border-dashed w-full flex flex-wrap gap-4 p-5">
					{Boxes.map((box) => (
						<div key={box.id}>
							<Dropbox
								box={box}
								draggableItem={boxItems[box.id]}
								onRemove={handleRemove}
							/>
						</div>
					))}
				</div>
			</div>
		</DndContext>
	);
};

export default TrioeHubPage;
