import { createClient } from "contentful";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
import LatestPodcast from "../components/blocks/latestPodcast/LatestPodcast";
import ComponentFooter from "../components/blocks/componentFooter/ComponentFooter";
import ComponentVideoBlock from "../components/blocks/componentVideoBlock/ComponentVideoBlock";
import ComponentServiceListing from "../components/blocks/componentServiceListing/ComponentServiceListing";
import Component2ColumnImageText from "../components/blocks/component2ColumnImageText/Component2ColumnImageText";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.C_SPACE_ID,
    accessToken: process.env.C_DELIVERY_KEY,
  });

  const resPage = await client
    .getEntries({
      content_type: "page",
      include: 10,
    })

    .then((entries) => entries.items);

  const resFooter = await client.getEntries({
    content_type: "componentFooter",
  });

  const resVideoBlock = await client.getEntries({
    content_type: "componentVideoPlayer",
  });

  return {
    props: {
      Page: resPage,
      footer: resFooter.items[0].fields,
      videoBlockEng: resVideoBlock.items[0].fields,
      videoBlockXho: resVideoBlock.items[1].fields,
    },
    revalidate: 1,
  };
}

export default function Home({ Page, footer, videoBlockEng, videoBlockXho }) {
  console.log("components", Page[0].fields.components);
  const heroBanner = Page[0].fields.components[0].fields;
  const ComponentAbout = Page[0].fields.components[1].fields;
  const componentServiceListing = Page[0].fields.components[2].fields;
  return (
    <div>
      <ComponentHeroBanner heroBanner={heroBanner} />
      <LatestPodcast />
      <Component2ColumnImageText contentModule={ComponentAbout} />
      <ComponentServiceListing contentModule={componentServiceListing} />
      <ComponentVideoBlock contentModule={videoBlockEng} />
      <ComponentVideoBlock contentModule={videoBlockXho} />
      <ComponentFooter footer={footer} />
    </div>
  );
}
