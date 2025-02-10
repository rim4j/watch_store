import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getBrands,
  selectFilter,
} from "../features/filteredProducts/filteredProductsSlice";

const ProductsPage = () => {
  const { brands, isLoadingBrand, filters } = useSelector(
    (state) => state.filteredProducts
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  }, []);
  return (
    <Wrapper>
      <FilterContainer>
        <div className='brand-container'>
          <p className='title'>فیلترها:</p>
          {brands.map((item, i) => (
            <p
              key={i}
              onClick={() => dispatch(selectFilter(item.title))}
              className={`brand-item ${
                filters.selectFilter === item.title
                  ? "active-brand"
                  : "brand-item"
              }`}
            >
              {item.title}
            </p>
          ))}
        </div>
      </FilterContainer>
      <ProductsContainer>
        <p>products container</p>
      </ProductsContainer>
    </Wrapper>
  );
};

export default ProductsPage;
const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
`;
const FilterContainer = styled.div`
  flex: 1;
  border-radius: 2px;
  margin-left: 2rem;
  margin-bottom: 2rem;
  border: 1px solid var(--color--light-grey);
  border-radius: 8px;
  .title {
    font-size: 16px;
    color: black;
    padding: 2rem;
  }
  .brand-container {
    margin: 2rem;
  }
  .brand-item {
    font-size: 14px;
    cursor: pointer;
    color: var(--color-body);
    margin-bottom: 1rem;
    border-bottom: 1px solid transparent;
  }
  .active-brand {
    border-bottom: 1px solid var(--color-body);
  }
`;
const ProductsContainer = styled.div`
  background-color: green;
  flex: 4;
`;
