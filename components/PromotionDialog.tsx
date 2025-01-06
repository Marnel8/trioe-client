"use client";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PromotionDialog = () => {
	const [open, setOpen] = useState(true);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="max-w-[340px] sm:max-w-md md:max-w-lg font-roboto-regular">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<DialogTitle className="text-3xl font-bold text-center text-primary mb-4">
						Thank You for Visiting!
					</DialogTitle>
					<DialogDescription className="text-center space-y-4">
						<span className="text-lg text-muted-foreground">
							We'd love to stay in touch. Please consider leaving your contact
							information.
						</span>
						<br />
						<br />
						<span className="text-sm">
							Kindly{" "}
							<a
								href="https://forms.gle/RNxHsgcnPvF8vjBn8"
								className="font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200"
							>
								click here
							</a>{" "}
							or scan the QR code below.
						</span>
					</DialogDescription>
				</motion.div>
				<motion.div
					className="flex justify-center mt-6"
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.3 }}
				>
					<div className="relative w-48 h-48 bg-gradient-to-br from-primary to-primary-foreground rounded-lg overflow-hidden shadow-lg">
						<Image
							src="/images/TRIOE-QR-FORM.png"
							alt="QR Code"
							fill
							className=" object-cover"
						/>
					</div>
				</motion.div>
			</DialogContent>
		</Dialog>
	);
};

export default PromotionDialog;
