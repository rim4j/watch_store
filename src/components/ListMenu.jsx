import styled from "styled-components";
import ListMenuItem from "./ListMenuItem";
import { HiOutlineHome } from "react-icons/hi2";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { FaBlog } from "react-icons/fa";

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
        <ListMenuItem
          key={i}
          onClick={() => console.log("go to " + item.title)}
          title={item.title}
          icon={item.icon}
        />
      ))}
    </Container>
  );
};

const Container = styled.div``;

export default ListMenu;
