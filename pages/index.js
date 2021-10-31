import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";

export async function getStaticProps() {
  const client = createClient({
    space: "ma8huh083wml",
    accessToken: "jfgTj4fxMUcOstfqJrWQUIWZhZDmyXBMdtUdtEu5O5o",
  });
  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: res.items,
    },
  };
}

export default function Recipes({ recipes }) {
  return (
    <div className="container">
      <div className="row">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
