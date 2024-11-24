import { useRouteError, Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404)
    return (
      <Container>
        <div>
          <p>404</p>
          <h1>صفحه ای یافت نشد.</h1>
          <div>
            <Link to='/'>
              <Button title='بازگشت به خانه' />
            </Link>
          </div>
        </div>
      </Container>
    );

  return (
    <main>
      <h4>there was an error... </h4>
    </main>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export default Error;
