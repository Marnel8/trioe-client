"use client";
import { useSubscribe } from "@/hooks/subs/useSubscribe";
import { toast } from "@/hooks/use-toast";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

interface AnimatedSubscribeButtonProps {
	buttonColor: string;
	buttonTextColor?: string;
	subscribeStatus: boolean;
	initialText: React.ReactElement | string;
	changeText: React.ReactElement | string;
	email: string;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export const AnimatedSubscribeButton: React.FC<
	AnimatedSubscribeButtonProps
> = ({
	buttonColor,
	subscribeStatus,
	buttonTextColor,
	changeText,
	initialText,
	email,
	setEmail,
}) => {
	const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);
	const { mutateAsync: subscribe, isPending: isSubscribing } = useSubscribe();

	const handleSubscribe = async () => {
		try {
			await subscribe(email);

			toast({
				className: "success-toast",
				description: "You have successfully subscribed to our newsletter.",
			});

			setIsSubscribed((prev) => !prev);
			setEmail("");
		} catch (error) {
			toast({
				className: "error-toast",
				description: "Something went wrong. Please try again.",
			});
		}
	};

	return (
		<AnimatePresence mode="wait">
			{isSubscribed ? (
				<motion.button
					className="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md bg-white outline outline-1 outline-black"
					onClick={handleSubscribe}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					disabled={isSubscribing}
				>
					<motion.span
						key="action"
						className="relative flex h-full w-full items-center justify-center font-semibold"
						initial={{ y: -50 }}
						animate={{ y: 0 }}
						style={{ color: buttonColor }}
					>
						{changeText}
					</motion.span>
				</motion.button>
			) : (
				<motion.button
					className="relative flex h-10 w-full cursor-pointer items-center justify-center rounded-md border-none"
					style={{ backgroundColor: buttonColor, color: buttonTextColor }}
					onClick={handleSubscribe}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					disabled={isSubscribing}
				>
					<motion.span
						key="reaction"
						className="relative flex items-center justify-center font-semibold"
						initial={{ x: 0 }}
						exit={{ x: 50, transition: { duration: 0.1 } }}
					>
						{initialText}
					</motion.span>
				</motion.button>
			)}
		</AnimatePresence>
	);
};
