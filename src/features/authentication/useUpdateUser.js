import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    //mutationFn 'ler sadece 1 argüman alabiliyor
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account succesfully updated");
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateUser, isUpdating };
}
