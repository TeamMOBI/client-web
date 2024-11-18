import createApiClient from "..";

const authApi = {
  LOGIN: async (code: string) => {
    const apiClient = createApiClient();
    const response = await apiClient.get("/login/oauth/kakao", {
      params: {
        code,
      },
    });
    return response.data;
  },
};
export default authApi;
