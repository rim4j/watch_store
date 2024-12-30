import styled from "styled-components";
import { Input, Button, Loading } from "../components";
import axios from "axios";
import { registerProfileUrl, userProfileUrl } from "../utils/url";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UserDetailsPage = () => {
  const { token } = useSelector((state) => state.user);
  const [user, setUser] = useState({
    phone: "",
    name: "",
    address: "",
    postal_code: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

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
        postal_code: data.data.user_info.address.postal_code,
        phone: data.data.user_info.mobile,
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const onSubmitForm = async () => {
    setFormLoading(true);
    const userInfo = {
      ...user,
      lat: "35.616329",
      lng: "51.231594",
    };
    try {
      const { data } = await axios.post(registerProfileUrl, userInfo, config);
      if (data.result) {
        toast.success(data.message);
      }
      setFormLoading(false);
      console.log(data);
    } catch (error) {
      toast.error(error.response.data.message);
      setFormLoading(false);
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
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
      />
      <Input
        placeholder='کد پستی'
        value={user.postal_code}
        onChange={(e) => setUser({ ...user, postal_code: e.target.value })}
      />
      <Input
        placeholder='آدرس'
        value={user.address}
        onChange={(e) => setUser({ ...user, address: e.target.value })}
      />

      <div className='btn-container'>
        <Button title='ذخیره' onClick={onSubmitForm} loading={formLoading} />
      </div>
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
  .btn-container {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;
export default UserDetailsPage;
