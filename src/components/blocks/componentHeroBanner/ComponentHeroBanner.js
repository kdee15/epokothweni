import classes from "./ComponentHeroBanner.module.scss";
import Image from "next/image";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ComponentHeroBanner({ heroBanner }) {
  const { description, image, logo, theme } = heroBanner;
  return (
    <section
      className={`${classes.oHeroBlock} hero__${theme}`}
      style={{
        backgroundImage: `url(http:${image.fields.file.url})`,
      }}
    >
      <div className={`container`}>
        <div className={`${classes.oContentRow} row`}>
          <div
            className={`${classes.oContentBlock} col-12 col-md-6 offset-md-6 col-12 col-lg-7 offset-lg-5`}
          >
            <figure className={classes.mImage}>
              <Image
                className={`${classes.aImage} a-responsive-image`}
                src={logo.fields.file.url}
                alt={`title`}
                width={logo.fields.file.details.image.width}
                height={logo.fields.file.details.image.height}
                aria-hidden="true"
                style={{ objectFit: "contain" }}
                priority="true"
              />
            </figure>
            <div className={`${classes.aText} a-fnt-18f`}>
              {/* {documentToReactComponents(description)} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentHeroBanner;
