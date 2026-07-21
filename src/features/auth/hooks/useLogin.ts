import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { loginUser } from "../api/loginApi";

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      router.replace("/user/me");
    },
  });
};
