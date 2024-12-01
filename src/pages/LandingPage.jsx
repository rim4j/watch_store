import { useSelector } from "react-redux";
import { Button, Card, ListDesc, Slider } from "./../components";
import { AppStrings } from "../utils/strings";
import { FaArrowLeft } from "react-icons/fa";

import styled from "styled-components";

const LandingPage = () => {
  const { sliders, most_seller_products } = useSelector((state) => state.home);
  return (
    <Wrapper>
      <div className='center margin-top-lg'>
        <Slider images={sliders} />
      </div>

      {/* details */}
      <ListDesc />

      {/* top sells */}
      <h3>{AppStrings.topSells}</h3>
      <div className='most-seller-container'>
        {most_seller_products.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
      <div className='btn-container'>
        <Button title='مشاهده همه' outline icon={<FaArrowLeft />} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .most-seller-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    margin-bottom: 4rem;
  }
  .btn-container {
    text-align: left;
    margin-left: 10px;
  }
`;

export default LandingPage;
