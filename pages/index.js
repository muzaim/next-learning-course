import Image from "next/image";
import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AllInOne from "./components/AllInOne";
import WhatIs from "./components/WhatIs";
import CourseHighlights from "./components/CourseHighlights";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ImpactStats from "./components/ImpactStats";
import LearningSteps from "./components/LearningSteps";
import MentorShowcase from "./components/MentorShowcase";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<ImpactStats />
			<AllInOne />
			<CourseHighlights />
			<LearningSteps />
			<WhatIs />
			<MentorShowcase />
			<Experience />
			<Testimonials />
			<FAQ />
			<Newsletter />
			<FinalCTA />
			<Footer />
		</div>
	);
}
