import styled from "styled-components";
import logo from "./../assets/png/main_logo.png";
import { AppStrings } from "../utils/strings";

const Footer = () => {
  return (
    <Wrapper>
      <Container className='container'>
        <div>
          <Logo>
            <img src={logo} alt='' />
            <div className='title-container'>
              <div className='title'>
                <h1 className='shop'>فروشگاه</h1>
                <h1 className='watch'>ساعت</h1>
              </div>
              <p>www.watchstore.ir</p>
            </div>
          </Logo>
          <div>
            <p className='details-watch'>{AppStrings.detailsWatch}</p>
            <p className='time-shop'>{AppStrings.timeShop}</p>
          </div>
        </div>
        <div>col</div>
        <div>col2</div>
        <div>namad</div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(#e6e6e6, #fff);
  height: 200px;

  .details-watch {
    font-size: 14px;
    line-height: 3rem;
    margin-top: 20px;
    text-align: justify;
    margin-bottom: 10px;
  }
  .time-shop {
    font-size: 12px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  .title {
    display: flex;
  }
  .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .shop {
    font-size: 28px;
    letter-spacing: 2px;
  }
  .watch {
    font-size: 28px;
    letter-spacing: 2px;
    color: var(--color-accent);
  }

  p {
    color: var(--color--body);
    cursor: pointer;
  }

  img {
    width: 200px;
    object-fit: cover;
    margin-left: 2rem;
  }
`;

export default Footer;
