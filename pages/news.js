import { createClient } from "contentful";
import Link from "next/link";
import Nav from "../components/molecules/nav/Nav";
import ComponentPageBanner from "../components/blocks/componentPageBanner/ComponentPageBanner";
import ComponentFooter from "../components/blocks/componentFooter/ComponentFooter";

import classes from "./news/news.module.scss";

export default function NewsIndex({ News, NewsItems, footer }) {
  const navLinks = News.items[0].fields.components[0].fields;
  const heroBanner = News.items[0].fields.components[1].fields;

  return (
    <div>
      <ComponentPageBanner contentModule={heroBanner} />
      <Nav contentModule={navLinks} theme="content-page" />
      <section className={`${classes.oPage}`}>
        <div className={`${classes.oContainer} container`}>
          <div className={`${classes.oRow} row`}>
            {NewsItems.map((item, index) => (
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
      </section>
      <ComponentFooter footer={footer} />
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.C_SPACE_ID,
    accessToken: process.env.C_DELIVERY_KEY,
  });

  const resNews = await client.getEntries({
    content_type: "pageContent",
    include: 10,
  });

  const resNewsItems = await client
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
      NewsItems: resNewsItems,
      footer: resFooter.items[0].fields,
    },
    revalidate: 1,
  };
}
