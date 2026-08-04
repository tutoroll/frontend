import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../api/getUser";

export const currentUserQueryKey = "curUser";

export const useCurrentUser = () => {
  return useQuery({
    queryFn: getCurrentUser,
    queryKey: [currentUserQueryKey],
    staleTime: 5 * 60 * 1000, // 5 min
  });
};
