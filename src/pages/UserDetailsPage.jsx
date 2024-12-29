import styled from "styled-components";
import { Input, Button, Loading } from "../components";
import axios from "axios";
import { userProfileUrl } from "../utils/url";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const UserDetailsPage = () => {
  const { token } = useSelector((state) => state.user);
  const [user, setUser] = useState({
    address: "",
    postalCode: "",
    mobile: "",
    name: "",
  });
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
      setUser({
        name: data.data.user_info.name,
        address: data.data.user_info.address.address,
        postalCode: data.data.user_info.address.postal_code,
        mobile: data.data.user_info.mobile,
      });
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
      <Input
        placeholder='نام کاربر'
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <Input
        placeholder='موبایل'
        dir
        phone
        value={user.mobile}
        onChange={(e) => setUser({ ...user, mobile: e.target.value })}
      />
      <Input
        placeholder='کد پستی'
        value={user.postalCode}
        onChange={(e) => setUser({ ...user, postalCode: e.target.value })}
      />
      <Input
        placeholder='آدرس'
        value={user.address}
        onChange={(e) => setUser({ ...user, address: e.target.value })}
      />

      <div className='btn-container'>
        <Button title='ذخیره' onClick={() => console.log(user)} />
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
