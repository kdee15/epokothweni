import Link from "next/link";
import Image from "next/image";

export default function RecipeCard({ recipe }) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
    <div className="col-12 col-md-6">
      <figure>
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          loader={loaderProp}
        />
      </figure>
      <div>
        <div>
          <h4>{title}</h4>
          <p>Takes approx. {cookingTime} mins to make.</p>
          <Link href={"/recipes/" + slug}>
            <a>Cook this</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
