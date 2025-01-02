import { Loading } from "../components";
import { useFetchAddressProfile } from "../hooks/reactQueryCustomHooks";
import styled from "styled-components";

const AddressPage = () => {
  const { data, error, isError, isLoading } = useFetchAddressProfile();
  if (isLoading) {
    return (
      <LoadingContainer className=' container '>
        <Loading />
      </LoadingContainer>
    );
  }
  console.log(data);
  return <div>AddressPage</div>;
};
const LoadingContainer = styled.div`
  padding-bottom: 4rem;
  height: 40vh;
`;
export default AddressPage;
