import styled from "styled-components";
import { Input, Button, Loading } from "../components";
import axios from "axios";
import { userProfileUrl } from "../utils/url";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const UserDetailsPage = () => {
  const { token } = useSelector((state) => state.user);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const config = {
    headers: { Authorization: token },
  };

  const bodyParameters = {
    key: "value",
  };

  const userProfile = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(userProfileUrl, bodyParameters, config);
      setIsLoading(false);
      setUser(data.data.user_info);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    userProfile();
  }, []);

  if (isLoading) {
    return (
      <LoadingContainer className=' container '>
        <Loading />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <h1 className='title'>اطلاعات حساب کاربر</h1>
      <Input placeholder='نام کاربر' />
      <Input placeholder='موبایل' dir phone />
      <Input placeholder='کد پستی' />
      <Input placeholder='آدرس' />

      <div className='btn-container'>
        <Button title='ذخیره' />
      </div>
    </Container>
  );
};

const LoadingContainer = styled.div`
  padding-bottom: 4rem;
`;

const Container = styled.div`
  margin: 2rem;
  .title {
    font-size: 22px;
    margin: 8rem 0 8rem 0;
  }
  .btn-container {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;
export default UserDetailsPage;
