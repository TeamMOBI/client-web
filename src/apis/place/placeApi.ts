import createApiClient from "@/apis";
import { BaseResponse, Place, PlaceDetail } from "@/types/dto";

const placeApi = {
  GET_PLACE_LIST: async (): Promise<BaseResponse<Place[]>> => {
    const apiClient = createApiClient();
    const response = await apiClient.get("/place");
    return response.data;
  },
  POST_PLACE_LIST: async (name: string): Promise<BaseResponse<Place>> => {
    const apiClient = createApiClient();
    const response = await apiClient.post("/place", name);
    return response.data;
  },
  GET_PLACE_DETAIL: async (id: number): Promise<BaseResponse<PlaceDetail>> => {
    const apiClient = createApiClient();
    const response = await apiClient.get(`/place/${id}`);
    return response.data;
  },
};

export default placeApi;
