import React from "react";
import PageHeader from "./PageHeader";
import TeamCard from "./TeamCard";

const TheTeam = () => {
	return (
		<section className="py-5">
			<PageHeader
				title="MEET THE TEAM"
				description="Get to know the brilliant minds driving TRIOE’s vision forward."
			/>
			<div className="flex flex-wrap justify-center   gap-4 py-5 items-center">
				<TeamCard />
			</div>
		</section>
	);
};

export default TheTeam;
