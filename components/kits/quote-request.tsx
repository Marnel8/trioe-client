"use client";

import React, { use } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { quoteFormSchema } from "@/lib/schema";
import { ScrollArea } from "../ui/scroll-area";
import { toast } from "@/hooks/use-toast";
import { useRequestForQuotation } from "@/hooks/rfq/useRequestForQuotation";

interface QuoteRequestModalProps {
	quantity: number;
	price: number;
	kitName: string;
}

export function QuoteRequestModal({
	quantity,
	price,
	kitName,
}: QuoteRequestModalProps) {
	const { mutateAsync: sendQuote, isPending: isSending } =
		useRequestForQuotation();

	const form = useForm<z.infer<typeof quoteFormSchema>>({
		resolver: zodResolver(quoteFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			organization: "",
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof quoteFormSchema>) {
		try {
			const data = {
				firstName: values.firstName,
				lastName: values.lastName,
				email: values.email,
				contactNumber: values.phone,
				organization: values.organization,
				additionalRequirements: values.message,
				kitName: kitName,
				quantity: quantity,
				price: price,
			};
			await sendQuote(data);

			toast({
				description: "Your quote request has been sent successfully.",
			});

			form.reset();
		} catch (error: any) {
			toast({
				description: error.message || "Something went wrong. Please try again.",
			});
		}
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="w-full bg-red-500 hover:bg-red-400 text-white text-lg py-6 shadow-sm hover:shadow transition-all duration-300">
					<Quote className="w-5 h-5 mr-2" />
					Request a Quote
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader className="px-2">
					<DialogTitle>Request a Quote</DialogTitle>
					<DialogDescription>
						Fill out this form to receive a customized quote for {quantity}{" "}
						STEAM Kit(s).
					</DialogDescription>
				</DialogHeader>
				<ScrollArea className="max-h-[80vh] ">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-6 px-2"
						>
							<div className="grid grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>First name</FormLabel>
											<FormControl>
												<Input placeholder="John" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Last name</FormLabel>
											<FormControl>
												<Input placeholder="Doe" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												type="email"
												placeholder="john.doe@example.com"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Phone number</FormLabel>
										<FormControl>
											<Input
												type="tel"
												placeholder="+1 (555) 000-0000"
												{...field}
											/>
										</FormControl>
										<FormDescription>Optional</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="organization"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Organization</FormLabel>
										<FormControl>
											<Input placeholder="Acme Inc." {...field} />
										</FormControl>
										<FormDescription>Optional</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Additional requirements</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Please specify any special requirements or questions you have."
												className="h-24"
												{...field}
											/>
										</FormControl>
										<FormDescription>Optional</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="space-y-2">
								<div className="text-sm text-gray-500">
									Quantity: {quantity} unit(s)
								</div>
								<div className="text-sm text-gray-500">
									Total estimate: ₱{(quantity * price).toLocaleString()}
								</div>
							</div>
							<Button
								type="submit"
								className="w-full bg-blue-400 hover:bg-blue-500"
								disabled={isSending}
							>
								{isSending ? "Sending..." : "Submit Quote Request"}
							</Button>
						</form>
					</Form>
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
}
