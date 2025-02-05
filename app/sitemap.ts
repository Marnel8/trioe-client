import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: "https://trioe.dev",
			lastModified: new Date(),
		},
		{
			url: "https://trioe.dev/sign-up",
			lastModified: new Date(),
		},
		{
			url: "https://trioe.dev/sign-in",
			lastModified: new Date(),
		},
	];
}
