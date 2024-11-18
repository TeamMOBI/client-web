import { placeKeys } from "@/constants/queryKeys";
import placeApi from "./placeApi";

const placeQueryOptions = {
  all: () => ({
    queryKey: placeKeys.all,
    queryFn: placeApi.GET_PLACE_LIST,
  }),
  detail: (id: number) => ({
    queryKey: placeKeys.detail(id),
    queryFn: () => placeApi.GET_PLACE_DETAIL(id),
  }),
  filter: (name: string) => ({
    queryKey: placeKeys.filter(name),
    queryFn: () => placeApi.POST_PLACE_LIST(name),
  }),
};

export default placeQueryOptions;
