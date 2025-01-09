import styled from "styled-components";

const Divider = () => {
  return <Container />;
};

const Container = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: var(--color--light-grey);
`;

export default Divider;
