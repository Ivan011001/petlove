"use server";

import { axiosInstance } from "@/services";

export const getOptions = async (type: string): Promise<string[]> => {
  try {
    const response = await axiosInstance.get(`/notices/${type}`);

    return response.data;
  } catch (error: any) {
    return error.message;
  }
};
