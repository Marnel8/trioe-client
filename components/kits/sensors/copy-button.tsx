"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CopyButtonProps {
	text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
	const [isCopied, setIsCopied] = useState(false);

	const copy = async () => {
		await navigator.clipboard.writeText(text);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

	return (
		<Button
			size="sm"
			variant="ghost"
			className="absolute right-8 top-10 text-gray-500 hover:bg-none"
			onClick={copy}
		>
			{isCopied ? (
				<>
					<Check className="h-5 w-5" />
				</>
			) : (
				<>
					<Copy className="h-5 w-5" />
				</>
			)}
		</Button>
	);
}
