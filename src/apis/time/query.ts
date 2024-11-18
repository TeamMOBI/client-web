import { timeKeys } from "@/constants/queryKeys";

import timeApi from "./timeApi";

const timeQueryOptions = {
  all: () => ({
    queryKey: timeKeys.all,
    queryFn: timeApi.GET_PLACE_TIME,
  }),
};

export default timeQueryOptions;
