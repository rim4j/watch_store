import { useSelector } from "react-redux";
import { ListDesc, Slider } from "./../components";
import { AppStrings } from "../utils/strings";

import styled from "styled-components";

const LandingPage = () => {
  const { sliders } = useSelector((state) => state.home);
  return (
    <Wrapper>
      <div className='center margin-top-lg'>
        <Slider images={sliders} />
      </div>

      {/* details */}
      <ListDesc />

      <h3>{AppStrings.topSells}</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default LandingPage;
