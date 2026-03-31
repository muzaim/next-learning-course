import React from "react";

const Newsletter = () => {
	return (
		<section className="px-4 py-24">
			<div className="container mx-auto rounded-[40px] bg-[linear-gradient(135deg,#1F2251_0%,#2F327D_55%,#23BDEE_160%)] px-8 py-12 text-white shadow-[0_35px_100px_rgba(31,34,81,0.22)] lg:px-14 lg:py-16">
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
						Stay In The Loop
					</p>
					<h2 className="mt-4 text-3xl font-bold md:text-5xl">
						Get updates on new classes, live sessions, and free learning resources.
					</h2>
					<p className="mt-5 text-base leading-8 text-white/75 md:text-lg">
						A strong subscription section keeps the page feeling
						active while giving visitors a clear way to stay connected.
					</p>
					<div className="mt-8 flex flex-col gap-4 rounded-[28px] bg-white/10 p-4 backdrop-blur md:flex-row">
						<input
							type="email"
							placeholder="Enter your email address"
							className="h-14 flex-1 rounded-full border border-white/10 bg-white px-6 text-base text-slate-900 outline-none"
						/>
						<button className="h-14 rounded-full bg-custom-orange px-8 text-base font-semibold text-white shadow-lg shadow-orange-900/20">
							Subscribe Now
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
