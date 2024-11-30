import { FaWallet } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { IoIosCloudDone } from "react-icons/io";
import { FaRocket } from "react-icons/fa";
import DescIcon from "./DescIcon";
import styled from "styled-components";

const items = [
  {
    title: "پرداخت امن از معتبر ترین درگاه های بانکی",
    icon: <FaWallet color='#918ca4' size='24px' />,
  },
  {
    title: "بسته بندی ایمن و لاکچری",
    icon: <FaBasketShopping color='#918ca4' size='24px' />,
  },
  {
    title: "پشتیبانی از ۱۱ صبح تا ۸ شب",
    icon: <FaHeadphones color='#918ca4' size='24px' />,
  },
  {
    title: "یکسال گارانتی به همراه ۵ سال خدمات پس از فروش",
    icon: <IoIosCloudDone color='#918ca4' size='24px' />,
  },
  {
    title: "تحویل سریع",
    icon: <FaRocket color='#918ca4' size='24px' />,
  },
];

const ListDesc = () => {
  return (
    <Container className='margin-top-md'>
      {items.map((item, i) => (
        <DescIcon key={i} title={item.title} icon={item.icon} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px;
  }
`;

export default ListDesc;
