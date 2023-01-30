import Link from "next/link";
import classes from "./ComponentFeaturedNews.module.scss";

function ComponentFeaturedNews({ contentModule }) {
  const { items } = contentModule;
  return (
    <section className={classes.oFeaturedNewsBlock}>
      <div className={`container`}>
        <div className={`row`}>
          <h2 className={classes.aBlockTitle}>Latest News</h2>
        </div>
        <div className={`row`}>
          {items
            .filter((item) => !item.isFeatured)
            .map(
              (item, index) =>
                index >= 1 && (
                  <div key={index} className={`col-12 offset-md-2 col-md-8`}>
                    <article className={classes.oCard}>
                      <div className={classes.mCardBody}>
                        <h3 className={`${classes.aTitle} fnt18f`}>
                          <Link
                            href={`news/${item.fields.slug}`}
                            className={`${classes.mLink} ${classes.textLink}`}
                          >
                            <a rel="noopener">{item.fields.title}</a>
                          </Link>
                        </h3>
                      </div>

                      <Link
                        href={`news/${item.fields.slug}`}
                        className={classes.mLink}
                      >
                        <a rel="noopener">
                          <figure
                            className={classes.mCardImage}
                            style={{
                              backgroundImage: `url(http:${item.fields.image.fields.file.url})`,
                            }}
                          ></figure>
                        </a>
                      </Link>
                    </article>
                  </div>
                )
            )}
        </div>
        <div className={`row`}>
          <div className={`${classes.mCTA} col`}>
            <Link href={`/news`}>
              <a
                className={`${classes.aCTA} aBtn a-fnt-16s btnAlt`}
                rel="noopener"
              >
                View all news
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentFeaturedNews;
