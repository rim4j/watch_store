import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  fetchFilterProducts,
  fetchFilterProductsByBrand,
  selectFilter,
  fetchFilterProductsByCategory,
} from "../features/filteredProducts/filteredProductsSlice";
import { productsReview } from "../utils/strings";
import {
  productsByBrandUrl,
  allProductsUrl,
  productsByCategoryUrl,
} from "../utils/url";

const FiltersProducts = ({ closeModal }) => {
  const { brands, filters } = useSelector((state) => state.filteredProducts);
  const { categories } = useSelector((state) => state.home);

  const dispatch = useDispatch();

  const handleClickFilters = (title) => {
    dispatch(selectFilter(title));
    if (title === "همه محصولات") {
      dispatch(fetchFilterProducts(allProductsUrl));
    }
  };

  return (
    <FilterContainer>
      <div className='brand-container'>
        <p className='title'>فیلترها:</p>
        <p
          onClick={() => {
            handleClickFilters("همه محصولات");
            closeModal();
          }}
          className={`brand-item ${
            filters.selectFilter === "همه محصولات"
              ? "active-brand"
              : "brand-item"
          }`}
        >
          همه محصولات
        </p>
        {brands.map((item, i) => (
          <p
            key={i}
            onClick={() => {
              handleClickFilters(item.title);
              closeModal();
              dispatch(
                fetchFilterProductsByBrand(`${productsByBrandUrl}/${item.id}`)
              );
            }}
            className={`brand-item ${
              filters.selectFilter === item.title
                ? "active-brand"
                : "brand-item"
            }`}
          >
            {item.title}
          </p>
        ))}
        <p className='title'>بازدید‌:</p>

        {productsReview.map((item, i) => (
          <p
            key={i}
            onClick={() => {
              handleClickFilters(item.title);
              closeModal();

              dispatch(fetchFilterProducts(item.url));
            }}
            className={`brand-item ${
              filters.selectFilter === item.title
                ? "active-brand"
                : "brand-item"
            }`}
          >
            {item.title}
          </p>
        ))}

        <p className='title'>دسته بندی : </p>
        {categories.map((item, i) => (
          <p
            key={i}
            onClick={() => {
              handleClickFilters(item.title);
              closeModal();

              dispatch(
                fetchFilterProductsByCategory(
                  `${productsByCategoryUrl}/${item.id}`
                )
              );
            }}
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
  );
};
const FilterContainer = styled.div`
  @media (max-width: 768px) {
    .brand-container {
      border: none !important;
    }
  }

  flex: 1;
  margin-left: 2rem;
  margin-bottom: 2rem;
  .title {
    font-size: 16px;
    color: black;
    padding: 2rem;
  }
  .brand-container {
    border: 1px solid var(--color--light-grey);
    border-radius: 8px;
    padding: 2rem;
    background-color: white;
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

export default FiltersProducts;
