import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import classes from "../ServicesCarousel/ServicesCarousel.module.scss";

export function ServicesCarousel({ contentModule }) {
  const { title, copy, serviceList } = contentModule;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
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
          <h2 className={classes.aBlockTitle}>{title}</h2>
          <p className={classes.aBlockDesc}>
            {documentToReactComponents(copy)}
          </p>
          <Slider {...settings}>
            {serviceList.map((service, index) => (
              <div key={index}>
                <h5 className={`aTitle`}>{service.fields.title}</h5>
                <p className={`aText a-fnt-16f`}>
                  {documentToReactComponents(service.fields.copy)}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
