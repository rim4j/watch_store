import { useEffect, useState } from "react";
import IconButton from "./IconButton";
import { CiMenuFries } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

import Logo from "./../assets/png/main_logo.png";

import styled from "styled-components";
import ListMenu from "./ListMenu";
import Category from "./Category";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ openDrawer }) => {
  const [scrollY, setScrollY] = useState(0);
  const { token } = useSelector((state) => state.user);
  const { totalCount } = useSelector((state) => state.cart);

  const handleScrollY = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, [scrollY]);

  return (
    <Wrapper>
      <Container>
        <IconButton
          className='hiddenIcon'
          onClick={openDrawer}
          backgroundColor='#fff'
          icon={<CiMenuFries color='#333' size='24px' />}
        />

        <img className='logo' src={Logo} alt='logo' />
        <SearchInputContainer className='hiddenSearch'>
          <input
            type='text'
            placeholder='جستجوی محصولات'
            className='search-input'
          />
          <IconButton icon={<CiSearch color='#333' size='24px' />} />
        </SearchInputContainer>

        <IconContainer>
          <Link to={token === null ? "/login" : "/profile"}>
            <IconButton
              // onClick={() => console.log(scrollY)}
              icon={<FiUser color='#333' size='24px' />}
            />
          </Link>
          <div className=' hidden-fav'>
            <IconButton
              onClick={() => console.log("icon button")}
              icon={<CiHeart color='#333' size='24px' />}
            />
          </div>
          <Link to={token === null ? "/login" : "/cart"}>
            <IconButton
              onClick={() => console.log("icon button")}
              backgroundColor='#ff4156'
              icon={<CiShoppingCart color='#fff' size='24px' />}
              badge={totalCount === 0 ? null : totalCount}
            />
          </Link>
        </IconContainer>
      </Container>

      <div className={`flex hiddenMenu ${scrollY > 100 && "fixed"}`}>
        <Category />
        <ListMenu />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .flex {
    display: flex;
    align-items: center;
  }
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

  @media (max-width: 768px) {
    .logo {
      width: 100px;
      object-fit: cover;
    }
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
  /* border: 1px solid #e6e6e6; */
  border-radius: 100px;
  width: 50%;
  align-items: center;
  padding-right: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);

  .search-input {
    outline: none;
    border: none;
    font-size: 14px;
    width: 90%;
  }
`;

export default Navbar;
