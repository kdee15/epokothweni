import { createClient } from "contentful";

const client = createClient({
  space: "ma8huh083wml",
  accessToken: "jfgTj4fxMUcOstfqJrWQUIWZhZDmyXBMdtUdtEu5O5o",
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "recipe",
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
    content_type: "recipe",
    "fields.slug": params.slug,
  });

  return {
    props: { recipe: items[0] },
  };
}

export default function RecipeDetails({ recipe }) {
  console.log(recipe);
  return <div>Recipe Details: {recipe.fields.title}</div>;
}
