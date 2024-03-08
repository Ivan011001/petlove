import { axiosInstance } from "@/services";
import { IMetaPagination, INews } from "@/types";
import { string } from "yup";

export const getOptions = async (type: string) => {
  try {
    const response = await axiosInstance.get(`/notices/${type}`);

    return response.data;
  } catch (error: any) {
    return error.message;
  }
};

export const getNews = async (
  page: number,
  search: string
): Promise<{
  data: INews[];
  meta: IMetaPagination;
}> => {
  try {
    const response = await axiosInstance.get(
      `/news?page=${page}&search=${search}`
    );

    return response.data;
  } catch (error: any) {
    return error.message;
  }
};

export const getPets = async () => {};
