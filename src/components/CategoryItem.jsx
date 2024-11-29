import styled from "styled-components";

const CategoryItem = ({ title, image }) => {
  return (
    <Container>
      <img className='image' src={image} alt={title} />
      <p>{title}</p>
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
  .image {
    width: 30px;
    height: 30px;
  }
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
