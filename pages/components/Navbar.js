import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="w-full px-4 py-8">
			<div className="container mx-auto flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-6 py-4 shadow-[0_20px_45px_rgba(31,34,81,0.06)] backdrop-blur">
				<Link
					href="/"
					className="flex items-center font-poppins text-xl font-bold text-[#113C49]"
				>
					<img src="/assets/img/polygon.svg" width={50} />
					<span className="-ml-8 tracking-wide">Skilline</span>
				</Link>
				<div className="flex items-center gap-10">
					<div className="hidden lg:block">
						<ul className="flex flex-row gap-12 font-poppins text-base text-[#5B5B76]">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Courses</a>
							</li>
							<li>
								<a href="/">Mentors</a>
							</li>
							<li>
								<a href="/">Pricing</a>
							</li>
						</ul>
					</div>
					<div className="flex flex-row gap-4">
						<button className="hidden h-12 w-28 rounded-full border border-[#F3E1C9] bg-[#fff] font-poppins font-semibold text-custom-orange lg:block">
							Login
						</button>
						<button className="hidden h-12 w-32 rounded-full bg-custom-orange font-poppins text-lg font-semibold text-white shadow-lg shadow-orange-200 lg:block">
							Sign Up
						</button>
					</div>
					<div className="rounded-xl bg-custom-orange p-4 lg:hidden"></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
