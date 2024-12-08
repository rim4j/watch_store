import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDetailsProduct } from "../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";
import { Button, Loading, Divider } from "../components";
import { formatPrice } from "../utils/formatPrice";
import { MdOutlineDoneAll } from "react-icons/md";

const SingleProductPage = () => {
  const { detailsProduct, isLoading } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();

  const [selectColor, setSelectColor] = useState({});

  useEffect(() => {
    dispatch(getDetailsProduct(id));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setSelectColor(detailsProduct.colors[0]);
    }
  }, [detailsProduct]);

  const fprice = formatPrice(detailsProduct.price);
  const fDiscountPrice = formatPrice(detailsProduct.discount_price);

  if (isLoading) {
    return (
      <LoadingContainer className=' container '>
        <Loading />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <div>
        <Zoom>
          <img src={detailsProduct.image} alt={detailsProduct.title} />
        </Zoom>
      </div>
      <TitleContainer>
        <h1>{detailsProduct.title}</h1>
        <div className='review'>
          <p className='review-title'>بازدید {detailsProduct.review}</p>
          <p className='comment-title'>
            {detailsProduct.comments?.length} دیدگاه
          </p>
        </div>
        <p className='color-title'>رنگ : {selectColor.title}</p>
        <div className='colors-container'>
          <div className='colors-flex-container'>
            {detailsProduct.colors?.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  setSelectColor(item);
                }}
                className={
                  selectColor.code === item.code
                    ? "color-item-active"
                    : "color-item"
                }
                style={{ background: item.code }}
              />
            ))}
          </div>
        </div>
      </TitleContainer>
      <AddToCartContainer>
        <div className='details-price'>
          {detailsProduct.discount === 0 ? (
            <div />
          ) : (
            <p className='discount'>{`${detailsProduct.discount}%`}</p>
          )}
          <div>
            <p className='discount-price'>{`${fDiscountPrice} تومان`}</p>
            {detailsProduct.discount === 0 ? (
              <div />
            ) : (
              <p className='price'>{`${fprice} تومان`}</p>
            )}
          </div>
        </div>
        <Button title='افزودن به سبد' full />
        <div className='guaranty-container'>
          <MdOutlineDoneAll size='20px' color='#000' />
          <p className='guaranty-text'>{detailsProduct.guaranty}</p>
        </div>
        <Divider />
        <p className='text-category'>{` دسته بندی : ${detailsProduct.category}`}</p>
        <p className='text-category'>{`برند : ${detailsProduct.brand}`}</p>
      </AddToCartContainer>
    </Container>
  );
};

const LoadingContainer = styled.div`
  /* height: 30vh; */
  padding-bottom: 4rem;
`;

const Container = styled.div`
  display: flex;
  padding: 4rem 0;
`;
const TitleContainer = styled.div`
  h1 {
    font-size: 18px;
  }
  p {
    font-size: 14px;
    color: var(--color-body);
  }
  .review {
    display: flex;
    margin-bottom: 20px;
  }
  .review-title {
    padding: 10px;
    font-size: 12px;
  }
  .comment-title {
    background-color: var(--color--light-grey);
    padding: 10px;
    border-radius: 25px;
    font-size: 12px;
  }
  .color-title {
    font-size: 18px;
    color: black;
    margin-bottom: 20px;
  }
  .colors-container {
    background-color: var(--color--light-grey);
    border-radius: 10px;
    display: inline-block;
  }
  .colors-flex-container {
    display: flex;
    justify-content: space-between;
  }
  .color-item {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    margin: 20px 10px;
  }
  .color-item-active {
    margin: 20px 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    border: 5px solid #17bfd3;
  }
`;
const AddToCartContainer = styled.div`
  padding: 20px 40px;
  border-radius: 10px;
  margin: 0 auto;
  background-color: var(--color--light-grey);
  width: 25vw;

  .details-price {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
    margin-bottom: 20px;
  }
  .discount {
    background-color: var(--color-accent);
    width: 40px;
    height: 40px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 50px;
    font-size: 12px;
  }
  .discount-price {
    font-size: 14px;
    font-weight: bold;
    color: #000;
  }
  .price {
    font-size: 12px;
    color: var(--color-body);
    text-decoration: line-through;
  }
  .guaranty-text {
    font-size: 12px;
    color: #000;
    margin-right: 10px;
  }
  .guaranty-container {
    display: flex;
    align-items: center;
    margin: 15px 0;
  }
  .text-category {
    font-size: 12px;
  }
`;

export default SingleProductPage;
