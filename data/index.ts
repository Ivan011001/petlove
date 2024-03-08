import { axiosInstance } from "@/services";
import { IMetaPagination, INews, INotice } from "@/types";

interface INoticesSearchProp {
  page?: number;
  search?: string;
  category?: string;
  gender?: string;
  type?: string;
  location?: string;
  popular?: boolean;
  unpopular?: boolean;
  cheap?: boolean;
  expensive?: boolean;
}

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

export const getNotices = async ({
  page,
  search,
  category,
  gender,
  type,
  location,
  popular,
  unpopular,
  cheap,
  expensive,
}: INoticesSearchProp): Promise<{
  data: INotice[];
  meta: IMetaPagination;
}> => {
  try {
    const response = await axiosInstance(
      `/notices?page=${page}&location=${location}&search=${search}&category=${category}&type=${type}&gender=${gender}&unpopular=${unpopular}&popular=${popular}&cheap=${cheap}&expensive=${expensive}`
    );

    return response.data;
  } catch (error: any) {
    return error.message;
  }
};
