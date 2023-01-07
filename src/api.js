import axios from "@nuxtjs/axios";

export const getMe = async () => {
  const response = await axios.get(`${process.env.baseURL}/api/users/me`);
  console.log(response.data);
};
