import { Hydrate, getDehydratedQuery } from "@/apis/utils/getDehydratedQuery";

import VisitList from "./_components/VisitList";
import timeQueryOptions from "@/apis/time/query";

const Mypage = async () => {
  const { queryKey, queryFn } = timeQueryOptions.all();
  const places = await getDehydratedQuery({ queryKey, queryFn });

  if (!places) return null;

  return (
    <Hydrate state={places}>
      {places.state.data && <VisitList places={places.state.data.data} />}
    </Hydrate>
  );
};

export default Mypage;
