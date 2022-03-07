import Link from "next/link";
import { baseUrl } from "../../../helpers/utils";
import {PodcastsCard} from "../PodcastsCard/PodcastsCard";

export function PodcastListingComponent({ Podcast }) {
  return (
    <PodcastsCard Podcast={Podcast} />
  );
}
