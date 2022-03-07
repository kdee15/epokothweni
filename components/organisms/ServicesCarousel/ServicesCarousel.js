import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import classes from "../ServicesCarousel/ServicesCarousel.module.scss";

export function ServicesCarousel({ services }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className={classes.oServicesBlock}>
      <div className={`container`}>
        <div className={`row no-gutters`}>
          <h2 className={classes.aBlockTitle}>EPOKOTHWENI SERVICES</h2>
          <p className={classes.aBlockDesc}>
            Services offered fully bilingually in English and Isixhosa according
            to client preference
          </p>
          <Slider {...settings}>
            {services.map((service) => (
              <div key={services.id}>
                <h5 className={`aTitle`}>{service.title}</h5>
                <p className={`aText a-fnt-16f`}>{service.copy}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
