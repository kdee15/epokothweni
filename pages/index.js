import { createClient } from "contentful";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
import Component2ColumnImageText from "../components/blocks/component2ColumnImageText/Component2ColumnImageText";
import LatestPodcast from "../components/blocks/latestPodcast/LatestPodcast";
import ComponentFooter from "../components/blocks/componentFooter/ComponentFooter";
import ComponentServiceListing from "../components/blocks/componentServiceListing/ComponentServiceListing";
import ComponentVideoBlock from "../components/blocks/componentVideoBlock/ComponentVideoBlock";

const { C_SPACE_ID, C_DELIVERY_KEY } = require("../helpers/contentful-config");

export async function getStaticProps() {
  const client = createClient({
    space: C_SPACE_ID,
    accessToken: C_DELIVERY_KEY,
  });

  const res = await client.getEntries({ content_type: "recipe" });
  const resPods = await client.getEntries({ content_type: "podcast" });

  const resServiceBlock = await client.getEntries({
    content_type: "componentServiceListing",
  });
  const resBanner = await client.getEntries({
    content_type: "componentHeroBanner",
  });
  const resFooter = await client.getEntries({
    content_type: "componentFooter",
  });
  const resTextImage = await client.getEntries({
    content_type: "component2ColumnImageText",
  });
  const resVideoBlock = await client.getEntries({
    content_type: "componentVideoPlayer",
  });

  return {
    props: {
      recipes: res.items,
      podcasts: resPods.items,
      footer: resFooter.items[0].fields,
      heroBanner: resBanner.items[0].fields,
      aboutBlock: resTextImage.items[1].fields,
      companyBlock: resTextImage.items[0].fields,
      serviceBlock: resServiceBlock.items[0].fields,
      videoBlockEng: resVideoBlock.items[0].fields,
      videoBlockXho: resVideoBlock.items[1].fields,
    },
    revalidate: 1,
  };
}

export default function Recipes({
  aboutBlock,
  companyBlock,
  footer,
  heroBanner,
  serviceBlock,
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
