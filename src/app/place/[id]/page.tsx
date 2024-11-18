import PlaceDetail from "../_components/PlaceDetail";
import { container } from "../place.css";
import placeQueryOptions from "@/apis/place/query";
import { Hydrate, getDehydratedQuery } from "@/apis/utils/getDehydratedQuery";

const Place = async ({ params: { id } }: { params: { id: string } }) => {
  const { queryKey, queryFn } = placeQueryOptions.detail(+id);
  const place = await getDehydratedQuery({ queryKey, queryFn });
  if (!place) return null;

  return (
    <main className={container}>
      <Hydrate state={place}>
        {place.state.data && <PlaceDetail place={place.state.data.data} />}
      </Hydrate>
    </main>
  );
};

export default Place;
