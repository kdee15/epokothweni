import ComponentRichText from "../../components/molecules/componentRichText/ComponentRichText";
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

export default function Event({ event }) {
  console.log("event", event);
  return (
    <div className={classes.oProjectPage}>
      <h1>Hello {event.title}</h1>
      {event.description ? (
        <ComponentRichText contentModule={event.description.json} />
      ) : null}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { event } = params;

  const result = await fetch(C_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${DELIVERY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: EVENT_CONTENT,
      variables: {
        slug: event,
      },
    }),
  });

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const [eventData] = data.eventCollection.items;

  return {
    props: { event: eventData },
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
  const eventSlug = data.eventCollection.items;
  const paths = eventSlug.map(({ slug }) => {
    return {
      params: { event: slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
