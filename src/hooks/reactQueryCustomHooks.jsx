import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  addCommentUrl,
  addressProfileUrl,
  addToCartUrl,
  deleteFromCartUrl,
  removeFromCartUrl,
  userCartUrl,
  userOrderCancelledUrl,
  userOrderReceivedUrl,
  userProcessingOrdersUrl,
} from "../utils/url";
import { toast } from "react-toastify";

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
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["cart"],
    refetchOnWindowFocus: "always",
    refetchOnMount: true,

    queryFn: async () => {
      const { data } = await axios.post(userCartUrl, bodyParameters, config);
      return data.data;
    },
  });
  return { data, isLoading, error, isError, refetch };
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  const { mutate: addToCart } = useMutation({
    mutationFn: (id) => {
      const productId = {
        product_id: id,
      };
      axios.post(addToCartUrl, productId, config);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
    onError: (e) => {
      console.log(e);
    },
  });
  return { addToCart };
};

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();

  const { mutate: removeFromCart } = useMutation({
    mutationFn: (id) => {
      const productId = {
        product_id: id,
      };
      axios.post(removeFromCartUrl, productId, config);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (e) => {
      console.log(e);
    },
  });
  return { removeFromCart };
};
export const useDeleteFromCart = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteFromCart } = useMutation({
    mutationFn: (id) => {
      const productId = {
        product_id: id,
      };
      axios.post(deleteFromCartUrl, productId, config);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("محصول با موفقیت از سبد خرید حذف شد");
    },
    onError: (e) => {
      console.log(e);
    },
  });
  return { deleteFromCart };
};
export const useAddComment = () => {
  const queryClient = useQueryClient();
  const { mutate: addComment } = useMutation({
    mutationFn: (comment) => {
      const genComment = {
        product_id: comment.productId,
        body: comment.comment,
      };
      axios.post(addCommentUrl, genComment, config);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment"] });
      toast.success(" نظر ثبت شد و پس از تایید نمایش داده خواهد شد");
    },
    onError: (e) => {
      console.log(e);
    },
  });
  return { addComment };
};
