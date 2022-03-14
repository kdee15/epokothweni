import { createClient } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
const { C_SPACE_ID, C_DELIVERY_KEY } = require("../helpers/contentful-config");
import ComponentFooter from "../components/blocks/componentFooter/ComponentFooter";
import ComponentPageBanner from "../components/blocks/componentPageBanner/ComponentPageBanner";
import classes from "../styles/Global.module.scss";

const client = createClient({
  space: C_SPACE_ID,
  accessToken: C_DELIVERY_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "contentPage",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "contentPage",
    "fields.slug": params.slug,
  });

  const resBanner = await client.getEntries({
    content_type: "componentPageBanner",
  });

  const resFooter = await client.getEntries({
    content_type: "componentFooter",
  });

  return {
    props: {
      page: items,
      pageBanner: resBanner.items[0].fields,
      footer: resFooter.items[0].fields,
    },
  };
}

export default function DynamicSlug({ page, pageBanner, footer }) {
  const data = page[0].fields;
  const rawRichTextField = page[0].fields.body;
  return (
    <div className={`${classes.oSlug} oSlug`}>
      <ComponentPageBanner pageBanner={pageBanner} />
      <div className={`${classes.mSlugHeader} a-fnt-36`}>{data.title}</div>
      <div
        className={`${classes.oContent} oContent`}
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(rawRichTextField),
        }}
      />
      <ComponentFooter footer={footer} />
    </div>
  );
}
