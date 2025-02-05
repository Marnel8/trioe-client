import SignUpForm from "@/components/auth/sign-up-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Sign Up",
	description:
		"Join TRIOE and start your journey into the world of Internet of Everything. Create your account to access IoE development resources, community features, and personalized learning paths.",
	openGraph: {
		title: "Join TRIOE - Sign Up Now",
		description:
			"Create your TRIOE account today. Gain access to cutting-edge IoE resources, connect with a community of innovators, and embark on personalized learning experiences in Internet of Everything technologies.",
	},
};

const SignUpPage = () => {
	return (
		<section className="min-h-screen  py-10">
			<SignUpForm />
		</section>
	);
};

export default SignUpPage;
