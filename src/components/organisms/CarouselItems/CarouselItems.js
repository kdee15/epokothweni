import React from "react";
import classes from "./CarouselItems.module.scss";
import Image from "next/image";

function CarouselItems(props) {
  const { title, image, copy } = props.contentModule;
  return (
    <section className={`container`}>
      <div className={classes.oContent}>
        {title}
        <Image
          src={image.url}
          alt={title}
          className={`a-responsive-image`}
          width={image.width}
          height={image.height}
        />
        {copy}
      </div>
    </section>
  );
}

export default CarouselItems;
