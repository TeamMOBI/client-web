import authApi from "@/apis/auth/authApi";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { BaseResponse, LoginResponse } from "@/types/dto";

import { useCookies } from "react-cookie";

export const useAuth = () => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["access_token"]);

  const kakaoMutation = useMutation({
    mutationFn: authApi.LOGIN,
    onSuccess: (response: BaseResponse<LoginResponse>) => {
      if (!response.success) return;

      const data = response.data;
      const token = data.tokenVo;
      if (!token) return;

      setCookie("access_token", token.accessToken, {
        secure: true,
        maxAge: token.accessTokenAge,
      });

      router.push("/");
    },
    onError: (error: any) => {
      console.error(error);
    },
  });

  return {
    kakaoMutation,
  };
};
