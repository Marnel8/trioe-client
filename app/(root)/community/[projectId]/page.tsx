import ProjectDetails from "@/components/community/project-details";
import { useGetProjectById } from "@/hooks/community/useGetProjectById";
import { getImageUrl } from "@/utils/imageUtils";
import React from "react";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ projectId: string }>;
}) {
	const projectId = (await params).projectId;

	const { data: projectData, isPending: isProjectDetailsPending } =
		useGetProjectById(projectId);

	if (!projectData) {
		return;
	}

	return {
		title: projectData.project.title,
		description: projectData?.project?.description,
		openGraph: {
			title: projectData.project.title,
			type: "article",
			locale: "en_US",
			url: `https://trioe.dev/actuators/${projectData}`,
			siteName: "TRIOE",
			images: [
				{
					url: getImageUrl(projectData?.project?.instructions[0].imagePath),
				},
			],
		},
	};
}

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
