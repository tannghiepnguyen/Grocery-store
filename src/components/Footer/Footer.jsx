import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white">
			<div className="container">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					<div data-aos="fade-up" className="space-y-6">
						<h1 className="text-4xl font-bold">Orange Mint</h1>
						<p className="text-sm max-w-[300px]">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
							quibusdam accusamus esse tempore voluptas beatae qui error,
							dolorum rerum numquam quos aut repellat, nesciunt fugit eveniet
							cum nobis obcaecati. Earum.
						</p>
					</div>
					<div data-aos="fade-up" data-aos-delay="300" className="space-y-6">
						<h1 className="text-4xl font-bold">Quick Links</h1>
						<div className="grid grid-cols-2 gap-3">
							<div>
								<ul className="space-y-2">
									<li>
										<a href="Home">Home</a>
									</li>
									<li>
										<a href="About">About</a>
									</li>
									<li>
										<a href="Contact">Contact</a>
									</li>
									<li>
										<a href="Search Fruits">Search Fruits</a>
									</li>
									<li>
										<a href="Privacy Policy">Privacy Policy</a>
									</li>
								</ul>
							</div>
							<div>
								<ul className="space-y-2">
									<li>
										<a href="Home">Home</a>
									</li>
									<li>
										<a href="About">About</a>
									</li>
									<li>
										<a href="Contact">Contact</a>
									</li>
									<li>
										<a href="Search Fruits">Search Fruits</a>
									</li>
									<li>
										<a href="Privacy Policy">Privacy Policy</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div data-aos="fade-up" data-aos-delay="500">
						<h1 className="text-4xl font-bold">Follow us</h1>
						<div>
							<p>+1 (123) 456-7890</p>
							<p>Novida, Uttar Pradesh</p>
						</div>
						<div className="flex items-center gap-3">
							<FaFacebook className="text-3xl hover:scale-105 duration-300" />
							<FaInstagram className="text-3xl hover:scale-105 duration-300" />
							<FaTelegram className="text-3xl hover:scale-105 duration-300" />
							<FaGoogle className="text-3xl hover:scale-105 duration-300" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
