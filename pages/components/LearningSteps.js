import React from "react";

const steps = [
	{
		number: "01",
		title: "Discover your path",
		description:
			"Choose a learning path based on your goal, whether that means starting a new career, upgrading your skills, or building a portfolio.",
	},
	{
		number: "02",
		title: "Join guided sessions",
		description:
			"Learn through short videos, live sessions, and weekly assignments arranged in a clear sequence.",
	},
	{
		number: "03",
		title: "Build real projects",
		description:
			"Complete real projects at each milestone so learning outcomes go beyond theory.",
	},
	{
		number: "04",
		title: "Track and celebrate progress",
		description:
			"A progress dashboard helps learners stay aware of their journey and motivated through completion.",
	},
];

const LearningSteps = () => {
	return (
		<section className="px-4 py-24">
			<div className="container mx-auto">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#23BDEE]">
						Learning Journey
					</p>
					<h2 className="mt-4 text-3xl font-bold text-custom-dark-blue md:text-4xl">
						A clear learning journey keeps the page engaging from the
						first scroll to the final call to action.
					</h2>
					<p className="mt-5 text-base leading-8 text-[#696984] md:text-lg">
						This section is designed to feel less like a list of
						blocks and more like a guided path from curiosity to
						commitment.
					</p>
				</div>

				<div className="mt-14 grid gap-6 lg:grid-cols-2">
					{steps.map((step) => (
						<div
							key={step.number}
							className="group rounded-[30px] border border-[#EEF1FA] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(47,50,125,0.10)]"
						>
							<div className="flex items-center gap-5">
								<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF2E1] text-2xl font-bold text-custom-orange">
									{step.number}
								</div>
								<h3 className="text-2xl font-semibold text-custom-dark-blue">
									{step.title}
								</h3>
							</div>
							<p className="mt-6 text-base leading-8 text-[#696984]">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default LearningSteps;
