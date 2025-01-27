import { useDraggable } from "@dnd-kit/core";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gauge, Command } from "lucide-react";

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

	const commonProps = {
		ref: setNodeRef,
		style: style,
		...attributes,
		...listeners,
	};

	if (item && item.type === "button") {
		return (
			<Button
				variant="outline"
				className="w-full justify-start gap-2"
				{...commonProps}
			>
				<Command className="h-4 w-4" />
				{item.name}
			</Button>
		);
	}

	if (item && item.type === "gauge") {
		return (
			<Card
				{...commonProps}
				className="cursor-grab hover:shadow-md transition-shadow"
			>
				<CardContent className="flex items-center gap-2 p-4">
					<Gauge className="h-5 w-5 text-primary" />
					<span className="font-medium">{item.name}</span>
				</CardContent>
			</Card>
		);
	}

	return null;
};

export default Draggables;
