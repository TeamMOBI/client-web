import { Hydrate, getDehydratedQuery } from "@/apis/utils/getDehydratedQuery";
import visitQueryOptions from "@/apis/visit/query";

import BookmarkList from "../_components/BookmartList";

const BookmarkPage = async () => {
  const { queryKey, queryFn } = visitQueryOptions.all();
  const places = await getDehydratedQuery({ queryKey, queryFn });

  if (!places) return null;

  return (
    <Hydrate state={places}>
      {places.state.data && <BookmarkList places={places.state.data.data} />}
    </Hydrate>
  );
};

export default BookmarkPage;
