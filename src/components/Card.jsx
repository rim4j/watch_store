import styled from "styled-components";
import { formatPrice } from "./../utils/formatPrice";
import { VscPercentage } from "react-icons/vsc";

const Card = ({
  id,
  title,
  price,
  discount,
  special_expiration,
  discount_price,
  product_count,
  category,
  brand,
  image,
}) => {
  const fprice = formatPrice(price);
  const fDiscountPrice = formatPrice(discount_price);

  return (
    <Container className='scale'>
      <div className='image'>
        <img src={image} alt='عکس' />
      </div>
      <p>{title}</p>
      <div className='details-card'>
        {discount === 0 ? (
          <div />
        ) : (
          <p className='discount'>
            <VscPercentage size='12px' />
            {`${discount}`}
          </p>
        )}
        <div>
          <p className='discount-price'>{`${fDiscountPrice} تومان`}</p>
          {discount === 0 ? (
            <div />
          ) : (
            <p className='price'>{`${fprice} تومان`}</p>
          )}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(#e6e6e6, #fff);
  border-radius: 15px;
  margin: 10px;
  padding: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 200px;
    height: 200px;
  }

  p {
    font-size: 12px;
    color: #000;
  }
  .details-card {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .discount {
    background-color: var(--color-accent);
    width: 40px;
    height: 40px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 50px;
  }
  .discount-price {
    font-size: 14px;
    font-weight: bold;
  }
  .price {
    font-size: 12px;
    color: var(--color-body);
    text-decoration: line-through;
  }
`;
export default Card;
