import ComponentRichText from "../../components/molecules/componentRichText/ComponentRichText";
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

export default function News({ news }) {
  console.log("news", news);
  return (
    <div className={`${classes.oProjectPage}`}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <div className={`${classes.ocol} col-12 offset-md-1 col-md-10`}>
            <h1>{news.title}</h1>
          </div>
        </div>
      </div>
      {news.copy ? <ComponentRichText contentModule={news.copy.json} /> : null}
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
  const [newsData] = data.newsCollection.items;

  return {
    props: { news: newsData },
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
  const newsSlug = data.newsCollection.items;
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
