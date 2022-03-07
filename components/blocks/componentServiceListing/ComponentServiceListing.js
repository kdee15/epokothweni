import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import classes from "./ComponentServiceListing.module.scss";

function ComponentServiceListing({ contentModule }) {
  const data = contentModule;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <footer className={classes.oServicesBlock}>
      <div className={`container`}>
        <div className={`row`}>
          <h2 className={classes.aBlockTitle}>{data.title}</h2>
          <div className={classes.aBlockDesc}>{data.blockCopy}</div>
        </div>
        <div className={`row`}>
          <Slider {...settings}>
            <div className={`slideCard`}>
              <h5 className={`aTitle`}>{data.column1Title}</h5>
              <p className={`aText a-fnt-16f`}>{data.column1Text}</p>
            </div>
            <div className={`slideCard`}>
              <h5 className={`aTitle`}>{data.column2Title}</h5>
              <p className={`aText a-fnt-16f`}>{data.column2Text}</p>
            </div>
            <div className={`slideCard`}>
              <h5 className={`aTitle`}>{data.column3Title}</h5>
              <p className={`aText a-fnt-16f`}>{data.column3Text}</p>
            </div>
            <div className={`slideCard`}>
              <h5 className={`aTitle`}>{data.column4Title}</h5>
              <p className={`aText a-fnt-16f`}>{data.column4Text}</p>
            </div>
          </Slider>
        </div>
      </div>
    </footer>
  );
}

export default ComponentServiceListing;
