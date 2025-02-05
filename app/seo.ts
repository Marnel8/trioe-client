import { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL("https://trioe.dev/"),
	title: {
		default: "TRIOE | Tinkering Resource for Internet of Everything",
		template: "%s | TRIOE",
	},
	description:
		"Discover comprehensive resources, tutorials, and tools for Internet of Everything (IoE) tinkering and development.",
	keywords: [
		"Internet of Everything",
		"IoE",
		"IoT",
		"connected devices",
		"smart systems",
		"automation",
		"tinkering",
		"development resources",
		"tutorials",
	],
	authors: [
		{
			name: "Batangas State University - TNEU",
		},
		{
			name: "TRIOE Team",
		},
	],
	creator: "BatStateU DevOps",
	publisher: "TRIOE",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://trioe.dev",
		title: "TRIOE | Tinkering Resource for Internet of Everything",
		description:
			"Comprehensive resources and tutorials for Internet of Everything (IoE) development and tinkering.",
		siteName: "TRIOE",
		images: [
			{
				url: "/opengraph-image.jpg",
				width: 1200,
				height: 630,
				alt: "TRIOE - Internet of Everything Resources",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "TRIOE | IoE Resources",
		description:
			"Your go-to resource for Internet of Everything development and tinkering.",
		creator: "@trioe",
		images: ["/twitter-image.jpg"],
	},
	verification: {
		google:
			"google-site-verification=tmhxI0YjtP2-LsG2mhZ-wECmem6ZZIgFd3_pxeG3PCo", // Replace with your actual verification code
	},
	category: "technology",
	alternates: {
		canonical: "https://trioe.dev",
	},
};

export const schemaOrg = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "TRIOE",
	alternateName: "Tinkering Resource for Internet of Everything",
	url: "https://trioe.dev",
	description:
		"Discover comprehensive resources, tutorials, and tools for Internet of Everything (IoE) tinkering and development.",
	publisher: {
		"@type": "Organization",
		name: "Batangas State University - TNEU",
		logo: {
			"@type": "ImageObject",
			url: "https://trioe.dev/images/TRIOE_LOGO.png",
		},
	},
	author: {
		"@type": "Organization",
		name: "TRIOE Team",
	},
	about: {
		"@type": "Thing",
		name: "Internet of Everything",
		description: "Resources and tutorials for IoE development",
	},
	keywords:
		"Internet of Everything, IoE, IoT, connected devices, smart systems, automation, tinkering, development resources, tutorials",
	inLanguage: "en-US",
	educationalLevel: "Intermediate",
	audience: {
		"@type": "Audience",
		audienceType: "Developers and IoE enthusiasts",
	},
};

// Helper function to generate page-specific metadata
export const generatePageMetadata = ({
	title,
	description,
	path = "",
	imageUrl = "/og-image.jpg",
}: {
	title: string;
	description: string;
	path?: string;
	imageUrl?: string;
}): Metadata => {
	const url = `https://trioe.dev${path}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			url,
			images: [
				{
					url: imageUrl,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			title,
			description,
			images: [imageUrl],
		},
		alternates: {
			canonical: url,
		},
	};
};

export const generateArticleSchema = ({
	title,
	description,
	path,
	datePublished,
	dateModified,
	author,
	imageUrl = "/og-image.jpg",
}: {
	title: string;
	description: string;
	path: string;
	datePublished: string;
	dateModified: string;
	author: string;
	imageUrl?: string;
}) => ({
	"@context": "https://schema.org",
	"@type": "Article",
	headline: title,
	description,
	image: imageUrl,
	datePublished,
	dateModified,
	author: {
		"@type": "Person",
		name: author,
	},
	publisher: {
		"@type": "Organization",
		name: "TRIOE",
		logo: {
			"@type": "ImageObject",
			url: "https://trioe.dev/images/TRIOE_LOGO.png",
		},
	},
	mainEntityOfPage: {
		"@type": "WebPage",
		"@id": `https://trioe.dev${path}`,
	},
});
