import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../features/filteredProducts/filteredProductsSlice";
import SearchedItem from "./SearchedItem";
import searchImg from "./../assets/svg/search.svg";

const Navbar = ({ openDrawer }) => {
  const [scrollY, setScrollY] = useState(0);
  const { token } = useSelector((state) => state.user);
  const { totalCount } = useSelector((state) => state.cart);
  const { filters, filteredProducts } = useSelector(
    (state) => state.filteredProducts
  );
  const dispatch = useDispatch();

  const handleScrollY = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, [scrollY]);

  const handleSearch = (text) => {
    dispatch(searchProduct(text));
  };
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
          <div className='container'>
            <input
              type='text'
              placeholder='جستجوی محصولات'
              className='search-input'
              value={filters.text}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <IconButton icon={<CiSearch color='#333' size='24px' />} />
          </div>

          {filters.text && (
            <div className='search-container'>
              {filteredProducts.length === 0 ? (
                <div className='empty-search-container'>
                  <img className='search-img' src={searchImg} alt='' />

                  <p>محصولی با این مشخصات یافت نشد.</p>
                </div>
              ) : (
                filteredProducts.map((item, i) => (
                  <React.Fragment key={i}>
                    <SearchedItem {...item} />
                  </React.Fragment>
                ))
              )}
            </div>
          )}
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
  .search-input {
    outline: none;
    border: none;
    font-size: 14px;
    width: 90%;
  }
  .container {
    display: flex;
    justify-content: space-between;
    border-radius: 100px;
    width: 30vw;
    align-items: center;
    padding-right: 10px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  }
  .search-container {
    background-color: white;
    position: absolute;
    width: 30vw;
    height: 40vh;
    overflow-y: auto;
    z-index: 200;
    border-radius: 8px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    .empty-search-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .search-img {
        width: 20rem;
        height: 20rem;
      }
    }
  }
`;

export default Navbar;
