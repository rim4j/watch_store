import React from "react";
import styled from "styled-components";
import { CiMenuFries } from "react-icons/ci";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import CategoryItem from "./CategoryItem";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchFilterProductsByCategory,
  selectFilter,
} from "../features/filteredProducts/filteredProductsSlice";
import { productsByCategoryUrl } from "../utils/url";

const Category = () => {
  const { categories } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelectCategory = (id, title) => {
    navigate("/products");
    dispatch(fetchFilterProductsByCategory(`${productsByCategoryUrl}/${id}`));
    dispatch(selectFilter(title));
  };

  return (
    <Wrapper>
      <div className='containerButton'>
        <div className='center'>
          <CiMenuFries />
          <Link to='products'>
            <span>همه محصولات</span>
          </Link>
        </div>
        <MdKeyboardDoubleArrowDown />
      </div>
      <div className='dialog '>
        {categories.map((item, i) => (
          <React.Fragment key={i}>
            <CategoryItem
              title={item.title}
              image={item.image}
              onClick={() => handleSelectCategory(item.id, item.title)}
            />
            {categories.length - 1 === i ? (
              <div />
            ) : (
              <div className='border-bottom' />
            )}
          </React.Fragment>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  transition: all ease 0.2s;
  z-index: 10;
  .dialog {
    position: absolute;
    border: 1px solid #e6e6e6;
    background-color: #fff;
    left: 0;
    right: 0;
    display: none;
  }
  &:hover {
    .dialog {
      display: block;
    }
  }

  .containerButton {
    background-color: var(--color-accent);
    color: #fff;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      color: white;
    }

    span {
      font-size: 14px;
      margin-left: 30px;
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    .containerButton {
      display: none;
    }
    .dialog {
      display: block;
    }
  }
`;

// const Container = styled.div``;

export default Category;
