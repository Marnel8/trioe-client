import SignInForm from "@/components/auth/sign-in-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Sign In",
	description:
		"Sign in to your TRIOE account to access IoE development resources, community features, and personalized learning paths.",
	openGraph: {
		title: "Sign In to TRIOE",
		description:
			"Access your TRIOE account and dive into the world of Internet of Everything.",
	},
};

const SignInPage = () => {
	return (
		<section>
			<SignInForm />
		</section>
	);
};

export default SignInPage;
