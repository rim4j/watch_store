import styled from "styled-components";
import {
  useAddToCart,
  useDeleteFromCart,
  useRemoveFromCart,
} from "../hooks/reactQueryCustomHooks";
import { Button, Divider, IconButton, Loading } from "../components";

import { formatPrice } from "../utils/formatPrice";
import emptyCart from "./../assets/svg/empty_cart.svg";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../features/cart/cartSlice";

const CartPage = () => {
  // const { data, isLoading } = useCartUser();
  const { cart, isLoading, totalAmount } = useSelector((state) => state.cart);
  const { addToCart } = useAddToCart();
  const { removeFromCart } = useRemoveFromCart();
  const { deleteFromCart } = useDeleteFromCart();
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <LoadingContainer className=' container '>
        <Loading />
      </LoadingContainer>
    );
  }

  if (cart.length === 0) {
    return (
      <EmptyContainer>
        <h1>سبد خرید شما خالی است</h1>
        <img src={emptyCart} alt='' />
      </EmptyContainer>
    );
  }

  return (
    <Container>
      <div className='title-container'>
        <h1 className='title'>سبد خرید</h1>
        <h1 className='title'>جمع کل سبد خرید : {formatPrice(totalAmount)}</h1>
      </div>

      {cart.map((item, i) => (
        <div key={i}>
          <CartItem>
            <img src={item.image} alt='عکس' />
            <p className='title-product'>{item.product}</p>
            <div className='icon-container'>
              <IconButton
                icon={<FaPlus />}
                onClick={() => {
                  addToCart(item.product_id);
                }}
              />
              <p className='item-count'>{item.count}</p>
              <IconButton
                icon={<FaMinus />}
                onClick={() => removeFromCart(item.product_id)}
              />
            </div>
            <p className='price'>قیمت : {formatPrice(item.discount_price)}</p>
            <Button
              title='حذف'
              outline
              onClick={() => dispatch(removeItem(item.product_id))}
            />
          </CartItem>

          {cart.length - 1 === i ? null : <Divider />}
        </div>
      ))}
    </Container>
  );
};

const EmptyContainer = styled.div`
  margin: 4rem;
  text-align: center;
  h1 {
    font-size: 24px;
    margin-bottom: 4rem;
  }
  img {
    width: 40rem;
  }
`;
const LoadingContainer = styled.div`
  padding-bottom: 4rem;
`;

const Container = styled.div`
  .title {
    font-size: 22px;
    margin: 8rem 0 4rem 0;
  }
  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 4rem 0 4rem;
  }
`;

const CartItem = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    .price {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
  .item-count {
    color: #000;
  }

  margin: 4rem;
  img {
    width: 15rem;
    height: 15rem;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  .title-product {
    color: black;
    width: 300px;
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .price {
    color: black;
    margin-right: 4rem;
    width: 200px;
  }
`;

export default CartPage;
