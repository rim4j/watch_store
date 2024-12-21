import { useState } from "react";
import styled from "styled-components";
import { Button, ErrorMessage, IconButton } from "../components";
import { useLocation, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import OtpInput from "react-otp-input";

const OtpPage = () => {
  const {
    state: { phone },
  } = useLocation();

  const [code, setCode] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const submitForm = () => {
    if (!code) {
      setErrMessage("کد تایید را وارد کنید");
      return;
    }

    if (code.length !== 4) {
      setErrMessage("کد تایید باید 4 رقمی باشد");
      return;
    }

    console.log(code);
    setErrMessage("");
  };

  return (
    <Wrapper>
      <Container>
        <div className='logo-container'>
          <Link to='/login'>
            <IconButton icon={<FaArrowRight color='#333' />} />
          </Link>
        </div>
        <p className='title'>کد تایید را وارد کنید</p>

        <p className='placeholder'>کد تایید برای شماره {phone} پیامک شد.</p>
        <div className='otp-container'>
          <OtpInput
            value={code}
            onChange={setCode}
            inputStyle={{
              width: "50px",
              height: "50px",
              fontSize: "20px",
              color: "#333",
              border: "1px solid #ccc",
              borderRadius: "8px",
              background: "#fff",
              padding: "0",
              margin: "5px",
              direction: "ltr",
              outline: "none",
            }}
            numInputs={4}
            renderInput={(props) => <input className='otp-input' {...props} />}
          />
        </div>

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
    margin-bottom: 4rem;
  }
  .login-detail {
    font-size: 12px;
    color: black;
    text-align: center;
  }
  .otp-container {
    margin: 0 auto;
    direction: ltr;
  }
  .placeholder {
    font-size: 12px;
    margin-bottom: 2rem;
  }
`;

export default OtpPage;
