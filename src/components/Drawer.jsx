import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import IconButton from "./IconButton";
import { useState } from "react";
import ListMenu from "./ListMenu";
import Category from "./Category";

const Drawer = ({ closeDrawer, open }) => {
  const [category, setCategory] = useState(false);
  return (
    <DrawerContainer>
      <div
        className={open ? "overlay overlayOpen" : "overlay overlayHidden"}
        onClick={closeDrawer}
      />
      <Container className={open ? "animate" : "hidden"}>
        {/* search */}
        <SearchInputContainer>
          <input
            type='text'
            placeholder='جستجوی محصولات'
            className='search-input'
          />
          <IconButton icon={<CiSearch color='#333' size='24px' />} />
        </SearchInputContainer>

        {/* tabs */}
        <TabsContainer>
          <div
            className={category ? "activeTab " : "tab"}
            onClick={() => setCategory(true)}
          >
            <p>دسته بندی ها</p>
          </div>
          <div
            className={!category ? "activeTab " : "tab"}
            onClick={() => setCategory(false)}
          >
            <p>منو</p>
          </div>
        </TabsContainer>

        {category ? <Category /> : <ListMenu />}
      </Container>
    </DrawerContainer>
  );
};

const Container = styled.div`
  top: 0;
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  outline: 0;
  z-index: 1200;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;

  background-color: #ffffff;
  width: 70%;
  flex-shrink: 0;

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  .hidden {
    visibility: hidden;
    width: 240px;
    transform: translateX(240px);
    flex-shrink: 0;
    transition: 325ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  .animate {
    visibility: visible;
    transform: none;

    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
      0px 16px 24px 2px rgba(0, 0, 0, 0.14),
      0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  }
`;

const DrawerContainer = styled.div`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .overlayOpen {
    opacity: 1;
    z-index: 100;
    visibility: visible;
  }

  .overlayHidden {
    opacity: 0;
    z-index: -1;
    visibility: hidden;
    transition: 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

const SearchInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  .search-input {
    outline: none;
    border: none;
    font-size: 14px;
    font-family: vazir;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  .tab {
    background-color: #f5f5f5;
    font-size: 16px;
    width: 100%;
    color: #909090;
    text-align: center;
    border-bottom: 2px solid #e9e9e9;

    p {
      padding: 20px;
    }
    cursor: pointer;

    :hover {
      color: black;
      background-color: #e9e9e9;
    }
  }
  .activeTab {
    color: black;
    background-color: #e9e9e9;
    border-bottom: 2px solid #ff4156;
    background-color: #f5f5f5;
    font-size: 16px;
    width: 100%;
    color: #909090;
    text-align: center;
    p {
      padding: 20px;
    }
    cursor: pointer;
    :hover {
      color: black;
      background-color: #e9e9e9;
    }
  }
`;

export default Drawer;
