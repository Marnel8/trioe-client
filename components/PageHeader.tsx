import Image from "next/image";
import React from "react";

const PageHeader = ({ title }: { title: string }) => {
	return (
		<div className="relative">
			<h1 className="text-2xl text-center  sm:text-2xl md:text-3xl xl:text-4xl font-roboto-bold relative">
				{title}
			</h1>
		</div>
	);
};

export default PageHeader;
