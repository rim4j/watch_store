import { useSelector } from "react-redux";
import { Slider } from "./../components";
const LandingPage = () => {
  const { sliders } = useSelector((state) => state.home);
  return (
    <div>
      <div className='center margin-top-sm'>
        <Slider images={sliders} />
      </div>
    </div>
  );
};

export default LandingPage;
