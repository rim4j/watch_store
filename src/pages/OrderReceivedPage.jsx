import styled from "styled-components";
const OrderReceivedPage = () => {
  return (
    <Container>
      <h1 className='title'>سفارش های دریافت شده </h1>
    </Container>
  );
};

const LoadingContainer = styled.div`
  padding-bottom: 4rem;
  height: 40vh;
`;

const Container = styled.div`
  margin: 2rem;
  .title {
    font-size: 22px;
    margin: 8rem 0 8rem 0;
  }
`;

export default OrderReceivedPage;
