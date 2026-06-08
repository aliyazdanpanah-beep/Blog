import api from "./api";

export const createArticle = async (
  title: string,
  description: string,
  img: string
) => {
  return api.post(
    "/user/create/articel/",
    {
      title,
      description,
      img,
    }
  );
};