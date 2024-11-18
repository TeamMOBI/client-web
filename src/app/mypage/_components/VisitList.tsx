import Link from "next/link";
import { Card, Button, Tag, NavigationLeft } from "@/components";
import { cardContainer } from "../mypage.css";
import { PlaceTime } from "@/types/dto";
import { typos } from "@/styles/typos.css";
import { colors } from "@/styles/colors";

const VisitList = ({ places }: { places: PlaceTime[] }) => {
  if (!places.length)
    return (
      <div className={typos.body} style={{ color: colors.gray_02 }}>
        방문한 장소가 아직 없어요.
      </div>
    );
  return (
    <div className={cardContainer}>
      {places.map((place, key) => (
        <Link
          key={key}
          href={`/review/${place.placeId}`}
          style={{ width: "100%" }}
        >
          <Card
            image={place.placeImageUrl || ""}
            title={place.placeName}
            discriptions={[<Tag key={0} text="방문예정" />]}
            rightChild={<Button state="active" text="리뷰 작성" />}
          />
        </Link>
      ))}
    </div>
  );
};
export default VisitList;
