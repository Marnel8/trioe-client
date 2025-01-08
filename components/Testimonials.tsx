import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import PageHeader from "./PageHeader";

const reviews = [
	{
		name: "Vhal Reyes",
		username: "@vhal.reyes",
		body: "Very useful in my capstone project",
		img: "https://avatar.vercel.sh/jack",
	},
	{
		name: "John Paul Heje",
		username: "@JP.heje",
		body: "Truly amazing. Very easy to use.",
		img: "https://avatar.vercel.sh/jill",
	},
	{
		name: "JS David",
		username: "@js.david",
		body: "Has a lot of potential.",
		img: "https://avatar.vercel.sh/john",
	},
	{
		name: "RL.Velasquez",
		username: "@LeeRobert",
		body: "I will keep on subscribing. Contents are always update. Very nice.",
		img: "https://avatar.vercel.sh/jane",
	},
	{
		name: "JD Lansang",
		username: "@JayD",
		body: "Coming from an IT background, this makes learning electronics really easy",
		img: "https://avatar.vercel.sh/jenny",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	img,
	name,
	username,
	body,
}: {
	img: string;
	name: string;
	username: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				"relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
				// light styles
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<img className="rounded-full" width="32" height="32" alt="" src={img} />
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>
					<p className="text-xs font-medium dark:text-white/40">{username}</p>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{body}</blockquote>
		</figure>
	);
};

export function Testimonials() {
	return (
		<section className="py-5">
			<PageHeader
				title="TESTIMONIALS"
				description="Hear from users who transformed learning with TRIOE's innovative resources."
			/>
			<div className="relative flex w-full flex-col items-center pt-5 overflow-hidden rounded-lg ">
				<Marquee pauseOnHover className="[--duration:20s]">
					{firstRow.map((review) => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:20s]">
					{secondRow.map((review) => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
			</div>
		</section>
	);
}
