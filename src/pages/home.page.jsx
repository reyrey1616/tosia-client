import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import Image1 from "../assets/2010.png";
import Image2 from "../assets/2011.png";
import Image3 from "../assets/20111.png";
import Image4 from "../assets/2012.png";
import Image5 from "../assets/2013.png";
import Image6 from "../assets/2014.png";
import Image7 from "../assets/2015.png";
import Image8 from "../assets/2016.png";
import Image9 from "../assets/2017.png";
import Image10 from "../assets/2018.png";
import Image11 from "../assets/2019.png";
import Image12 from "../assets/2020.png";

const HomePage = () => {
	return (
		<div className="home-page">
			<Carousel className="home-page-carousel">
				<div className="carousel-item">
					<img src={Image1} alt="TOSIA" />
					<button>
						<Link to="/login"> ENTER </Link>
					</button>
				</div>
				<div className="carousel-item">
					<img src={Image2} alt="TOSIA" />
					<button>
						<Link to="/login"> ENTER </Link>
					</button>
				</div>
				<div className="carousel-item">
					<img src={Image3} alt="TOSIA" />
					<button>
						<Link to="/login"> ENTER </Link>
					</button>
				</div>
				<div className="carousel-item">
					<img src={Image4} alt="TOSIA" />
					<button>
						<Link to="/login"> ENTER </Link>
					</button>
				</div>
				<div className="carousel-item">
					<img src={Image5} alt="TOSIA" />
					<button>
						<Link to="/login"> ENTER </Link>
					</button>
				</div>
				<div className="carousel-item">
					<img src={Image6} alt="TOSIA" />
					<button>
						<Link to="/login"> ENTER </Link>
					</button>
				</div>
				<div className="carousel-item">
					<img src={Image7} alt="TOSIA" />
					<button>
						<Link to="/login"> ENTER </Link>
					</button>
				</div>
				<div className="carousel-item">
					<img src={Image8} alt="TOSIA" />
					<button>
						<Link to="/login"> ENTER </Link>
					</button>
				</div>
				<div className="carousel-item">
					<img src={Image9} alt="TOSIA" />
					<button>
						<Link to="/login"> ENTER </Link>
					</button>
				</div>
				<div className="carousel-item">
					<img src={Image10} alt="TOSIA" />
					<button>
						<Link to="/login"> ENTER </Link>
					</button>
				</div>
				<div className="carousel-item">
					<img src={Image11} alt="TOSIA" />
					<button>
						<Link to="/login"> ENTER </Link>
					</button>
				</div>
				<div className="carousel-item">
					<img src={Image12} alt="TOSIA" />
					<button>
						<Link to="/login"> ENTER </Link>
					</button>
				</div>
			</Carousel>
		</div>
	);
};

export default HomePage;
