import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import AppBanner from "./components/AppBanner/AppBanner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy";

const App = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			delay: 100,
			easing: "ease-in-cubic",
		});
	});
	return (
		<main className="overflow-x-hidden">
			<Hero />
			<Services />
			<WhereToBuy />
			<AppBanner />
			<Footer />
		</main>
	);
};

export default App;
