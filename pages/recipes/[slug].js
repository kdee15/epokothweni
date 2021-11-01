import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "../../components/Skeleton";

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
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { recipe: items[0] },
    revalidate: 1,
  };
}

export default function RecipeDetails({ recipe }) {
  if (!recipe) return <Skeleton />;
  const { featuredImage, title, cookingTime, ingredients, method } =
    recipe.fields;
  return (
    <section className="o-recipe-page">
      <div className="o-page-banner-block">
        <figure>
          <Image
            src={"https:" + featuredImage.fields.file.url}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
          />
        </figure>
      </div>
      <div className="o-recipe-content">
        <p>{cookingTime}</p>
        <p>Ingredients</p>
        <ul>
          {ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
        <div>{documentToReactComponents(method)}</div>
      </div>
    </section>
  );
}
