import api from "./api";

export const registerUser = async (
  data: {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
  }
) => {
  return api.post(
    "/auth/create/users/",
    {
      ...data,
      role: "user",
    }
  );
};