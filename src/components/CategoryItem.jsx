import { BiCategory } from "react-icons/bi";
import styled from "styled-components";

const CategoryItem = () => {
  return (
    <Container>
      <BiCategory />
      <p>کلاسیک</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  transition: all ease 0.3s;
  padding: 15px;
  color: black;
  &:hover {
    background-color: #e6e6e6;
    transition: all ease 0.3s;
  }
  p {
    font-size: 14px;
    margin-right: 10px;
  }
`;

export default CategoryItem;
