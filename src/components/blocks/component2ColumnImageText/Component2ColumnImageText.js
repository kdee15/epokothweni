import { createClient } from "contentful";
import Image from "next/image";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./Component2ColumnImageText.module.scss";

function Component2ColumnImageText({ contentModule }) {
  const { title, copy, image, imagePosition } = contentModule;
  return (
    <section
      className={`${classes.oTextImageBlock} ${classes[`${imagePosition}`]}`}
    >
      <div className={`container`}>
        <div className={`row`}>
          <figure
            className={`${classes.oBlockImage} oBlockImage col-12 col-md-5`}
          >
            <Image
              className={`${classes.aImage} a-responsive-image`}
              src={image.fields.file.url}
              alt={``}
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
            />
          </figure>
          <div className={`${classes.oBlockBody} oBlockBody col-12 col-md-7`}>
            <h2 className={classes.aBlockTitle}>{title}</h2>
            <div className={classes.aBlockDesc}>
              {documentToReactComponents(copy)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Component2ColumnImageText;
