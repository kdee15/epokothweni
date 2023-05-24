import { createClient } from "contentful";
import ComponentRichTextArea from "../../components/organisms/componentRichTextArea/ComponentRichTextArea";
import Nav from "../../components/molecules/nav/Nav";
import ComponentFooter from "../../components/blocks/componentFooter/ComponentFooter";
import Link from "next/link";
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

export default function News({ news, footer, nav }) {
  return (
    <div className={`${classes.oProjectPage}`}>
      {nav.title === "Page Main Menu" && (
        <Nav contentModule={nav} theme="content-page" />
      )}
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <div className={`${classes.ocol} col-12 offset-md-1 col-md-10`}>
            <h1>{news.title}</h1>
            <ComponentRichTextArea contentModule={news.copy} />
          </div>
        </div>
        <div className={`${classes.oRow} row`}>
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
      <ComponentFooter footer={footer} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { news } = params;

  const result = await fetch(C_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${DELIVERY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: NEWS_CONTENT,
      variables: {
        slug: news,
      },
    }),
  });

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const [newsData] = data.pageNewsCollection.items;

  // other kak

  const footerClient = createClient({
    space: process.env.C_SPACE_ID,
    accessToken: process.env.C_DELIVERY_KEY,
  });

  const resFooter = await footerClient.getEntries({
    content_type: "componentFooter",
  });

  const resNav = await footerClient.getEntries({
    content_type: "componentMenu",
  });

  return {
    props: {
      news: newsData,
      footer: resFooter.items[0].fields,
      nav: resNav.items[0].fields,
    },
  };
}

export async function getStaticPaths() {
  const result = await fetch(C_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${DELIVERY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: NEWS_SLUG,
    }),
  });

  if (!result.ok) {
    return {};
  }

  const { data } = await result.json();
  const newsSlug = data.pageNewsCollection.items;
  const paths = newsSlug.map(({ slug }) => {
    return {
      params: { news: slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
