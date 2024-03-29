import { createClient } from "contentful";
import Nav from "../components/molecules/nav/Nav";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
import ComponentLatestPodcast from "../components/blocks/componentLatestPodcast/ComponentLatestPodcast";
import ComponentCopy from "../components/organisms/componentCopy/ComponentCopy";
import ComponentFeaturedNews from "../components/blocks/componentFeaturedNews/ComponentFeaturedNews";
import ComponentFooter from "../components/blocks/componentFooter/ComponentFooter";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.C_SPACE_ID,
    accessToken: process.env.C_DELIVERY_KEY,
  });

  const resPage = await client
    .getEntries({
      content_type: "pageHomepage",
      include: 10,
    })
    .then((entries) => entries.items);

  const resNews = await client.getEntries({
    content_type: "pageNews",
    include: 10,
  });

  const resEvents = await client.getEntries({
    content_type: "pageEvent",
    include: 10,
  });

  const resFooter = await client.getEntries({
    content_type: "componentFooter",
  });

  return {
    props: {
      Page: resPage,
      News: resNews,
      Events: resEvents,
      footer: resFooter.items[0].fields,
    },
    revalidate: 1,
  };
}

export default function Home({ Page, News, footer }) {
  const navLinks = Page[0].fields.components[0].fields;
  const heroBanner = Page[0].fields.components[1].fields;
  const ComponentAbout = Page[0].fields.components[2].fields;
  const componentLatestPodcast = Page[0].fields.components[3].fields;

  return (
    <div>
      <Nav contentModule={navLinks} theme="home" />
      <ComponentHeroBanner heroBanner={heroBanner} />
      <ComponentCopy contentModule={ComponentAbout} />
      <ComponentLatestPodcast contentModule={componentLatestPodcast} />
      {News.items.length && <ComponentFeaturedNews contentModule={News} />}
      <ComponentFooter footer={footer} />
    </div>
  );
}
