import ComponentRichTextArea from "../../components/organisms/componentRichTextArea/ComponentRichTextArea";
import Link from "next/link";
import classes from "./events.module.scss";
const {
  DELIVERY_KEY,
  C_GRAPHQL_URL,
} = require("../../helpers/contentful-config");
const { EVENT_CONTENT, EVENT_SLUG } = require("../../helpers/data/events");

/**
 * Initial page load to access users browser information
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function Events({ events }) {
  return (
    <div className={`${classes.oProjectPage}`}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <div className={`${classes.ocol} col-12 offset-md-1 col-md-10`}>
            <h1>{events.title}</h1>
            <ComponentRichTextArea contentModule={events.description} />
          </div>
        </div>
        <div className={`${classes.oRow} row`}>
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
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { events } = params;

  const result = await fetch(C_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${DELIVERY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: EVENT_CONTENT,
      variables: {
        slug: events,
      },
    }),
  });

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const [eventData] = data.pageEventCollection.items;

  return {
    props: { events: eventData },
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
      query: EVENT_SLUG,
    }),
  });

  if (!result.ok) {
    return {};
  }

  const { data } = await result.json();
  const eventSlug = data.pageEventCollection.items;
  const paths = eventSlug.map(({ slug }) => {
    return {
      params: { events: slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
