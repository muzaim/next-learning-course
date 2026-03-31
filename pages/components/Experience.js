import React from "react";

const points = [
	"A mentor-friendly dashboard for lessons, quizzes, and live discussions.",
	"Flexible learning with progress tracking that keeps students moving forward.",
	"A project-based approach that makes every lesson feel practical and relevant.",
];

const Experience = () => {
	return (
		<section className="px-4 py-24">
			<div className="container mx-auto grid gap-10 overflow-hidden rounded-[36px] bg-[#1F2251] px-8 py-12 text-white lg:grid-cols-2 lg:px-14 lg:py-16">
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#65DAFF]">
						Learning Experience
					</p>
					<h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
						Learning feels more focused when the experience follows
						the logic of a well-designed digital product.
					</h2>
					<p className="mt-6 max-w-xl text-base leading-8 text-white/75 md:text-lg">
						From onboarding to course completion, every touchpoint is
						designed to support clarity, momentum, and motivation.
					</p>
					<div className="mt-8 space-y-4">
						{points.map((point) => (
							<div
								key={point}
								className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/85"
							>
								{point}
							</div>
						))}
					</div>
				</div>
				<div className="grid gap-5 md:grid-cols-2 md:items-stretch">
					<div className="flex h-full flex-col rounded-[28px] bg-white p-6 text-[#1F2251] shadow-xl">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#23BDEE]">
							Completion Rate
						</p>
						<p className="mt-5 text-5xl font-bold">87%</p>
						<p className="mt-4 text-base leading-7 text-slate-500">
							Learners complete more lessons when the content is
							broken into short, focused sessions.
						</p>
					</div>
					<div className="flex h-full flex-col rounded-[28px] bg-[#2C327C] p-6 text-white shadow-xl">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F48C06]">
							Live Sessions
						</p>
						<p className="mt-5 text-5xl font-bold">24+</p>
						<p className="mt-4 text-base leading-7 text-white/75">
							Perfect for cohort-based classes, webinars, and weekly
							office hours.
						</p>
					</div>
					<div className="flex h-full flex-col rounded-[28px] bg-[#FFF2E1] p-6 text-[#1F2251] shadow-xl">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-custom-orange">
							Mentors
						</p>
						<p className="mt-5 text-5xl font-bold">40+</p>
						<p className="mt-4 text-base leading-7 text-slate-600">
							Built for in-house mentors, independent creators, and
							learning teams inside growing companies.
						</p>
					</div>
					<div className="flex h-full flex-col rounded-[28px] border border-white/10 bg-white/5 p-6 text-white shadow-xl">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#65DAFF]">
							Student Mood
						</p>
						<p className="mt-5 text-5xl font-bold">4.9</p>
						<p className="mt-4 text-base leading-7 text-white/75">
							The interface stays clear, warm, and easy to use on
							both mobile and desktop.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
