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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Navigate to {title}</DialogTitle>
          <DialogDescription>
            You are about to leave the current page. Would you like to continue?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-row-reverse justify-start gap-2 sm:gap-0">
          <Button onClick={onConfirm}>Continue</Button>
          <Button variant="secondary" onClick={onClose}>
            Stay Here
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 