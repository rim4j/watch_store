import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  addressProfileUrl,
  userCartUrl,
  userOrderCancelledUrl,
  userOrderReceivedUrl,
  userProcessingOrdersUrl,
} from "../utils/url";

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

export const useFetchOrderProcessing = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["orderProcessing"],
    queryFn: async () => {
      const { data } = await axios.post(
        userProcessingOrdersUrl,
        bodyParameters,
        config
      );
      return data.data;
    },
  });
  return { data, isLoading, error, isError };
};
export const useFetchOrderCancelled = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["orderCancelled"],
    queryFn: async () => {
      const { data } = await axios.post(
        userOrderCancelledUrl,
        bodyParameters,
        config
      );
      return data.data;
    },
  });
  return { data, isLoading, error, isError };
};
export const useFetchOrderReceived = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["orderReceived"],
    queryFn: async () => {
      const { data } = await axios.post(
        userOrderReceivedUrl,
        bodyParameters,
        config
      );
      return data.data;
    },
  });
  return { data, isLoading, error, isError };
};

export const useCartUser = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cartUser"],
    queryFn: async () => {
      const { data } = await axios.post(userCartUrl, bodyParameters, config);
      return data.data;
    },
  });
  return { data, isLoading, error, isError };
};
