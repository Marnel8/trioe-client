import ProjectDetails from "@/components/community/project-details";
import React from "react";

const ProjectPage = async ({
	params,
}: {
	params: Promise<{ projectId: string }>;
}) => {
	const projectId = (await params).projectId;
	return (
		<section>
			<ProjectDetails projectId={projectId} />
		</section>
	);
};

export default ProjectPage;
