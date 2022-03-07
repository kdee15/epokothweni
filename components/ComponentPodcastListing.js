import { createClient } from "contentful";
import PodcastCard from "../components/PodcastCard";

const { C_SPACE_ID, C_DELIVERY_KEY } = require("../helpers/contentful-config");

export async function getStaticProps() {
  const client = createClient({
    space: C_SPACE_ID,
    accessToken: C_DELIVERY_KEY,
  });
  const res = await client.getEntries({ content_type: "podcast" });

  return {
    props: {
      podcasts: res.items,
    },
    revalidate: 1,
  };
}

export default function ComponentPodcastListing({ podcasts }) {
  return (
    <div className="container">
      <div className="row">
        {/* {podcasts.map((podcast) => (
          <PodcastCard key={podcast.sys.id} recipe={podcast} />
        ))} */}
      </div>
    </div>
  );
}
