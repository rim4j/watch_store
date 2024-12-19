import { useState } from "react";
import styled from "styled-components";
import { Button, ErrorMessage, IconButton, Input } from "../components";
import { useLocation, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const OtpPage = () => {
  const {
    state: { phone },
  } = useLocation();

  const [code, setCode] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const setPhoneNumber = (code) => {
    setCode(code);
  };

  const submitForm = () => {
    console.log(code);
  };

  return (
    <Wrapper>
      <Container>
        <div className='logo-container'>
          <Link to='/login'>
            <IconButton icon={<FaArrowRight />} />
          </Link>
        </div>
        <p className='title'>کد تایید را وارد کنید</p>

        <Input
          value={phone}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type='number'
          dir
          phone
          placeholder={`کد تایید برای شماره ${phone} پیامک شد.`}
        />
        <ErrorMessage message={errMessage} />
        <div className='btn-container'>
          <Button title='تایید' full onClick={submitForm} />
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
  .logo-container {
    display: flex;
  }
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

export default OtpPage;
