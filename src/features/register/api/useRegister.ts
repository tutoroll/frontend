import { useMutation } from "@tanstack/react-query";
import { registerUser } from "./registerApi";
import { useRouter } from "next/navigation";

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
