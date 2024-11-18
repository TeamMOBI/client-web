import createApiClient from "..";

import {
  BaseResponse,
  UserVisitUpdateBookMarkRequest,
  UserPlace,
} from "@/types/dto";

const visitApi = {
  GET_USER_VISIT: async (): Promise<BaseResponse<UserPlace[]>> => {
    const apiClient = createApiClient();
    const response = await apiClient.get("/user-visit/me");
    return response.data;
  },

  PATCH_USER_VISIT: async (
    placeId: number,
    request: UserVisitUpdateBookMarkRequest
  ): Promise<BaseResponse<UserPlace>> => {
    const apiClient = createApiClient();
    const response = await apiClient.patch("/user-visit", null, {
      params: { placeId, ...request },
    });
    return response.data;
  },
};

export default visitApi;
