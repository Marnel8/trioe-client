import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ConfirmNavigationModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	title: string;
}

export function ConfirmNavigationModal({
	isOpen,
	onClose,
	onConfirm,
	title,
}: ConfirmNavigationModalProps) {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="w-[95%] max-w-[425px] p-4 sm:p-6">
				<DialogHeader className="space-y-2 text-center sm:text-left">
					<DialogTitle className="text-lg sm:text-xl">
						Navigate to {title}
					</DialogTitle>
					<DialogDescription className="text-sm sm:text-base">
						You are about to leave the current page. Would you like to continue?
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="mt-4 flex flex-col-reverse gap-2 sm:flex-row-reverse sm:justify-start sm:gap-3">
					<Button onClick={onConfirm} className="w-full sm:w-auto">
						Continue
					</Button>
					<Button
						variant="secondary"
						onClick={onClose}
						className="w-full sm:w-auto"
					>
						Stay Here
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
