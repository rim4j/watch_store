import styled from "styled-components";

const FooterItem = ({ title, icon }) => {
  return (
    <Container>
      <span>{icon}</span>
      <p>{title}</p>
    </Container>
  );
};

const Container = styled.div`
  transition: all ease 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
  }
  p {
    margin-right: 10px;
  }

  &:hover {
    p {
      color: #ff4156;
      transition: all ease 0.3s;
    }
    span {
      margin-left: 5px;
      transition: all ease 0.3s;
    }
  }
`;

export default FooterItem;
