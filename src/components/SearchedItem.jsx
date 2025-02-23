import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getDetailsProduct } from "../features/products/productsSlice";

const SearchedItem = ({ id, title, image }) => {
  const dispatch = useDispatch();

  return (
    <Container onClick={() => dispatch(getDetailsProduct(id))}>
      <Link className='card' to={`products/${id}`}>
        <img src={image} alt='image' />
        <p>{title}</p>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color--light-grey);
    transition: all ease 0.2s;
  }
  .card {
    color: black;
    display: flex;
    align-items: center;
  }

  p {
    font-size: 14px;
  }
  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }
`;

export default SearchedItem;
