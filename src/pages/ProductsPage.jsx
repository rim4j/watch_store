import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
  productsByBrandUrl,
  productsByCategoryUrl,
} from "../utils/url";
import { Card, IconButton, Loading, Modal } from "./../components";
import { FaFilter } from "react-icons/fa";

const ProductsPage = () => {
  const { brands, filters, filteredProducts, allProducts, isLoading } =
    useSelector((state) => state.filteredProducts);
  const { categories } = useSelector((state) => state.home);
  const [showModalFilter, setShowModalFilter] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  const handleClickFilters = (title) => {
    dispatch(selectFilter(title));
    if (title === "همه محصولات") {
      dispatch(fetchFilterProducts(allProductsUrl));
    }
  };

  const handleNavigationReq = (url) => {
    if (url === null) return;
    dispatch(fetchFilterProducts(url));
  };

  const toggleShowModalFilter = () => {
    setShowModalFilter(!showModalFilter);
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
              onClick={() => {
                handleClickFilters(item.title);
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
      <ProductsContainer>
        {isLoading ? (
          <LoadingContainer className=' container '>
            <Loading />
          </LoadingContainer>
        ) : (
          <div className='products'>
            {filteredProducts?.map((item, i) => (
              <Link key={i} to={`/products/${item.id}`}>
                <Card {...item} />
              </Link>
            ))}
          </div>
        )}
        <PaginationContainer>
          {allProducts.meta.links?.map((item, i) => (
            <button
              className={` ${
                item.active ? "btn-navigation-active" : "btn-navigation"
              }`}
              key={i}
              dangerouslySetInnerHTML={{ __html: item.label }}
              onClick={() => handleNavigationReq(item.url)}
            />
          ))}
        </PaginationContainer>
      </ProductsContainer>
      <FabButton>
        <IconButton
          onClick={toggleShowModalFilter}
          backgroundColor='#fff'
          icon={<FaFilter color='#ff4156' size='24px' />}
        />
      </FabButton>
      <Modal show={showModalFilter} closeModal={toggleShowModalFilter} />
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
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    flex: 0;
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

const FabButton = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  position: fixed;
  bottom: 30px;
  left: 30px;
`;
