import React from "react";

const FinalCTA = () => {
	return (
		<section className="px-4 pb-10 pt-24">
			<div className="container mx-auto overflow-hidden rounded-[40px] bg-[linear-gradient(135deg,#FFF2E1_0%,#ffffff_35%,#EAF7FF_100%)] px-8 py-12 shadow-[0_35px_90px_rgba(47,50,125,0.12)] lg:px-14 lg:py-16">
				<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
					<div className="max-w-2xl">
						<p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#23BDEE]">
							Ready To Launch
						</p>
						<h2 className="mt-4 text-3xl font-bold text-custom-dark-blue md:text-5xl">
							Start shaping your courses, mentors, and pricing experience.
						</h2>
						<p className="mt-5 text-base leading-8 text-[#696984] md:text-lg">
							The structure is already strong enough to support a
							more polished and production-ready learning platform.
						</p>
					</div>
					<div className="flex flex-col gap-4 sm:flex-row">
						<button className="rounded-full bg-custom-orange px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-200">
							Start Building
						</button>
						<button className="rounded-full border border-[#D9E3F8] bg-white px-8 py-4 text-lg font-semibold text-custom-dark-blue">
							View Demo Class
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FinalCTA;
