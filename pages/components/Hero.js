import React from "react";

const Hero = () => {
	return (
		<>
			<section className="overflow-hidden bg-[linear-gradient(135deg,#FFF2E1_0%,#FFF8EE_45%,#F4FBFF_100%)] px-4 pb-16 pt-6 lg:px-8 lg:pt-8">
				<div className="w-full">
					<div className="grid grid-cols-12 items-center lg:gap-8">
						<div className="order-2 col-span-12 mx-auto pt-6 lg:order-2 lg:col-span-6 lg:mr-0 lg:self-end lg:pt-14">
							<img
								src="/assets/img/header-pic.svg"
								className="w-full max-w-[760px] lg:ml-auto"
							/>
						</div>
						<div className="order-1 col-span-12 lg:order-1 lg:col-span-6 lg:my-auto lg:pl-6 xl:pl-12">
							<div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#23BDEE] shadow-sm">
								Modern platform for online learning
							</div>
							<h1 className="mt-5 text-center font-poppins text-4xl font-bold leading-normal text-custom-dark-blue md:mt-8 md:text-5xl lg:px-0 lg:text-start lg:text-[58px] lg:leading-[1.15]">
								<span className="text-custom-orange">
									Build
								</span>{" "}
								a learning experience people actually want to
								finish
							</h1>
							<p className="my-4 px-4 text-center text-[16px] text-[#464646] md:px-24 md:text-xl lg:my-8 lg:px-0 lg:pr-10 lg:text-start lg:text-[22px] lg:leading-9">
								Skilline helps course creators, mentors, and
								education teams build online classes that feel
								structured, interactive, and easy to follow from
								anywhere.
							</p>
							<div className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center md:mt-5 lg:justify-start">
								<button className="rounded-full bg-custom-orange px-6 py-4 font-poppins font-semibold text-white shadow-lg shadow-orange-200 md:px-8 md:text-lg">
									Launch Your Course
								</button>
								<button className="rounded-full bg-white px-6 py-4 font-poppins font-semibold text-custom-dark-blue md:px-8 md:text-lg">
									See Learning Flow
								</button>
							</div>
							<div className="mt-8 grid gap-4 text-center sm:grid-cols-3 lg:text-start">
								<div>
									<p className="text-3xl font-bold text-custom-dark-blue">
										120+
									</p>
									<p className="mt-1 text-sm text-[#696984]">
										Active classes
									</p>
								</div>
								<div>
									<p className="text-3xl font-bold text-custom-dark-blue">
										35k
									</p>
									<p className="mt-1 text-sm text-[#696984]">
										Learners reached
									</p>
								</div>
								<div>
									<p className="text-3xl font-bold text-custom-dark-blue">
										4.9/5
									</p>
									<p className="mt-1 text-sm text-[#696984]">
										Average satisfaction
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
