import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDetailsProduct } from "../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";
import { Loading } from "../components";

const SingleProductPage = () => {
  const { detailsProduct, isLoading } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();

  const [selectColor, setSelectColor] = useState();

  useEffect(() => {
    dispatch(getDetailsProduct(id));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setSelectColor(detailsProduct.colors[0].code);
    }
  }, [detailsProduct]);

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
        <p className='color-title'>رنگ : </p>
        <div className='colors-container'>
          {detailsProduct.colors?.map((item, i) => (
            <div
              onClick={() => {
                setSelectColor(item.code);
              }}
              key={i}
              // className='color-item'
              className={
                selectColor === item.code ? "color-item-active" : "color-item"
              }
              style={{ background: item.code }}
            />
          ))}
        </div>
      </TitleContainer>
      <div>add to cart</div>
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
  }
  .colors-container {
    display: flex;
  }
  .color-item {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    cursor: pointer;
  }
  .color-item-active {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    cursor: pointer;
    border: 5px solid #17bfd3;
  }
`;

export default SingleProductPage;
