import styled from "styled-components";

const OrderCancelledPage = () => {
  return (
    <Container>
      <h1 className='title'>سفارش های لغو شده </h1>
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

export default OrderCancelledPage;
