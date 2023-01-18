import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import classes from "./ComponentLatestPodcast.module.scss";

function ComponentLatestPodcast({ contentModule }) {
  console.log("contentModule", contentModule);
  const { title, description, image, linkToPodcasts } = contentModule;
  const podcastUrl = contentModule.listing[0].fields;
  console.log("podcastUrl", podcastUrl);
  return (
    <section className={`${classes.oLatestPodcast}`}>
      <div className={`${classes.oContainer} container`}>
        <h2 className={`${classes.aBlockTitle}`}>{title}</h2>
        <div className={`${classes.oRow} row`}>
          <div className={`${classes.oImage} col col-md-4 col-lg-6`}>
            <figure className={`${classes.oBlockImage}`}>
              <Image
                className={`${classes.aImage} a-responsive-image`}
                src={image.fields.file.url}
                alt={``}
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
              />
            </figure>
            <div className={`${classes.mDescription}`}>
              {documentToReactComponents(description)}
            </div>
          </div>
          <div className={`${classes.oBody} col col-md-8 col-lg-6`}>
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
          <Link href={linkToPodcasts}>
            <a
              className={`aBtn a-fnt-16s btnAlt`}
              target={`_blank`}
              rel="noopener"
            >
              View episodes
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ComponentLatestPodcast;
