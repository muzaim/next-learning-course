import React from "react";

const cards = [
	{
		image: "/assets/img/excel.svg",
		title: "Course Management",
		description:
			"Organize lessons, assignments, quizzes, and feedback in one clear workflow.",
	},
	{
		image: "/assets/img/calendar.svg",
		title: "Live Class Scheduling",
		description:
			"Schedule live classes, mentoring sessions, and reminders without overwhelming learners.",
	},
	{
		image: "/assets/img/people.svg",
		title: "Community Support",
		description:
			"Create active learner discussions that keep every class engaging and collaborative.",
	},
];

const AllInOne = () => {
	return (
		<section className="px-4 py-8">
			<div>
				<h1 className="mb-2 text-center font-poppins text-xl font-bold text-custom-dark-blue md:text-2xl lg:mt-20 lg:text-4xl">
					All-In-One{" "}
					<span className="text-custom-orange">Cloud Software.</span>
				</h1>
				<p className="mx-auto px-5 text-center font-poppins text-[#696984] md:mb-20 md:w-[32rem] md:text-lg lg:mt-5 lg:w-[45rem] lg:text-2xl">
					Skilline brings together the core tools a modern learning
					platform needs, from course management to a more personal
					student experience.
				</p>
			</div>
			<div className="mt-10 grid items-center justify-center gap-20 lg:container lg:mx-auto lg:mt-[103px] lg:grid-cols-3 lg:gap-8">
				{cards.map((card) => (
					<div
						key={card.title}
						className="w-[23rem] rounded-[30px] border border-[#F1F5FD] bg-white pb-10 text-center shadow-[0_28px_60px_rgba(47,50,125,0.08)] lg:w-auto"
					>
						<img
							src={card.image}
							className="mx-auto -mt-[54px] h-32 md:-mt-[62px] md:h-36 lg:-mt-[72px] lg:h-40"
						/>
						<h1 className="font-poppins text-lg font-semibold leading-relaxed text-custom-dark-blue md:text-xl lg:text-2xl">
							{card.title}
						</h1>
						<p className="mt-3 px-5 pb-5 font-poppins text-[#696984] md:text-lg lg:px-14 lg:text-xl">
							{card.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default AllInOne;
