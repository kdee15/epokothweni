import { createClient } from "contentful";
import Link from "next/link";
import ComponentFooter from "../../components/blocks/componentFooter/ComponentFooter";
import classes from "./news.module.scss";
const {
  DELIVERY_KEY,
  C_GRAPHQL_URL,
} = require("../../helpers/contentful-config");
const { NEWS_CONTENT, NEWS_SLUG } = require("../../helpers/data/news");

/**
 * Initial page load to access users browser information
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function News({ News, footer }) {
  return (
    <div className={`${classes.oProjectPage}`}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <div className={`${classes.oCol} col`}>
            <h1 className={`${classes.aPageTitle}`}>news list</h1>
          </div>
        </div>
        <div className={`${classes.oRow} row`}>
          {News.map((item, index) => (
            <article
              className={`${classes.oCardColumn} col-12 col-sm-6`}
              key={index}
            >
              <div className={`${classes.oCard}`}>
                <figure
                  className={`${classes.mCardImage}`}
                  style={{
                    backgroundImage: `url(http:${item.fields.image.fields.file.url})`,
                  }}
                ></figure>
                <div className={`${classes.mCardBody}`}>
                  <h5 className={`${classes.aTitle} fnt18f`}>
                    {item.fields.title}
                  </h5>
                  <div className={`mText fnt16f`}>
                    <Link href={`news/${item.fields.slug}`}>
                      <a className={`aBtn fnt16f`} rel="noopener">
                        View News
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <ComponentFooter footer={footer} />
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.C_SPACE_ID,
    accessToken: process.env.C_DELIVERY_KEY,
  });

  const resNews = await client
    .getEntries({
      content_type: "pageNews",
      include: 10,
    })

    .then((entries) => entries.items);

  const resFooter = await client.getEntries({
    content_type: "componentFooter",
  });

  return {
    props: {
      News: resNews,
      footer: resFooter.items[0].fields,
    },
    revalidate: 1,
  };
}
