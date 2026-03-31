import React from "react";

const stats = [
	{ value: "18k+", label: "Students learning every month" },
	{ value: "320+", label: "Hands-on lessons across tracks" },
	{ value: "92%", label: "Learners say the flow is easy to follow" },
	{ value: "56", label: "Industry mentors contributing to classes" },
];

const ImpactStats = () => {
	return (
		<section className="px-4 py-12">
			<div className="container mx-auto rounded-[34px] bg-[#0F133D] px-8 py-8 shadow-[0_30px_80px_rgba(15,19,61,0.22)] lg:px-12">
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					{stats.map((item) => (
						<div
							key={item.label}
							className="rounded-[24px] border border-white/10 bg-white/5 p-6 text-center lg:text-left"
						>
							<p className="text-4xl font-bold text-white">{item.value}</p>
							<p className="mt-3 text-sm leading-7 text-white/70">
								{item.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ImpactStats;
