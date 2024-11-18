import Link from "next/link";

import { Card, Figure } from "@/components";
import { cardContainer } from "../home.css";
import { Place } from "@/types/dto";

const PlaceList = ({ places }: { places: Place[] }) => {
  return (
    <div className={cardContainer}>
      {places.map((place, key) => (
        <Link key={key} href={`/place/${place.placeId}`}>
          <Card
            image={place.imageUrl}
            title={place.placeName}
            discriptions={[`도로소통 ${place.trafficStatus}`]}
            rightChild={<Figure text={place.statusKeyword} />}
          />
        </Link>
      ))}
    </div>
  );
};

export default PlaceList;
