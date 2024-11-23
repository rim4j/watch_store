import styled from "styled-components";
import { CiMenuFries } from "react-icons/ci";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import CategoryItem from "./CategoryItem";

const Category = ({ className }) => {
  return (
    <Wrapper>
      <div className={`${className} containerButton`}>
        <div className='center'>
          <CiMenuFries />
          <span>همه محصولات</span>
        </div>
        <MdKeyboardDoubleArrowDown />
      </div>
      <div className='dialog '>
        <CategoryItem />
        <div className='border-bottom' />
        <CategoryItem />
        <div className='border-bottom' />
        <CategoryItem />
        <div className='border-bottom' />
        <CategoryItem />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  transition: all ease 0.2s;
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
