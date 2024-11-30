import styled from "styled-components";

const DescIcon = ({ title, icon }) => {
  return (
    <Container>
      {icon}
      <p>{title}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  margin: 5px;
  p {
    margin-right: 10px;
    font-size: 14px;
  }
`;

export default DescIcon;
