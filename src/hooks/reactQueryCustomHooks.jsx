import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { addressProfileUrl } from "../utils/url";

const token = localStorage.getItem("token");
const config = {
  headers: { Authorization: token },
};

const bodyParameters = {
  key: "value",
};
export const useFetchAddressProfile = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["address"],
    queryFn: async () => {
      const { data } = await axios.post(
        addressProfileUrl,
        bodyParameters,
        config
      );
      return data.data;
    },
  });
  return { data, isLoading, isError, error };
};
