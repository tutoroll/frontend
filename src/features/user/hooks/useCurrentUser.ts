import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../api/getUser";

export const useCurrentUser = () => {
  return useQuery({ queryFn: getCurrentUser, queryKey: ["curUser"] });
};
