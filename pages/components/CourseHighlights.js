import React from "react";

const highlights = [
	{
		title: "Product Design Sprint",
		description:
			"Learn product thinking, wireframing, and prototyping through real-world briefs.",
		tag: "Design",
		stats: "12 lessons",
	},
	{
		title: "Frontend Career Path",
		description:
			"Follow a practical roadmap through React, Next.js, and portfolio-ready projects.",
		tag: "Development",
		stats: "18 lessons",
	},
	{
		title: "Data & Business Basics",
		description:
			"Master Excel, dashboards, and data storytelling for everyday business needs.",
		tag: "Business",
		stats: "10 lessons",
	},
];

const CourseHighlights = () => {
	return (
		<section className="px-4 py-24">
			<div className="container mx-auto">
				<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-2xl">
						<p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#23BDEE]">
							Popular Tracks
						</p>
						<h2 className="mt-4 text-3xl font-bold text-custom-dark-blue md:text-4xl">
							Practical learning paths built for real progress, not just theory.
						</h2>
					</div>
					<p className="max-w-xl text-base leading-8 text-[#696984] md:text-lg">
						Each track is designed to guide learners from the basics
						to portfolio-worthy outcomes with weekly milestones and
						hands-on mini projects.
					</p>
				</div>

				<div className="mt-12 grid gap-6 lg:grid-cols-3">
					{highlights.map((item) => (
						<div
							key={item.title}
							className="rounded-[28px] border border-white/60 bg-white p-8 shadow-[0_30px_80px_rgba(47,50,125,0.08)]"
						>
							<div className="flex items-center justify-between">
								<span className="rounded-full bg-[#FFF2E1] px-4 py-2 text-sm font-semibold text-custom-orange">
									{item.tag}
								</span>
								<span className="text-sm text-[#696984]">{item.stats}</span>
							</div>
							<h3 className="mt-8 text-2xl font-semibold text-custom-dark-blue">
								{item.title}
							</h3>
							<p className="mt-4 text-base leading-8 text-[#696984]">
								{item.description}
							</p>
							<div className="mt-8 h-2 rounded-full bg-[#EEF4FF]">
								<div className="h-2 w-3/4 rounded-full bg-[#23BDEE]"></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CourseHighlights;
