"use client";

import React, { useState } from "react";

const items = [
	{
		question: "Is this template suitable for paid courses?",
		answer:
			"Yes. It works well as a starting point for paid courses and can be extended with pricing, checkout, and course detail pages.",
	},
	{
		question: "Can it work for personal mentors or bootcamps?",
		answer:
			"Absolutely. The structure is flexible enough for solo mentors, cohort-based programs, and larger online academies.",
	},
	{
		question: "Is the layout already mobile-friendly?",
		answer:
			"Yes. The main sections are already responsive with Tailwind, making this a solid foundation for further iteration.",
	},
	{
		question: "Can I add dedicated course detail pages later?",
		answer:
			"Definitely. This landing page already sets the visual direction, so expanding into course pages, mentor profiles, and pricing is straightforward.",
	},
];

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(0);

	return (
		<section className="px-4 py-24">
			<div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#23BDEE]">
						FAQ
					</p>
					<h2 className="mt-4 text-3xl font-bold text-custom-dark-blue md:text-4xl">
						Everything people usually ask before joining an online class.
					</h2>
					<p className="mt-5 text-base leading-8 text-[#696984] md:text-lg">
						Find quick answers about the platform, course setup, and
						how Skilline can support different learning formats.
					</p>
				</div>
				<div className="space-y-5">
					{items.map((item, index) => {
						const isOpen = openIndex === index;

						return (
							<div
								key={item.question}
								className={`overflow-hidden rounded-[28px] border transition-all duration-300 ${
									isOpen
										? "border-[#CFE8FF] bg-[linear-gradient(135deg,#ffffff_0%,#f8fcff_60%,#fff6ea_100%)] shadow-[0_24px_60px_rgba(35,189,238,0.14)]"
										: "border-[#EEF1FA] bg-white shadow-[0_18px_45px_rgba(47,50,125,0.06)]"
								}`}
							>
								<button
									type="button"
									onClick={() =>
										setOpenIndex(isOpen ? -1 : index)
									}
									className="flex w-full items-center justify-between gap-5 px-7 py-6 text-left"
								>
									<div className="flex items-center gap-4">
										<div
											className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold transition-colors ${
												isOpen
													? "bg-[#23BDEE] text-white"
													: "bg-[#FFF2E1] text-custom-orange"
											}`}
										>
											0{index + 1}
										</div>
										<h3 className="text-lg font-semibold text-custom-dark-blue md:text-xl">
											{item.question}
										</h3>
									</div>
									<div
										className={`flex h-10 w-10 items-center justify-center rounded-full border text-xl transition-all ${
											isOpen
												? "rotate-45 border-[#23BDEE] bg-[#23BDEE] text-white"
												: "border-[#E6ECF8] bg-white text-custom-dark-blue"
										}`}
									>
										+
									</div>
								</button>
								<div
									className={`grid transition-all duration-300 ease-out ${
										isOpen
											? "grid-rows-[1fr] opacity-100"
											: "grid-rows-[0fr] opacity-70"
									}`}
								>
									<div className="overflow-hidden">
										<p className="px-7 pb-7 text-base leading-8 text-[#696984]">
											{item.answer}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
