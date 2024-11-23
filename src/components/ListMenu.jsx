import styled from "styled-components";
import ListMenuItem from "./ListMenuItem";
import { HiOutlineHome } from "react-icons/hi2";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { FaBlog } from "react-icons/fa";

import { Link } from "react-router-dom";
import { CgDanger } from "react-icons/cg";

const listMenuData = [
  {
    title: "خانه",
    path: "/",
    icon: <HiOutlineHome />,
  },
  {
    title: "خرید اقساطی",
    path: "/",
    icon: <CgDanger />,
  },
  {
    title: "روش ارسال",
    path: "/",
    icon: <CiDeliveryTruck />,
  },
  {
    title: "بلاگ",
    path: "/",
    icon: <FaBlog />,
  },
  {
    title: "تماس با ما",
    path: "/",
    icon: <PiPhoneCallLight />,
  },
];

const ListMenu = () => {
  return (
    <Container>
      {listMenuData.map((item, i) => (
        <Link key={i} to={item.path}>
          <ListMenuItem
            onClick={() => console.log("go to " + item.title)}
            title={item.title}
            icon={item.icon}
          />
        </Link>
      ))}
    </Container>
  );
};

const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export default ListMenu;
