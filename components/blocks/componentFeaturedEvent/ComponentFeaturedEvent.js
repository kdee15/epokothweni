import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ComponentFeaturedEvent.module.scss";

function ComponentFeaturedEvents({ contentModule }) {
  const { items } = contentModule;
  return (
    <section className={classes.oFeaturedNewsBlock}>
      <div className={`aBlockAnchor`} id={`featured-event`}></div>
      <div className={`container`}>
        <div className={`row`}>
          <h2 className={classes.aBlockTitle}>Upcoming Events</h2>
        </div>
        <div className={`row`}>
          {items
            .filter((item) => !item.isFeatured)
            .map((item, index) => (
              <div key={index} className={`col-12 offset-md-2 col-md-8`}>
                <article className={classes.oCard}>
                  <div className={classes.mCardBody}>
                    <h3 className={`${classes.aTitle} fnt18f`}>
                      {item.fields.title}
                    </h3>

                    <div className={`${classes.aBlockDesc} fnt14`}>
                      {documentToReactComponents(item.fields.description)}
                    </div>
                    <Link href={item.fields.link}>
                      <a
                        className={`${classes.aCTA} aBtn a-fnt-16s btnAlt`}
                        rel="noopener"
                        target="_blank"
                      >
                        View event detail
                      </a>
                    </Link>
                  </div>

                  <figure
                    className={classes.mCardImage}
                    style={{
                      backgroundImage: `url(http:${item.fields.image.fields.file.url})`,
                    }}
                  ></figure>
                </article>
              </div>
            ))}
        </div>
        <div className={`row`}>
          <div className={`${classes.mCTA} col`}>
            <Link href={`/events`}>
              <a
                className={`${classes.aCTA} aBtn a-fnt-16s btnAlt`}
                rel="noopener"
              >
                View all events
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentFeaturedEvents;
