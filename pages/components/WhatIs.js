import React from "react";

const cards = [
	{
		title: "For instructors",
		description:
			"Create lessons, host live classes, and manage student progress in one simple workflow.",
		button: "Start a class today",
		image: "/assets/img/group2.svg",
		buttonClass:
			"border border-white bg-white/10 text-white backdrop-blur-sm",
	},
	{
		title: "For students",
		description:
			"Join classes, follow structured lessons, and stay motivated with a clear learning path.",
		button: "Enter a class today",
		image: "/assets/img/group1.svg",
		buttonClass: "bg-[#23BDEE] text-white",
	},
];

const WhatIs = () => {
	return (
		<section className="px-4 pb-24 pt-[140px]">
			<div className="container mx-auto">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="mb-2 font-poppins text-2xl font-bold text-custom-dark-blue md:text-3xl lg:text-4xl">
						What is <span className="text-custom-orange">Skilline?</span>
					</h1>
					<p className="mx-auto mt-5 max-w-3xl px-5 font-poppins text-[#696984] md:text-lg lg:text-2xl">
						Skilline is a modern online learning platform designed to
						support both instructors and students with a clean,
						friendly, and easy-to-use experience.
					</p>
				</div>

				<div className="mt-12 grid gap-5 md:grid-cols-3">
					<div className="rounded-[28px] bg-white p-6 text-center shadow-[0_18px_45px_rgba(47,50,125,0.06)]">
						<p className="text-3xl font-bold text-custom-dark-blue">120+</p>
						<p className="mt-2 text-sm text-[#696984]">Courses available</p>
					</div>
					<div className="rounded-[28px] bg-white p-6 text-center shadow-[0_18px_45px_rgba(47,50,125,0.06)]">
						<p className="text-3xl font-bold text-custom-dark-blue">35k+</p>
						<p className="mt-2 text-sm text-[#696984]">Active learners</p>
					</div>
					<div className="rounded-[28px] bg-white p-6 text-center shadow-[0_18px_45px_rgba(47,50,125,0.06)]">
						<p className="text-3xl font-bold text-custom-dark-blue">4.9/5</p>
						<p className="mt-2 text-sm text-[#696984]">Average satisfaction</p>
					</div>
				</div>

				<div className="mt-12 grid gap-6 lg:grid-cols-2">
					{cards.map((card) => (
						<div
							key={card.title}
							className="relative overflow-hidden rounded-[32px] shadow-[0_24px_60px_rgba(47,50,125,0.1)]"
						>
							<img src={card.image} className="h-full w-full object-cover" />
							<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,24,62,0.06)_0%,rgba(20,24,62,0.62)_100%)]"></div>
							<div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
								<div className="rounded-[28px] bg-white/10 px-6 py-6 backdrop-blur-[2px]">
									<h2 className="text-center font-poppins text-[30px] font-semibold uppercase text-white">
										{card.title}
									</h2>
									<p className="mx-auto mt-4 max-w-md text-center text-sm leading-7 text-white/85 md:text-base">
										{card.description}
									</p>
									<button
										className={`mx-auto mt-6 block rounded-full px-8 py-4 font-poppins text-base font-semibold ${card.buttonClass}`}
									>
										{card.button}
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhatIs;
