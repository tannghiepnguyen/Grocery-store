import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ sidebar, setSidebar }) => {
	return (
		<div>
			<div data-aos="fade" className="container">
				<div className="flex justify-between items-center">
					<h1 className="text-4xl font-bold uppercase">
						Orange <span className="font-normal text-2xl">Mint</span>
					</h1>
					<ul className="lg:flex hidden space-x-4 text-xl">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Where to find</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
					<div onClick={() => setSidebar(!sidebar)}>
						<GiHamburgerMenu className="text-3xl cursor-pointer" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
