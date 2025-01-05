import styled from "styled-components";
import { useFetchOrderProcessing } from "../hooks/reactQueryCustomHooks";
import { Loading } from "../components";

const OrderProcessingPage = () => {
  const { data, isLoading } = useFetchOrderProcessing();

  if (isLoading) {
    return (
      <LoadingContainer className=' container '>
        <Loading />
      </LoadingContainer>
    );
  }

  if (data.length === 0) {
    return (
      <Container>
        <h1 className='title'>سفارشی در حال پردازش نمی باشد</h1>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className='title'>سفارش های در حال پردازش </h1>
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
export default OrderProcessingPage;
