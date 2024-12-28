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
			className="absolute right-10 top-4 text-gray-50 hover:bg-none"
			onClick={copy}
		>
			{isCopied ? (
				<>
					<Check className="h-4 w-4" />
				</>
			) : (
				<>
					<Copy className="h-4 w-4" />
				</>
			)}
		</Button>
	);
}
