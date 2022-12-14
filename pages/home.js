import { createClient } from "contentful";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
import LatestPodcast from "../components/blocks/latestPodcast/LatestPodcast";
import ComponentFooter from "../components/blocks/componentFooter/ComponentFooter";
import ComponentVideoBlock from "../components/blocks/componentVideoBlock/ComponentVideoBlock";

export default function Recipes({
  footer,
  heroBanner,
  videoBlockEng,
  videoBlockXho,
}) {
  return (
    <div>
      <ComponentHeroBanner heroBanner={heroBanner} />
      <LatestPodcast />
      <ComponentVideoBlock contentModule={videoBlockEng} />
      <ComponentVideoBlock contentModule={videoBlockXho} />
      <ComponentFooter footer={footer} />
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.C_SPACE_ID,
    accessToken: process.env.C_DELIVERY_KEY,
  });

  const resBanner = await client.getEntries({
    content_type: "componentHeroBanner",
  });
  const resFooter = await client.getEntries({
    content_type: "componentFooter",
  });

  const resVideoBlock = await client.getEntries({
    content_type: "componentVideoPlayer",
  });

  return {
    props: {
      footer: resFooter.items[0].fields,
      heroBanner: resBanner.items[0].fields,
      videoBlockEng: resVideoBlock.items[0].fields,
      videoBlockXho: resVideoBlock.items[1].fields,
    },
    revalidate: 1,
  };
}
