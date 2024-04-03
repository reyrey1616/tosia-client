import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import Image2010 from "../assets/2010.png";
import Image2011 from "../assets/2011.png";
import Image2012 from "../assets/2012.png";
import Image2013 from "../assets/2013.png";
import Image2014 from "../assets/2014.png";
import Image2015 from "../assets/2015.png";
import Image2016 from "../assets/2016.png";
import Image2017 from "../assets/2017.png";
import Image2018 from "../assets/2018.png";
import Image2019 from "../assets/2019.png";
import Image2020 from "../assets/2020.png";
import Image2021 from "../assets/2021.png";
import Image2022 from "../assets/2022.png";

import LandingLogos from "../assets/landing-logos.png";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="landing-details">
        <img src={LandingLogos} alt="TOSIA" className="landing-logos" />
        <p className="text-1" style={{ marginBottom: "-10px" }}>
          THE OUTSTANDING STUDENTS OF ILOILO AWARDS 2024
        </p>
        <p className="m-0 text-2">BID NOMINATION PLATFORM</p>
      </div>

      <Carousel className="home-page-carousel" autoplay autoplaySpeed={3000000}>
        <div className="carousel-item">
          <div className="carousel-overlay"></div>
          <img src={Image2010} alt="TOSIA" />
          <button>
            <Link to="/login"> ENTER </Link>
          </button>
        </div>

        <div className="carousel-item">
          <img src={Image2011} alt="TOSIA" />
          <button>
            <Link to="/login"> ENTER </Link>
          </button>
        </div>

        <div className="carousel-item">
          <img src={Image2012} alt="TOSIA" />
          <button>
            <Link to="/login"> ENTER </Link>
          </button>
        </div>

        <div className="carousel-item">
          <img src={Image2013} alt="TOSIA" />
          <button>
            <Link to="/login"> ENTER </Link>
          </button>
        </div>

        <div className="carousel-item">
          <img src={Image2014} alt="TOSIA" />
          <button>
            <Link to="/login"> ENTER </Link>
          </button>
        </div>

        <div className="carousel-item">
          <img src={Image2015} alt="TOSIA" />
          <button>
            <Link to="/login"> ENTER </Link>
          </button>
        </div>

        <div className="carousel-item">
          <img src={Image2016} alt="TOSIA" />
          <button>
            <Link to="/login"> ENTER </Link>
          </button>
        </div>

        <div className="carousel-item">
          <img src={Image2017} alt="TOSIA" />
          <button>
            <Link to="/login"> ENTER </Link>
          </button>
        </div>

        <div className="carousel-item">
          <img src={Image2018} alt="TOSIA" />
          <button>
            <Link to="/login"> ENTER </Link>
          </button>
        </div>

        <div className="carousel-item">
          <img src={Image2019} alt="TOSIA" />
          <button>
            <Link to="/login"> ENTER </Link>
          </button>
        </div>

        <div className="carousel-item">
          <img src={Image2020} alt="TOSIA" />
          <button>
            <Link to="/login"> ENTER </Link>
          </button>
        </div>

        <div className="carousel-item">
          <img src={Image2021} alt="TOSIA" />
          <button>
            <Link to="/login"> ENTER </Link>
          </button>
        </div>

        <div className="carousel-item">
          <img src={Image2022} alt="TOSIA" />
          <button>
            <Link to="/login"> ENTER </Link>
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default HomePage;
