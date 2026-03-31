"use client";

import React, { useEffect, useState } from "react";

const testimonials = [
	{
		name: "Raka Pratama",
		role: "Junior Frontend Developer",
		quote: "The flow feels clear from the hero section to the final CTA. It works really well for an online learning product.",
	},
	{
		name: "Nadia Putri",
		role: "Course Creator",
		quote: "The visual style feels warm and approachable while still looking professional enough for a serious course platform.",
	},
	{
		name: "Bagas Ramadhan",
		role: "UI Designer",
		quote: "Every section feels intentional. The full page looks more polished and much easier to present as a digital product.",
	},
	{
		name: "Citra Lestari",
		role: "Bootcamp Manager",
		quote: "What I like most is the balance between warmth and clarity. It feels modern without losing credibility.",
	},
];

const Testimonials = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((current) => (current + 1) % testimonials.length);
		}, 4500);

		return () => clearInterval(interval);
	}, []);

	const goToSlide = (index) => {
		setActiveIndex(index);
	};

	const showPrevious = () => {
		setActiveIndex((current) =>
			current === 0 ? testimonials.length - 1 : current - 1
		);
	};

	const showNext = () => {
		setActiveIndex((current) => (current + 1) % testimonials.length);
	};

	return (
		<section className="px-4 py-24">
			<div className="container mx-auto">
				<div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-2xl">
						<p className="text-sm font-semibold uppercase tracking-[0.25em] text-custom-orange">
							Testimonials
						</p>
						<h2 className="mt-4 text-3xl font-bold text-custom-dark-blue md:text-4xl">
							Thousands of learners, mentors, and course creators
							already use our platform to run better online
							classes.
						</h2>
					</div>
					<div className="flex items-center gap-3">
						<button
							type="button"
							onClick={showPrevious}
							className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8EDF8] bg-white text-2xl text-custom-dark-blue shadow-[0_12px_30px_rgba(47,50,125,0.08)] transition hover:-translate-y-0.5"
							aria-label="Show previous testimonial"
						>
							‹
						</button>
						<button
							type="button"
							onClick={showNext}
							className="flex h-12 w-12 items-center justify-center rounded-full bg-custom-orange text-2xl text-white shadow-[0_12px_30px_rgba(244,140,6,0.28)] transition hover:-translate-y-0.5"
							aria-label="Show next testimonial"
						>
							›
						</button>
					</div>
				</div>

				<div className="relative mt-12 overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#ffffff_0%,#fff7ea_52%,#eef9ff_100%)] p-3 shadow-[0_30px_80px_rgba(47,50,125,0.08)]">
					<div
						className="flex transition-transform duration-500 ease-out"
						style={{
							transform: `translateX(-${activeIndex * 100}%)`,
						}}
					>
						{testimonials.map((item) => (
							<div
								key={item.name}
								className="w-full shrink-0 p-4 lg:p-8"
							>
								<div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
									<div className="rounded-[30px] bg-[#1F2251] p-8 text-white">
										<div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-3xl font-bold">
											{item.name.charAt(0)}
										</div>
										<h3 className="mt-8 text-3xl font-semibold">
											{item.name}
										</h3>
										<p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#65DAFF]">
											{item.role}
										</p>
									</div>
									<div className="flex flex-col justify-between rounded-[30px] bg-white p-8 shadow-[0_18px_45px_rgba(47,50,125,0.05)] lg:p-10">
										<div>
											<p className="text-6xl leading-none text-[#D7E8FF]">
												"
											</p>
											<p className="-mt-2 text-lg leading-9 text-[#5B5B76] md:text-[22px]">
												{item.quote}
											</p>
										</div>
										<div className="mt-8 flex items-center justify-between">
											<div>
												<p className="text-lg font-semibold text-custom-dark-blue">
													{item.name}
												</p>
												<p className="text-sm text-[#696984]">
													Verified learner feedback
												</p>
											</div>
											<div className="rounded-full bg-[#FFF2E1] px-4 py-2 text-sm font-semibold text-custom-orange">
												5.0 rating
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="mt-8 flex justify-center gap-3">
					{testimonials.map((item, index) => {
						const isActive = index === activeIndex;

						return (
							<button
								key={item.name}
								type="button"
								onClick={() => goToSlide(index)}
								className={`h-3 rounded-full transition-all duration-300 ${
									isActive
										? "w-12 bg-custom-orange"
										: "w-3 bg-[#D9E3F8]"
								}`}
								aria-label={`Go to testimonial ${index + 1}`}
							></button>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
