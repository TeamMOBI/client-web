import { container } from "./home.css";
import PlaceList from "./_components/PlaceList";

import placeQueryOptions from "@/apis/place/query";
import { Hydrate, getDehydratedQuery } from "@/apis/utils/getDehydratedQuery";

const Home = async () => {
  const { queryKey, queryFn } = placeQueryOptions.all();
  const places = await getDehydratedQuery({ queryKey, queryFn });
  if (!places) return null;

  return (
    <main className={container}>
      <Hydrate state={places}>
        {places.state.data && <PlaceList places={places.state.data.data} />}
      </Hydrate>
    </main>
  );
};

export default Home;
