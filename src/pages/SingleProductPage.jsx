import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailsProduct } from "../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detailsProduct } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getDetailsProduct(id));
  }, []);

  return <div>{detailsProduct.title}</div>;
};

export default SingleProductPage;
