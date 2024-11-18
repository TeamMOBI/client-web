import type { PlaceDetail } from "@/types/dto";

import { PlaceHeader } from "./PlaceHeader";
import { PlaceBody } from "./PlaceBody";

const PlaceDetail = ({ place }: { place: PlaceDetail }) => {
  return (
    <>
      <PlaceHeader {...place} />
      <PlaceBody {...place} />
    </>
  );
};

export default PlaceDetail;
