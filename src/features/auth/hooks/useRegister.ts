import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { registerUser } from "../api/registerApi";

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log(data);
      router.push("/login");
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
