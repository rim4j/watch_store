import IconButton from "./IconButton";
import { CiMenuFries } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import Logo from "./../assets/png/main_logo.png";

import styled from "styled-components";

const Navbar = ({ openDrawer }) => {
  const numInCart = "0";

  return (
    <Container>
      <IconButton
        onClick={openDrawer}
        backgroundColor='#fff'
        icon={<CiMenuFries color='#333' size='24px' />}
      />

      <img className='logo' src={Logo} alt='' />

      <IconContainer>
        <div className='margin-left-icon '>
          <IconButton
            onClick={() => console.log("icon button")}
            backgroundColor='#fff'
            icon={<FiUser color='#333' size='24px' />}
          />
        </div>
        <IconButton
          onClick={() => console.log("icon button")}
          backgroundColor='#ff4156'
          icon={<CiShoppingCart color='#fff' size='24px' />}
          badge={numInCart}
        />
      </IconContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  .logo {
    width: 150px;
    object-fit: cover;
  }
`;
const IconContainer = styled.div`
  display: flex;
  .margin-left-icon {
    margin-left: 10px;
  }
`;

export default Navbar;
