import { Button, Tag } from "@/components";
import Link from "next/link";
import { ServerImage } from "@/components/Image/ServerImage";
import { vars } from "@/styles/theme.css";
import { typos } from "@/styles/typos.css";

import { imageContainer } from "./index.css";
import { PlaceDetail } from "@/types/dto";
import BookmarkButton from "./BookmarkButton";

export const PlaceHeader = (place: PlaceDetail) => {
  const { placeId, placeName, imageUrl, isBookmarked } = place;

  return (
    <div>
      <div className={imageContainer}>
        <ServerImage
          src={imageUrl}
          fallback="/images/fallback.png"
          alt={placeName}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: 160,
          padding: "40px 0",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <span className={typos.title} style={{ color: vars.color.white }}>
            {placeName}
          </span>
          <Tag text="핫플" />
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link
            href={{
              pathname: `/place/${placeId}/create`,
              query: { name: placeName },
            }}
          >
            <Button state="active" text="방문하기" />
          </Link>
          <BookmarkButton placeId={placeId} isBookmarked={isBookmarked} />
        </div>
      </div>
    </div>
  );
};
