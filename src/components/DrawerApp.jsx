import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Drawer from "react-modern-drawer";
import styled from "styled-components";
import Category from "./Category";
import IconButton from "./IconButton";
import ListMenu from "./ListMenu";

import "react-modern-drawer/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../features/filteredProducts/filteredProductsSlice";

const DrawerApp = ({ closeDrawer, open }) => {
  const [category, setCategory] = useState(false);
  const { filters } = useSelector((state) => state.filteredProducts);
  const dispatch = useDispatch();

  const handleSearch = (text) => {
    dispatch(searchProduct(text));
  };

  return (
    <Drawer open={open} onClose={closeDrawer} direction='right' size='80vw'>
      {/* search */}
      <SearchInputContainer>
        <input
          type='text'
          placeholder='جستجوی محصولات'
          className='search-input'
          value={filters.text}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <IconButton
          icon={<CiSearch color='#333' size='24px' />}
          onClick={closeDrawer}
        />
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

      {category ? (
        <Category closeDrawer={closeDrawer} />
      ) : (
        <ListMenu closeDrawer={closeDrawer} />
      )}
    </Drawer>
  );
};

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

export default DrawerApp;
