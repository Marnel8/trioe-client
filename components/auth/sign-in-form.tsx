"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useLogin } from "@/hooks/auth/useLogin";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	password: z.string().min(8, {
		message: "Password must be at least 8 characters long.",
	}),
});

const SignInForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const { mutateAsync: login, isPending: isLoginPending } = useLogin();

	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const { email, password } = values;
		try {
			await login({ email, password });
			toast({
				description: "Login successful",
				className: "success-toast",
			});
			form.reset();
			router.push("/");
		} catch (error: any) {
			toast({
				description: error.message,
				className: "error-toast",
			});
		}
	}

	return (
		<div className="flex justify-center items-center min-h-screen  p-4">
			<Card className="w-full max-w-4xl shadow-2xl overflow-hidden">
				<div className="md:flex">
					<div className="md:w-1/2 bg-sign-in-bg p-8 flex flex-col justify-center items-center relative overflow-hidden">
						<div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
						<div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
						<img
							src="/images/LOGO_WITH_TEXT.png"
							alt="Company Logo"
							className="w-[200px] h-[200px] object-contain "
						/>
						<h2 className="text-4xl font-bold mb-4 text-center">Welcome</h2>
						<p className="text-lg mb-6 text-center text-gray-700">
							Join our community and unlock amazing features.
						</p>
					</div>
					<div className="md:w-1/2 p-8">
						<CardHeader className="text-center">
							<CardTitle className="text-2xl font-bold mb-2">Sign In</CardTitle>
							<CardDescription>
								Enter your credentials to access your account
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="space-y-4"
								>
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input placeholder="Enter your email" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Password</FormLabel>
												<FormControl>
													<div className="relative">
														<Input
															type={showPassword ? "text" : "password"}
															placeholder="Enter your password"
															{...field}
														/>
														<button
															type="button"
															onClick={() => setShowPassword(!showPassword)}
															className="absolute right-3 top-1/2 transform -translate-y-1/2"
														>
															{showPassword ? (
																<EyeOff className="h-5 w-5 text-gray-500" />
															) : (
																<Eye className="h-5 w-5 text-gray-500" />
															)}
														</button>
													</div>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<Button
										type="submit"
										className="w-full bg-gradient-to-r from-[#87d9ff] to-[#b5ebff] hover:from-[#b5ebff] hover:to-[#87d9ff] text-white"
									>
										Sign In
									</Button>
								</form>
							</Form>
						</CardContent>
						<CardFooter className="flex flex-col justify-center">
							<div className="mt-6 text-center">
								<a href="#" className="text-sm text-blue-600 hover:underline">
									Forgot password?
								</a>
							</div>
							<div className="mt-4 text-center">
								<p className="text-sm text-gray-600">
									Don't have an account?{" "}
									<a href="/sign-up" className="text-blue-600 hover:underline">
										Sign up
									</a>
								</p>
							</div>
						</CardFooter>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default SignInForm;
