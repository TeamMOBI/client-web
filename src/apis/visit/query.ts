import { visitKeys } from "@/constants/queryKeys";
import visitApi from "./visitApi";

const visitQueryOptions = {
  all: () => ({
    queryKey: visitKeys.all,
    queryFn: visitApi.GET_USER_VISIT,
  }),
};

export default visitQueryOptions;
