import React from "react";
import CarouselItems from "../../organisms/CarouselItems/CarouselItems";
import classes from "../Carousel/Carousel.module.scss";

function Carousel(props) {
  const { contentModule } = props;
  return (
    <section
      key={`${contentModule.__component}-${contentModule.id}`}
      className={classes.blockWrapper}
    >
      <div className={`container`}>
        <h1 className={classes.a_KD_Wow}>Carousel</h1>
        <div className="flexible-content-modules">
          {contentModule.slide
            ? contentModule.slide.map((contentModule) => (
                <CarouselItems
                  key={`${contentModule.id}`}
                  contentModule={contentModule}
                ></CarouselItems>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
