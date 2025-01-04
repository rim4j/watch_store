import { Button, Loading } from "../components";
import { useFetchAddressProfile } from "../hooks/reactQueryCustomHooks";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AddressPage = () => {
  const { data, isLoading } = useFetchAddressProfile();

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
        <h1 className='title'>آدرسی وجود ندارد!</h1>

        <Link to='/profile/user'>
          <Button title='اضافه کردن ادرس ' />
        </Link>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className='title'>آدرس های کاربر</h1>

      <CardContainer>
        {data.map((item, i) => (
          <Card key={i}>
            <p>
              {item.address} پلاک {item.postal_code}
            </p>
          </Card>
        ))}
      </CardContainer>
      <Link to='/profile/user'>
        <Button title='اضافه کردن ادرس ' />
      </Link>
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

const CardContainer = styled.div`
  margin-bottom: 4rem;
`;

const Card = styled.div`
  padding: 15px;
  border: 1px solid var(--color--light-grey);
  margin-bottom: 1rem;
  border-radius: 8px;
  p {
    font-size: 14px;
    color: #000;
  }
`;

export default AddressPage;
