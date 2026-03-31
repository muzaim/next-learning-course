import React from "react";

const Footer = () => {
	return (
		<footer className="mt-12 border-t border-[#E8EDF8] bg-[linear-gradient(180deg,#FFF9F1_0%,#FFF3E2_100%)] px-4 pt-14">
			<div className="container mx-auto">
				<div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
					<div className="max-w-md">
						<div className="flex items-center gap-3">
							<img src="/assets/img/polygon.svg" width={34} />
							<p className="text-2xl font-bold text-custom-dark-blue">
								Skilline
							</p>
						</div>
						<p className="mt-3 text-sm leading-7 text-[#696984]">
							A simple online learning platform template for courses,
							mentors, and modern digital classes.
						</p>
						<div className="mt-5 flex gap-3">
							<span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-custom-orange shadow-sm">
								Online Courses
							</span>
							<span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#23BDEE] shadow-sm">
								Live Classes
							</span>
						</div>
					</div>
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-custom-dark-blue">
								Product
							</p>
							<div className="mt-4 flex flex-col gap-3 text-sm text-[#696984]">
								<a href="/">Overview</a>
								<a href="/">Courses</a>
								<a href="/">Mentors</a>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-custom-dark-blue">
								Company
							</p>
							<div className="mt-4 flex flex-col gap-3 text-sm text-[#696984]">
								<a href="/">Pricing</a>
								<a href="/">Contact</a>
								<a href="/">Support</a>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-custom-dark-blue">
								Get Updates
							</p>
							<p className="mt-4 max-w-xs text-sm leading-7 text-[#696984]">
								Receive course news, platform updates, and new
								learning opportunities.
							</p>
						</div>
					</div>
				</div>
				<div className="mt-10 flex flex-col gap-4 border-t border-[#E8EDF8] pb-8 pt-6 text-sm text-[#8A8FA7] lg:flex-row lg:items-center lg:justify-between">
					<p>© 2026 Skilline. All rights reserved.</p>
					<div className="flex flex-wrap gap-5">
						<a href="/">Privacy Policy</a>
						<a href="/">Terms of Service</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
