import createApiClient from "..";

import { BaseResponse, PlaceTime } from "@/types/dto";

const timeApi = {
  GET_PLACE_TIME: async (): Promise<BaseResponse<PlaceTime[]>> => {
    const apiClient = createApiClient();
    const response = await apiClient.get("/place-time/me");
    return response.data;
  },
};

export default timeApi;
