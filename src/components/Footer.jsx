import styled from "styled-components";
import logo from "./../assets/png/main_logo.png";
import { AppStrings } from "../utils/strings";
import { GoDotFill } from "react-icons/go";
import FooterItem from "./FooterItem";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import eNamad from "./../assets/png/logo-enamad-1.png";

const col1 = [
  {
    title: "رهگیری سفارش",
    icon: <GoDotFill color='#ff4156' size='12px' />,
  },
  {
    title: "نحوه‌ی ارسال  ",
    icon: <GoDotFill color='#ff4156' size='12px' />,
  },
  {
    title: "قوانین  فروشگاه",
    icon: <GoDotFill color='#ff4156' size='12px' />,
  },
  {
    title: "سوالات پر تکرار",
    icon: <GoDotFill color='#ff4156' size='12px' />,
  },
  {
    title: "درباره‌ی فروشگاه",
    icon: <GoDotFill color='#ff4156' size='12px' />,
  },
  {
    title: "لیست برندگان",
    icon: <GoDotFill color='#ff4156' size='12px' />,
  },
  {
    title: "بلاگ",
    icon: <GoDotFill color='#ff4156' size='12px' />,
  },
];

const col2 = [
  {
    title: "09333333333",
    icon: <MdOutlinePhoneEnabled color='#ff4156' size='18px' />,
  },
  {
    title: "09988888888",
    icon: <MdOutlinePhoneEnabled color='#ff4156' size='18px' />,
  },
  {
    title: "0212222222",
    icon: <FaHeadphones color='#ff4156' size='18px' />,
  },
  {
    title: "www.watchstore@gmail.com",
    icon: <CgMail color='#ff4156' size='18px' />,
  },
];

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <LogoContainer>
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
          <div className='detail-container'>
            <p className='details-watch'>{AppStrings.detailsWatch}</p>
            <p className='time-shop'>{AppStrings.timeShop}</p>
          </div>
        </LogoContainer>
        <div className='footer-col'>
          <h1>دسترسی سریع</h1>
          {col1.map((item, i) => (
            <FooterItem key={i} title={item.title} icon={item.icon} />
          ))}
        </div>
        <div className='footer-col'>
          <h1>راه های ارتباطی</h1>
          {col2.map((item, i) => (
            <FooterItem key={i} title={item.title} icon={item.icon} />
          ))}
        </div>
        <div className='footer-e-namad'>
          <h1>نماد ها</h1>
          <img src={eNamad} alt='' />
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(#e6e6e6, #fff);
  height: 200px;
  width: 100%;
  padding: 4rem;

  .details-watch {
    font-size: 14px;
    line-height: 3rem;
    margin-top: 20px;
    text-align: justify;
    margin-bottom: 10px;
  }
  .time-shop {
    font-size: 12px;
    margin-bottom: 20px;
  }
`;

const LogoContainer = styled.div``;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    .footer-col {
      text-align: center;
    }
  }

  .detail-container {
    padding: 4rem;
  }
  .footer-col {
    margin: 20px;
    h1 {
      font-size: 16px;
      color: #000;
    }
    p {
      font-size: 14px;
      padding: 10px 0;
    }
  }
  .footer-e-namad {
    margin: 20px;
    h1 {
      font-size: 16px;
      color: #000;
    }
    text-align: center;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }

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
