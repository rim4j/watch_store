import styled from "styled-components";
import { useCartUser } from "../hooks/reactQueryCustomHooks";
import { Button, Divider, IconButton, Loading } from "../components";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { formatPrice } from "../utils/formatPrice";

const CartPage = () => {
  const { data, isLoading } = useCartUser();
  console.log(data);

  if (isLoading) {
    return (
      <LoadingContainer className=' container '>
        <Loading />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <div className='title-container'>
        <h1 className='title'>سبد خرید</h1>
        <h1 className='title'>
          جمع کل سبد خرید : {formatPrice(data.cart_total_price)}
        </h1>
      </div>

      {data.user_cart.map((item, i) => (
        <div key={i}>
          <CartItem>
            <img src={item.image} alt='عکس' />
            <p className='title-product'>{item.product}</p>
            <div className='icon-container'>
              <IconButton icon={<MdArrowForwardIos />} />
              <p>{item.count}</p>
              <IconButton icon={<MdArrowBackIos />} />
            </div>
            <p className='price'>قیمت : {formatPrice(item.discount_price)}</p>
            <Button title='حذف' outline />
          </CartItem>
          <Divider />
        </div>
      ))}
    </Container>
  );
};
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

  margin: 4rem;
  img {
    width: 10rem;
    height: 10rem;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  .title-product {
    color: black;
    width: 400px;
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .price {
    color: black;
    margin-right: 4rem;
  }
`;

export default CartPage;
