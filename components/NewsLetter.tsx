"use client";
import React from "react";
import { Input } from "./ui/input";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";

const NewsLetter = () => {
	const [email, setEmail] = React.useState("");

	return (
		<div className="space-y-4 flex flex-col items-center md:items-start">
			<div className="space-y-2 text-center md:text-left">
				<h3 className="text-xl font-semibold">Subscribe to our Newsletter!</h3>
				<p className="text-sm text-muted-foreground">
					Subscribe to our Newsletter and stay updated.
				</p>
			</div>
			<div className="space-y-2 w-full">
				<Input
					type="email"
					placeholder="example@email.com"
					className="bg-white"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<AnimatedSubscribeButton
					setEmail={setEmail}
					email={email}
					buttonColor="#000000"
					buttonTextColor="#ffffff"
					subscribeStatus={false}
					initialText={
						<span className="group inline-flex items-center">
							Subscribe{" "}
							<ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
						</span>
					}
					changeText={
						<span className="group inline-flex items-center">
							<CheckIcon className="mr-2 size-4" />
							Subscribed{" "}
						</span>
					}
				/>
			</div>
		</div>
	);
};

export default NewsLetter;
