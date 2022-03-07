import Link from "next/link";
import Image from "next/image";

export default function PodcastCard({ podcast }) {
  const { title } = podcast.fields;
  return (
    <div className="col-12 col-md-6">
      {/* <figure>
        <Image
          src={"https:" + image.fields.file.url}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
        />
      </figure> */}
      <div>
        <div>
          <h4>{title}</h4>
          {/* <Link href={"/podcasts/" + slug}>
            <a>Cook this</a>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
