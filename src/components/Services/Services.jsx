import React from "react";
import Fruit1 from "../../assets/fruits/fruits1.webp";
import Fruit2 from "../../assets/fruits/fruits2.png";
import Fruit3 from "../../assets/fruits/fruits3.png";

const ServicesData = [
	{
		id: 1,
		image: Fruit1,
		title: "Fresh Fruits",
		subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		aosDelay: 300,
	},
	{
		id: 2,
		image: Fruit2,
		title: "Fresh Fruits",
		subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		aosDelay: 500,
	},
	{
		id: 3,
		image: Fruit3,
		title: "Orange Juice",
		subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		aosDelay: 700,
	},
];

const Services = () => {
	return (
		<div className="container my-16 space-y-4">
			<div className="text-center max-w-lg mx-auto">
				<h1 data-aos="fade-up" className="text-3xl font-bold text-dark">
					Fresh and <span className="text-primary">Tasty Fruits</span>
				</h1>
				<p
					data-aos="fade-up"
					data-aos-delay="300"
					className="text-sm opacity-50"
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, qui
					recusandae ad repellat laudantium velit deserunt facilis, placeat
					ipsam earum vitae pariatur dolore ea ab repellendus nisi temporibus
					iste quaerat!
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{ServicesData.map((service) => (
					<div
						key={service.id}
						data-aos="fade-up"
						data-aos-delay={service.aosDelay}
						className="p-4 text-center space-y-6"
					>
						<img
							src={service.image}
							alt=""
							className="max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2"
						/>
						<div className="space-y-2">
							<h1 className="text-2xl font-bold text-primary">
								{service.title}
							</h1>
							<p className="text-dark">{service.subtitle}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
