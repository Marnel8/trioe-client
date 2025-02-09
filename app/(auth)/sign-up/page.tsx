import SignUpForm from "@/components/auth/sign-up-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Sign Up",
	description:
		"Join TRIOE and start your journey into the world of Internet of Everything. ",
	openGraph: {
		title: "Join TRIOE - Sign Up Now",
		description: "Create your TRIOE account today. ",
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
