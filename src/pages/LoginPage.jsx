import { useState } from "react";
import styled from "styled-components";
import logo from "./../assets/png/main_logo.png";
import { Button, ErrorMessage, Input } from "../components";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const setPhoneNumber = (phone) => {
    setPhone(phone);
  };

  const submitForm = () => {
    if (!phone) {
      setErrMessage("لطفا شماره موبایل را وارد کنید");
      return;
    }
    if (phone[0] !== "9") {
      setErrMessage("شماره موبایل باید با 9 شروع شود");
      return;
    }
    if (phone.length !== 10) {
      setErrMessage("شماره موبایل باید 10 رقمی باشد");
      return;
    } else {
      setErrMessage("");
      console.log(`+98${phone}`);
    }
  };

  return (
    <Wrapper>
      <Container>
        <img src={logo} alt='' />
        <p className='title'>ورود | ثبت نام</p>
        <p className='placeholder'>سلام!</p>

        <Input
          value={phone}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type='number'
          dir
          phone
          placeholder='لطفا شماره موبایل خود را وارد کنید '
        />
        <ErrorMessage message={errMessage} />
        <div className='btn-container'>
          <Button title='ورود' full onClick={submitForm} />
        </div>

        <p className='login-detail'>
          ورود شما به معنای پذیرش شرایط وقوانین حریم‌خصوصی است
        </p>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  border: 1px solid var(--color--border);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;

  img {
    width: 120px;
    object-fit: cover;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .title {
    font-size: 18px;
    color: black;
    margin-bottom: 2rem;
  }

  .btn-container {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .login-detail {
    font-size: 12px;
    color: black;
    text-align: center;
  }
`;

export default LoginPage;
