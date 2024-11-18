import Link from "next/link";
import { Card, Button, Tag, NavigationLeft } from "@/components";
import { cardContainer } from "../mypage.css";
import { UserPlace } from "@/types/dto";
import { typos } from "@/styles/typos.css";
import { colors } from "@/styles/colors";

const BookmarkList = ({ places }: { places: UserPlace[] }) => {
  if (!places.length)
    return (
      <div className={typos.body} style={{ color: colors.gray_02 }}>
        찜한 장소가 아직 없어요.
      </div>
    );
  return (
    <div className={cardContainer}>
      {places.map((place, key) => (
        <Link
          key={key}
          href={`/place/${place.placeId}`}
          style={{ width: "100%" }}
        >
          <Card
            image={place.imageUrl || ""}
            title={place.placeName}
            discriptions={[<Tag key={0} text="방문예정" />]}
          />
        </Link>
      ))}
    </div>
  );
};
export default BookmarkList;
