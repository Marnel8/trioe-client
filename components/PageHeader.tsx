import React from "react";

const PageHeader = ({
	title,
	description,
}: {
	title: string;
	description?: string;
}) => {
	return (
		<div className="relative space-y-5 py-8 flex flex-col items-center justify-center">
			<h2 className="text-2xl text-center  sm:text-3xl md:text-4xl xl:text-5xl font-geist font-bold  relative">
				{title}
			</h2>
			<p className="text-center max-w-[400px] lg:max-w-[600px]">
				{description}
			</p>
		</div>
	);
};

export default PageHeader;
