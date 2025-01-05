import styled from "styled-components";
import { Loading } from "../components";
import { useFetchOrderCancelled } from "../hooks/reactQueryCustomHooks";

const OrderCancelledPage = () => {
  const { data, isLoading } = useFetchOrderCancelled();

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
        <h1 className='title'>هیج سفارشی لغو نشده است</h1>
      </Container>
    );
  }

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
