import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  fetchFilterProducts,
  fetchFilterProductsByBrand,
  fetchFilterProductsByCategory,
  getBrands,
  selectFilter,
} from "../features/filteredProducts/filteredProductsSlice";
import { productsReview } from "../utils/strings";
import {
  allProductsUrl,
  cheapestProductsUrl,
  mostExpensiveProductsUrl,
  mostViewedProductsUrl,
  newestProductsUrl,
  productsByBrandUrl,
  productsByCategoryUrl,
} from "../utils/url";
import { Link } from "react-router-dom";
import { Card, Loading } from "./../components";

const ProductsPage = () => {
  const { brands, isLoadingBrand, filters, filteredProducts, isLoading } =
    useSelector((state) => state.filteredProducts);
  const { categories } = useSelector((state) => state.home);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
    if (filters.selectFilter === "همه محصولات") {
      dispatch(fetchFilterProducts(allProductsUrl));
    }
  }, []);

  const handleClickFilters = (title) => {
    dispatch(selectFilter(title));
    if (title === "همه محصولات") {
      dispatch(fetchFilterProducts(allProductsUrl));
    }
    if (title === "ورساچه") {
      dispatch(fetchFilterProductsByBrand(`${productsByBrandUrl}/1`));
    }
    if (title === "کاسیو") {
      dispatch(fetchFilterProductsByBrand(`${productsByBrandUrl}/3`));
    }
    if (title === "سیتیزن") {
      dispatch(fetchFilterProductsByBrand(`${productsByBrandUrl}/4`));
    }
    if (title === "اوماکس") {
      dispatch(fetchFilterProductsByBrand(`${productsByBrandUrl}/5`));
    }
    if (title === "سیکو") {
      dispatch(fetchFilterProductsByBrand(`${productsByBrandUrl}/6`));
    }
    if (title === "جدید ترین محصولات") {
      dispatch(fetchFilterProducts(newestProductsUrl));
    }
    if (title === "ارزان ترین محصولات") {
      dispatch(fetchFilterProducts(cheapestProductsUrl));
    }
    if (title === "پر بازدید ترین محصولات") {
      dispatch(fetchFilterProducts(mostViewedProductsUrl));
    }
    if (title === "گران ترین محصولات") {
      dispatch(fetchFilterProducts(mostExpensiveProductsUrl));
    }
    if (title === "ساعت مردانه") {
      dispatch(fetchFilterProductsByCategory(`${productsByCategoryUrl}/1`));
    }
    if (title === "ساعت اسپورت") {
      dispatch(fetchFilterProductsByCategory(`${productsByCategoryUrl}/2`));
    }
    if (title === "ساعت زنانه") {
      dispatch(fetchFilterProductsByCategory(`${productsByCategoryUrl}/3`));
    }
    if (title === "ساعت دیجیتال") {
      dispatch(fetchFilterProductsByCategory(`${productsByCategoryUrl}/4`));
    }
  };

  return (
    <Wrapper>
      <FilterContainer>
        <div className='brand-container'>
          <p className='title'>فیلترها:</p>
          <p
            onClick={() => handleClickFilters("همه محصولات")}
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
              onClick={() => handleClickFilters(item.title)}
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
              onClick={() => handleClickFilters(item)}
              className={`brand-item ${
                filters.selectFilter === item ? "active-brand" : "brand-item"
              }`}
            >
              {item}
            </p>
          ))}

          <p className='title'>دسته بندی : </p>
          {categories.map((item, i) => (
            <p
              key={i}
              onClick={() => handleClickFilters(item.title)}
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
        {isLoading ? (
          <LoadingContainer className=' container '>
            <Loading />
          </LoadingContainer>
        ) : (
          <div className='products'>
            {filteredProducts.data?.map((item, i) => (
              <Link key={i} to={`/products/${item.id}`}>
                <Card {...item} />
              </Link>
            ))}
          </div>
        )}
        <PaginationContainer>
          {filteredProducts.meta.links?.map((item, i) => (
            <button
              className={` ${
                item.active ? "btn-navigation-active" : "btn-navigation"
              }`}
              key={i}
              dangerouslySetInnerHTML={{ __html: item.label }}
            />
          ))}
        </PaginationContainer>
      </ProductsContainer>
    </Wrapper>
  );
};

export default ProductsPage;

const LoadingContainer = styled.div`
  padding-bottom: 4rem;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
`;
const FilterContainer = styled.div`
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
const ProductsContainer = styled.div`
  flex: 4;
  .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    margin-bottom: 4rem;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 4rem;
    }
  }
`;
const PaginationContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  direction: ltr;
  .btn-navigation {
    background-color: var(--color--light-grey);
    color: black;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    margin-right: 10px;
    cursor: pointer;
  }
  .btn-navigation-active {
    background-color: var(--color-body);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    margin-right: 10px;
    cursor: pointer;
  }
`;
