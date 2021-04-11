import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import LandingImage1 from "../assets/LandingPage1.png";
const HomePage = () => {
	return (
		<div className="home-page">
			<Carousel className="home-page-carousel">
				<div className="carousel-item">
					<img src={LandingImage1} alt="TOSIA" />
					<button>
						<Link to="/login"> ENTER </Link>
					</button>
				</div>
				<div className="carousel-item">
					<img src={LandingImage1} alt="TOSIA" />
					<button>
						<Link to="/login"> ENTER </Link>
					</button>
				</div>
				<div className="carousel-item">
					<img src={LandingImage1} alt="TOSIA" />
					<button>
						<Link to="/login"> ENTER </Link>
					</button>
				</div>
			</Carousel>
		</div>
	);
};

export default HomePage;
