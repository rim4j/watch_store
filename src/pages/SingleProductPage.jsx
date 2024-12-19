import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsProduct } from "../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";
import { Button, Loading, Divider } from "../components";
import { formatPrice } from "../utils/formatPrice";
import { MdOutlineDoneAll } from "react-icons/md";
import { VscPercentage } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";

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
    <div>
      <Container>
        <div className='res-width'>
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
                <p className='discount'>
                  <VscPercentage size='18px' />
                  {`${detailsProduct.discount}`}
                </p>
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
        </div>
      </Container>

      {/* details */}
      <DetailsContainer>
        <h2>معرفی محصول</h2>
        <div
          className='desc'
          dangerouslySetInnerHTML={{ __html: detailsProduct.description }}
        ></div>
        <div
          className='desc'
          dangerouslySetInnerHTML={{ __html: detailsProduct.discussion }}
        ></div>
        <Divider />
        <h2 className='property-title'>مشخصات</h2>
        {detailsProduct.properties.map((item, i) => (
          <div key={i} className='properties-container'>
            <p className='property'>{item.property}:</p>
            <p className='value'>{item.value}</p>
          </div>
        ))}
        <Divider />

        <h2 className='property-title'>دیدگاه</h2>
        {detailsProduct.comments.map((item, i) => (
          <div key={i} className='comments-container'>
            <div className='user-container'>
              <FaUserCircle size='28px' />
              <p className='user'>
                {item.user === null ? "ناشناس" : item.user}
              </p>
            </div>
            <p className='comment'>{item.body}</p>
          </div>
        ))}
        <div className='comment-btn-container'>
          <input
            type='text'
            className='input-comment'
            placeholder='نظر خود را درباره این کالا با کاربران دیگر به اشتراک بگذارید ...'
          />
          <Button title='ثبت دیدگاه' />
        </div>
      </DetailsContainer>
    </div>
  );
};

const LoadingContainer = styled.div`
  padding-bottom: 4rem;
`;

const Container = styled.div`
  display: flex;
  padding: 4rem 0;
  .res-width {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    .res-width {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }
  }
`;
const TitleContainer = styled.div`
  margin-left: 2rem;
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
    margin-bottom: 1rem;
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
    padding: 8px;
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

const DetailsContainer = styled.div`
  .title {
    font-size: 24px;
  }
  .desc {
    font-size: 14px;
    line-height: 3rem;
  }
  .properties-container {
    display: flex;
    margin-top: 4rem;
    margin-bottom: 4rem;
    align-items: center;

    p {
      font-size: 14px;
    }
  }
  .property {
    width: 20vw;
  }
  .property-title {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  .comments-container {
    display: flex;
    margin-top: 4rem;
    margin-bottom: 4rem;
    align-items: center;

    p {
      font-size: 14px;
    }
  }
  .user-container {
    display: flex;
    align-items: center;
    width: 20vw;
  }
  .user {
    font-size: 14px;
    margin-right: 1rem;
  }
  .comment {
    width: 100%;
    padding: 2rem;
    border-radius: 2rem 0 2rem 0;
    background-color: var(--color--light-grey);
    color: black;
  }
  .comment-btn-container {
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
  }
  .input-comment {
    padding: 15px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    outline: none;
    transition: all 0.3s ease;
    &:focus {
      transition: all 0.3s ease;
      border-color: var(--color-accent);
    }
  }
`;

export default SingleProductPage;
