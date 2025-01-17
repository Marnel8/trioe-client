"use client";

import React, { useState } from "react";
import { Eye, EyeOff, User, Mail, Phone, Calendar, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "../ui/dialog";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "../ui/input-otp";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { useActivateUser, useRegister } from "@/hooks/auth/useRegister";
import { useRouter } from "next/navigation";

const formSchema = z.object({
	firstName: z.string().min(1, { message: "First name is required." }),
	lastName: z.string().min(1, { message: "Last name is required." }),
	contactNumber: z
		.string()
		.min(10, { message: "Contact number must be at least 10 digits long." }),
	email: z.string().email({ message: "Please enter a valid email address." }),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long." }),
	age: z.string().min(1, { message: "Age is required." }),
	type: z.string().min(1, { message: "Type is required." }),
	gender: z.string().min(1, { message: "Gender is required." }),
	avatar: z.instanceof(File).optional().nullable(),
});

const SignUpForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [avatar, setAvatar] = useState<File | null>(null);
	const [isOtpDialogOpen, setIsOtpDialogOpen] = React.useState(false);
	const [otpValue, setOtpValue] = React.useState("");

	const { mutateAsync: register, isPending: isRegisterLoading } = useRegister();
	const { mutateAsync: verifyOtp, isPending: isVerifyOtpPending } =
		useActivateUser();

	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			contactNumber: "",
			email: "",
			password: "",
			age: "",
			type: "",
			gender: "",
			avatar: undefined,
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		console.log("Sign up attempted with:", values);
		const userData = {
			firstName: values.firstName,
			lastName: values.lastName,
			contactNumber: values.contactNumber,
			email: values.email,
			password: values.password,
			age: values.age,
			type: values.type,
			gender: values.gender,
			avatar: avatar,
		};
		try {
			await register(userData as any);

			toast({
				description:
					"Account created successfully. Please check your email for verification.",
				className: "success-toast",
			});

			form.reset();
			setIsOtpDialogOpen(true);

			router.push("/sign-in");
		} catch (error: any) {
			const message =
				error.response?.data?.message || "Something went wrong during sign up";
			toast({
				description: message,
				className: "error-toast",
			});
		}
	}

	const queryClient = useQueryClient();

	const activationToken = queryClient.getQueryData(["activationToken"]);

	const handleVerifyOtp = async () => {
		try {
			await verifyOtp({
				activation_token: activationToken as string,
				activation_code: otpValue,
			});
			toast({
				title: "Success",
				description: "Account verified successfully",
			});
			setIsOtpDialogOpen(false);
			form.reset();
		} catch (error) {
			toast({
				title: "Error",
				description: "Invalid OTP. Please try again",
				variant: "destructive",
			});
		}
	};

	return (
		<>
			<div className="flex justify-center items-center h-screen  p-4">
				<Card className="w-full max-w-4xl shadow-2xl overflow-hidden">
					<div className="md:flex">
						<div className="md:w-1/2 bg-sign-in-bg p-8 flex flex-col justify-center items-center relative overflow-hidden rounded-l-lg">
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
								<CardTitle className="text-2xl font-bold mb-2">
									Create an Account
								</CardTitle>
								<CardDescription>
									Fill in your details to get started
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Form {...form}>
									<form
										onSubmit={form.handleSubmit(onSubmit)}
										className="space-y-4"
									>
										<div className="grid grid-cols-1 gap-4">
											<div className="grid grid-cols-2 gap-4">
												<FormField
													control={form.control}
													name="firstName"
													render={({ field }) => (
														<FormItem>
															<FormLabel>First Name</FormLabel>
															<FormControl>
																<div className="relative">
																	<Input
																		placeholder="John"
																		{...field}
																		className="pl-10"
																	/>
																	<User
																		className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
																		size={18}
																	/>
																</div>
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
															<FormLabel>Last Name</FormLabel>
															<FormControl>
																<div className="relative">
																	<Input
																		placeholder="Doe"
																		{...field}
																		className="pl-10"
																	/>
																	<User
																		className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
																		size={18}
																	/>
																</div>
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
															<div className="relative">
																<Input
																	placeholder="john.doe@example.com"
																	{...field}
																	className="pl-10"
																/>
																<Mail
																	className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
																	size={18}
																/>
															</div>
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
																	placeholder="••••••••"
																	{...field}
																	className="pl-10 pr-10"
																/>
																<Lock
																	className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
																	size={18}
																/>
																<button
																	type="button"
																	onClick={() => setShowPassword(!showPassword)}
																	className="absolute right-3 top-1/2 transform -translate-y-1/2"
																>
																	{showPassword ? (
																		<EyeOff className="h-5 w-5 text-gray-400" />
																	) : (
																		<Eye className="h-5 w-5 text-gray-400" />
																	)}
																</button>
															</div>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<div className="grid grid-cols-2 gap-4">
												<FormField
													control={form.control}
													name="contactNumber"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Contact Number</FormLabel>
															<FormControl>
																<div className="relative">
																	<Input
																		placeholder="+1234567890"
																		{...field}
																		className="pl-10"
																	/>
																	<Phone
																		className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
																		size={18}
																	/>
																</div>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
												<FormField
													control={form.control}
													name="age"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Age</FormLabel>
															<FormControl>
																<div className="relative">
																	<Input
																		placeholder="25"
																		{...field}
																		className="pl-10"
																	/>
																	<Calendar
																		className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
																		size={18}
																	/>
																</div>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
											</div>
											<div className="grid grid-cols-2 gap-4">
												<FormField
													control={form.control}
													name="type"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Type</FormLabel>
															<Select
																onValueChange={field.onChange}
																defaultValue={field.value}
															>
																<FormControl>
																	<SelectTrigger>
																		<SelectValue placeholder="Select type" />
																	</SelectTrigger>
																</FormControl>
																<SelectContent>
																	<SelectItem value="student">
																		Student
																	</SelectItem>
																	<SelectItem value="teacher">
																		Teacher
																	</SelectItem>
																	<SelectItem value="hobbyist">
																		Hobbyist
																	</SelectItem>
																	<SelectItem value="researcher">
																		Researher
																	</SelectItem>
																</SelectContent>
															</Select>
															<FormMessage />
														</FormItem>
													)}
												/>
												<FormField
													control={form.control}
													name="gender"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Gender</FormLabel>
															<Select
																onValueChange={field.onChange}
																defaultValue={field.value}
															>
																<FormControl>
																	<SelectTrigger>
																		<SelectValue placeholder="Select gender" />
																	</SelectTrigger>
																</FormControl>
																<SelectContent>
																	<SelectItem value="male">Male</SelectItem>
																	<SelectItem value="female">Female</SelectItem>
																	<SelectItem value="other">Other</SelectItem>
																</SelectContent>
															</Select>
															<FormMessage />
														</FormItem>
													)}
												/>
											</div>
											<FormField
												control={form.control}
												name="avatar"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Avatar</FormLabel>
														<FormControl>
															<Input
																type="file"
																accept="image/*"
																onChange={(e) => {
																	if (e.target.files && e.target.files[0]) {
																		setAvatar(e.target.files[0]);
																		field.onChange(e.target.files[0]);
																	}
																}}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>
										<Button
											disabled={isRegisterLoading}
											type="submit"
											className="w-full bg-gradient-to-r from-[#87d9ff] to-[#b5ebff] hover:from-[#b5ebff] hover:to-[#87d9ff] text-white"
										>
											{isRegisterLoading ? "Creating..." : "Create Account"}
										</Button>
									</form>
								</Form>
							</CardContent>
							<CardFooter className="flex justify-center">
								<p className="text-sm text-gray-600">
									Already have an account?{" "}
									<a href="/sign-in" className="text-blue-600 hover:underline">
										Sign in
									</a>
								</p>
							</CardFooter>
						</div>
					</div>
				</Card>
			</div>
			<Dialog
				open={isOtpDialogOpen}
				onOpenChange={setIsOtpDialogOpen}
				modal={true}
			>
				<DialogContent
					className="sm:max-w-md"
					onPointerDownOutside={(e) => e.preventDefault()}
				>
					<DialogHeader>
						<DialogTitle className="text-center">Enter OTP</DialogTitle>
						<DialogDescription className="text-center">
							Enter the OTP sent to your email to activate your account.
						</DialogDescription>
					</DialogHeader>
					<div className="flex flex-col items-center space-y-4">
						<InputOTP
							maxLength={6}
							value={otpValue}
							onChange={setOtpValue}
							className="gap-2 w-full justify-center"
						>
							<InputOTPGroup className="gap-2">
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
								</InputOTPGroup>
								<InputOTPSeparator />
								<InputOTPGroup>
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
								</InputOTPGroup>
							</InputOTPGroup>
						</InputOTP>
						<div className="flex w-full gap-2">
							<Button
								onClick={handleVerifyOtp}
								disabled={otpValue.length !== 4}
								className="w-full"
							>
								{isVerifyOtpPending ? "Verifying OTP..." : "Verify OTP"}
							</Button>
							<Button
								variant="outline"
								onClick={() => setIsOtpDialogOpen(false)}
								className="w-full"
							>
								Cancel
							</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default SignUpForm;
