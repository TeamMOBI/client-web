import visitApi from "@/apis/visit/visitApi";
import { useMutation } from "@tanstack/react-query";
import {
  UserVisitUpdateBookMarkRequest,
  BaseResponse,
  UserPlace,
} from "@/types/dto";
import { useQueryClient } from "@tanstack/react-query";
import { placeKeys, visitKeys } from "@/constants/queryKeys";

export const useBookmark = (
  placeId: number,
  request: UserVisitUpdateBookMarkRequest
) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => visitApi.PATCH_USER_VISIT(placeId, request),
    onSuccess: (response: BaseResponse<UserPlace>) => {
      if (!response.success) return;

      queryClient.invalidateQueries({ queryKey: placeKeys.detail(placeId) });
      queryClient.invalidateQueries({ queryKey: visitKeys.all });
    },
    onError: (error: any) => {
      console.error(error);
    },
  });

  return {
    mutation,
  };
};
