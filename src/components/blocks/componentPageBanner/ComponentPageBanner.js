import classes from "./ComponentPageBanner.module.scss";
import Image from "next/image";
import React from "react";

function ComponentPageBanner({ contentModule }) {
  const { image, logo, theme, title } = contentModule;
  return (
    <section
      className={`${classes.oHeroBlock} hero__${theme}`}
      style={{
        backgroundImage: `url(http:${image.fields.file.url})`,
      }}
    >
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <div className={`${classes.mTitle} col`}>
            <h1>{title}</h1>
          </div>
          <figure className={`${classes.mImage} col`}>
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
        </div>
      </div>
    </section>
  );
}

export default ComponentPageBanner;
