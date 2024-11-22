import IconButton from "./IconButton";
import { CiMenuFries } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

import Logo from "./../assets/png/main_logo.png";

import styled from "styled-components";
import ListMenu from "./ListMenu";

const Navbar = ({ openDrawer }) => {
  const numInCart = "0";

  return (
    <Wrapper>
      <Container>
        <IconButton
          className='hiddenIcon'
          onClick={openDrawer}
          backgroundColor='#fff'
          icon={<CiMenuFries color='#333' size='24px' />}
        />

        <img className='logo' src={Logo} alt='' />
        <SearchInputContainer className='hiddenSearch'>
          <input
            type='text'
            placeholder='جستجوی محصولات'
            className='search-input'
          />
          <IconButton icon={<CiSearch color='#333' size='24px' />} />
        </SearchInputContainer>

        <IconContainer>
          <IconButton
            onClick={() => console.log("icon button")}
            backgroundColor='#fff'
            icon={<FiUser color='#333' size='24px' />}
          />
          <div className=' hidden-fav'>
            <IconButton
              onClick={() => console.log("icon button")}
              backgroundColor='#fff'
              icon={<CiHeart color='#333' size='24px' />}
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

      <ListMenu className='hiddenMenu' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (max-width: 768px) {
    .hiddenMenu {
      display: none;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  @media (min-width: 768px) {
    .hiddenIcon {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .hiddenSearch {
      display: none;
    }
  }

  .logo {
    width: 200px;
    object-fit: cover;
  }
`;
const IconContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    .hidden-fav {
      display: none;
    }
  }
`;
const SearchInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 100px;
  width: 50%;
  align-items: center;

  .search-input {
    outline: none;
    border: none;
    font-size: 14px;
    width: 90%;
  }
`;

export default Navbar;
