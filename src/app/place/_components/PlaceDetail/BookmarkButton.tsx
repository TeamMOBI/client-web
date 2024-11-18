"use client";

import { Button } from "@/components";
import { useBookmark } from "@/hooks/mutations/useBookmark";
import { PlaceDetail } from "@/types/dto";

const BookmarkButton = ({
  placeId,
  isBookmarked,
}: Pick<PlaceDetail, "placeId" | "isBookmarked">) => {
  const { mutation } = useBookmark(placeId, {
    bookMarkStatus: !isBookmarked,
  });

  const handleClickBookmark = () => {
    mutation.mutate();
  };

  return (
    <Button
      state="default"
      text={isBookmarked ? "찜 해제" : "찜하기"}
      onClick={handleClickBookmark}
    />
  );
};
export default BookmarkButton;
