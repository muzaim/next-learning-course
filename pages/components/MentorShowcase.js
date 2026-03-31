import React from "react";

const mentors = [
	{
		name: "Alya Nurfadila",
		role: "Senior Product Designer",
		focus: "UX research, design systems, rapid prototyping",
	},
	{
		name: "Dimas Mahendra",
		role: "Frontend Engineer",
		focus: "React architecture, component patterns, performance",
	},
	{
		name: "Fikri Aditya",
		role: "Business Analyst",
		focus: "Excel automation, dashboards, business storytelling",
	},
];

const MentorShowcase = () => {
	return (
		<section className="px-4 py-24">
			<div className="container mx-auto rounded-[38px] bg-[linear-gradient(140deg,#FFFFFF_0%,#FFF7EA_55%,#EDF8FF_100%)] px-8 py-12 shadow-[0_28px_70px_rgba(47,50,125,0.08)] lg:px-12">
				<div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-2xl">
						<p className="text-sm font-semibold uppercase tracking-[0.25em] text-custom-orange">
							Mentor Spotlight
						</p>
						<h2 className="mt-4 text-3xl font-bold text-custom-dark-blue md:text-4xl">
							Show the people behind the lessons and the expertise
							they bring to every class.
						</h2>
					</div>
					<p className="max-w-xl text-base leading-8 text-[#696984] md:text-lg">
						This section builds trust by helping visitors understand
						who is teaching and why their experience matters.
					</p>
				</div>

				<div className="mt-12 grid gap-6 lg:grid-cols-3">
					{mentors.map((mentor, index) => (
						<div
							key={mentor.name}
							className="rounded-[30px] border border-white/70 bg-white p-7 shadow-[0_18px_50px_rgba(47,50,125,0.08)]"
						>
							<div className="flex items-center gap-4">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF4FF] text-2xl font-bold text-[#23BDEE]">
									{index + 1}
								</div>
								<div>
									<h3 className="text-xl font-semibold text-custom-dark-blue">
										{mentor.name}
									</h3>
									<p className="text-sm text-[#696984]">{mentor.role}</p>
								</div>
							</div>
							<p className="mt-6 rounded-2xl bg-[#F8FAFF] px-5 py-4 text-sm leading-7 text-[#5B5B76]">
								{mentor.focus}
							</p>
							<div className="mt-6 flex items-center justify-between text-sm text-[#696984]">
								<span>Rated 4.9 by learners</span>
								<span>1,200+ students</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MentorShowcase;
