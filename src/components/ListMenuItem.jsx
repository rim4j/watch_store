import styled from "styled-components";

const ListMenuItem = ({ title, icon, onClick }) => {
  return (
    <Container onClick={onClick}>
      {icon}
      <p>{title}</p>
    </Container>
  );
};

const Container = styled.div`
  color: #000;
  display: flex;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  cursor: pointer;
  transition: all ease 0.2;

  p {
    font-size: 14px;
    margin-right: 5px;
  }

  @media screen and (min-width: 768px) {
    transition: all ease 0.2s;
    border-bottom: none;
    &:hover {
      color: #ff4156;
      transition: all ease 0.2s;
    }
  }
`;

export default ListMenuItem;
