import { useSelector } from "react-redux";
import { AccordionApp, Button, Card, ListDesc, Slider } from "./../components";
import { AppStrings } from "../utils/strings";
import { FaArrowLeft } from "react-icons/fa";
import question from "./../assets/svg/questions.svg";
import { accordionData } from "./../utils/strings";

import styled from "styled-components";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const { sliders, most_seller_products, amazing_products, newest_products } =
    useSelector((state) => state.home);

  return (
    <Wrapper>
      <div className='center margin-top-lg'>
        <Slider images={sliders} />
      </div>

      {/* details */}
      <ListDesc />

      {/* top sells */}
      <h3>{AppStrings.topSells}</h3>
      <div className='products-container'>
        {most_seller_products.map((item, i) => (
          <Link key={i} to={`products/${item.id}`}>
            <Card {...item} />
          </Link>
        ))}
      </div>

      <div className='btn-container'>
        <Button title='مشاهده همه' outline icon={<FaArrowLeft />} />
      </div>

      {/* amazing products */}
      <h3>{AppStrings.amazing}</h3>
      <div className='products-container'>
        {amazing_products.map((item, i) => (
          <Link key={i} to={`products/${item.id}`}>
            <Card {...item} />
          </Link>
        ))}
      </div>

      <div className='btn-container'>
        <Button title='مشاهده همه' outline icon={<FaArrowLeft />} />
      </div>

      {/* newest products */}
      <h3>{AppStrings.newestProduct}</h3>
      <div className='products-container'>
        {newest_products.map((item, i) => (
          <Link key={i} to={`products/${item.id}`}>
            <Card {...item} />
          </Link>
        ))}
      </div>

      <div className='btn-container'>
        <Button title='مشاهده همه' outline icon={<FaArrowLeft />} />
      </div>

      {/* accordion */}
      <div className='question-container'>
        <img src={question} alt='سوالات' />
        <div>
          {accordionData.map((item, i) => (
            <AccordionApp key={i} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .products-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    margin-bottom: 4rem;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 4rem;
    }
  }
  .btn-container {
    text-align: left;
    margin-left: 10px;
  }
  .question-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    img {
      width: 50rem;
      height: 50rem;
    }
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 30rem;
        height: 30rem;
      }
    }
  }
`;

export default LandingPage;
