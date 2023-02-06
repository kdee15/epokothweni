import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import classes from "./ComponentServiceListing.module.scss";

function ComponentServiceListing({ contentModule }) {
  const { title, copy, serviceList } = contentModule;
  const { fontColor, linkAnchor } = contentModule.blockTheme.fields;
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
    <section className={classes.oServicesBlock}>
      {linkAnchor ? (
        <div className={`aBlockAnchor`} id={linkAnchor}></div>
      ) : null}
      <div className={`container`}>
        <div className={`row`}>
          <h2 className={classes.aBlockTitle}>{title}</h2>
          <div className={classes.aBlockDesc}>
            {documentToReactComponents(copy)}
          </div>
        </div>
        <div className={`row`}>
          <Slider {...settings}>
            {serviceList.map((service, index) => (
              <div key={index}>
                <h5 className={`aTitle fnt18f`}>{service.fields.title}</h5>
                <div className={`mText fnt16f`}>
                  {documentToReactComponents(service.fields.copy)}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default ComponentServiceListing;
