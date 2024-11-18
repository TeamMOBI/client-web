import xior from "xior";

const createApiClient = () => {
  const isClient = typeof window !== "undefined";

  const apiClient = xior.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    withCredentials: true,
  });

  if (!isClient) {
    apiClient.interceptors.request.use(async (config) => {
      const { cookies } = await import("next/headers");
      const cookieStore = cookies();
      const accessToken = cookieStore.get("access_token")?.value;
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });
  } else {
    apiClient.interceptors.request.use(async (config) => {
      const getCookie = () => {
        const cookies = document.cookie.split("; ");
        const cookie = cookies.find((cookie) =>
          cookie.startsWith("access_token")
        );
        if (cookie) {
          return cookie.split("=")[1];
        }
      };
      const accessToken = getCookie();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });
  }

  return apiClient;
};

export default createApiClient;
