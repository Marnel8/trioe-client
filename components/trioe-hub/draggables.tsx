import { useDraggable } from "@dnd-kit/core";
import React from "react";

export type DraggableItemProps = {
	id: string;
	type: string;
	name: string;
};

const Draggables = (item: DraggableItemProps) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: item.id,
	});

	const style = transform
		? {
				transform: `translate(${transform.x}px, ${transform.y}px)`,
		  }
		: undefined;

	if (item && item.type === "button") {
		return (
			<button
				ref={setNodeRef}
				style={style}
				{...attributes}
				{...listeners}
				className="cursor-grab rounded-lg border w-full min-w-[120px] p-4 shadow-sm hover:shadow-md  "
			>
				{item.name}
			</button>
		);
	}

	if (item && item.type === "gauge") {
		return (
			<div
				ref={setNodeRef}
				style={style}
				{...attributes}
				{...listeners}
				className="cursor-grab rounded-lg border p-4 shadow-sm hover:shadow-md min-h-[180px] flex items-center justify-center"
			>
				<span className="text-green-800">{item.name}</span>
			</div>
		);
	}

	return null;
};

export default Draggables;
