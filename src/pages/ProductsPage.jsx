import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  fetchFilterProducts,
  getBrands,
} from "../features/filteredProducts/filteredProductsSlice";
import {
  Card,
  FiltersProducts,
  IconButton,
  Loading,
  Modal,
} from "./../components";
import searchImage from "./../assets/svg/search.svg";

const ProductsPage = () => {
  const { filteredProducts, allProducts, isLoading } = useSelector(
    (state) => state.filteredProducts
  );
  const [showModalFilter, setShowModalFilter] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  const handleNavigationReq = (url) => {
    if (url === null) return;
    dispatch(fetchFilterProducts(url));
  };

  const showModal = () => {
    setShowModalFilter(true);
  };
  const closeModal = () => {
    setShowModalFilter(false);
  };

  return (
    <Wrapper>
      <FiltersProductsContainer>
        <FiltersProducts />
      </FiltersProductsContainer>
      <ProductsContainer>
        {isLoading ? (
          <LoadingContainer className=' container '>
            <Loading />
          </LoadingContainer>
        ) : (
          <>
            {filteredProducts?.length === 0 && (
              <div className='not-found-container'>
                <img src={searchImage} alt='' />
                <h3>هیج محصولی با این مشخصات یافت نشد</h3>
              </div>
            )}
            <div className='products'>
              {filteredProducts?.map((item, i) => (
                <Link key={i} to={`/products/${item.id}`}>
                  <Card {...item} />
                </Link>
              ))}
            </div>
          </>
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
          onClick={showModal}
          backgroundColor='#fff'
          icon={<FaFilter color='#ff4156' size='24px' />}
        />
      </FabButton>
      <Modal show={showModalFilter} closeModal={closeModal} />
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

const FiltersProductsContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    flex: 0;
  }
`;
const ProductsContainer = styled.div`
  flex: 4;
  .not-found-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img {
      width: 200px;
      height: 200px;
    }
    h3 {
      font-size: 14px;
    }
  }
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
