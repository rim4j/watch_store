import { useRouteError, Link } from "react-router-dom";
import { Button } from "../components";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404)
    return (
      <div className='center-item'>
        <div>
          <p>404</p>
          <h1>صفحه ای یافت نشد.</h1>
          <div>
            <Link to='/'>
              <Button title='بازگشت به خانه' />
            </Link>
          </div>
        </div>
      </div>
    );

  return (
    <main>
      <h4>there was an error... </h4>
    </main>
  );
};

export default Error;
