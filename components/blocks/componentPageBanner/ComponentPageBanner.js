import classes from "./ComponentPageBanner.module.scss";
import Image from "next/image";
import React from "react";

function ComponentPageBanner({ pageBanner }) {
  const { image, logo, theme } = pageBanner;
  return (
    <section
      className={`${classes.oHeroBlock} hero__${theme}`}
      style={{
        backgroundImage: `url(http:${image.fields.file.url})`,
      }}
    >
      <div className={`${classes.oContainer} container`}>
        <figure className={classes.mImage}>
          <Image
            className={`${classes.aImage} a-responsive-image`}
            src={logo.fields.file.url}
            alt={`title`}
            width={logo.fields.file.details.image.width}
            height={logo.fields.file.details.image.height}
            aria-hidden="true"
            layout="responsive"
            priority="true"
          />
        </figure>
      </div>
    </section>
  );
}

export default ComponentPageBanner;
