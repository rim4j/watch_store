import { useCartUser } from "../hooks/reactQueryCustomHooks";

const CartPage = () => {
  const { data, isLoading } = useCartUser();
  console.log(data);
  return <div>CartPage</div>;
};

export default CartPage;
