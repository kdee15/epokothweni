import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
import classes from "./ComponentLatestPodcast.module.scss";

function ComponentLatestPodcast({ contentModule }) {
  const {
    title,
    description,
    image,
    imageText,
    linkToPodcasts,
    backgroundImage,
  } = contentModule;
  const podcastUrl = contentModule.listing[0].fields;
  const { linkAnchor } = contentModule.blockTheme.fields;

  return (
    <section className={`${classes.oLatestPodcast}`}>
      {linkAnchor ? (
        <div className={`aBlockAnchor`} id={linkAnchor}></div>
      ) : null}

      <div className={`${classes.oContainer} container`}>
        <h2 className={`${classes.aBlockTitle}`}>{title}</h2>
        <div className={`${classes.mBlockDescription}`}>
          {documentToReactComponents(description)}
        </div>
        <div className={`${classes.oRow} row`}>
          <div className={`${classes.oImage} col-12 col-md-4 col-lg-6`}>
            <figure className={`${classes.oBlockImage}`}>
              <Image
                className={`${classes.aImage} a-responsive-image`}
                src={image.fields.file.url}
                alt={image.fields.file.title}
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
                style={{ objectFit: "contain" }}
              />
            </figure>
            <div className={`${classes.mImageText}`}>
              {documentToReactComponents(imageText)}
            </div>
          </div>
          <div className={`${classes.oBody} col-12 col-md-8 col-lg-6`}>
            <iframe
              width="560"
              height="126"
              src={podcastUrl.embedUrl}
              className={classes.mPodcastDeck}
              title="Podcast"
            ></iframe>
          </div>
        </div>
        <div className={`${classes.mCta}`}>
          <Link
            href={linkToPodcasts}
            className={`aBtn a-fnt-16s btnAlt`}
            target={`_blank`}
            rel="noopener"
          >
            View episodes
          </Link>
        </div>
      </div>
      <div
        className={`${classes.aBackground}`}
        style={{
          backgroundImage: `url(http:${backgroundImage?.fields?.file?.url})`,
        }}
      ></div>
    </section>
  );
}

export default ComponentLatestPodcast;
