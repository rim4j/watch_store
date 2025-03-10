import { useDispatch } from "react-redux";
import { logOut } from "./../features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiUser } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowsRotate } from "react-icons/fa6";
import { IoMdArrowRoundDown } from "react-icons/io";
import { IoMdArrowRoundUp } from "react-icons/io";

import { BiLogOut } from "react-icons/bi";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };
  return (
    <Container>
      <h1 className='title'> خوش آمدید !</h1>

      <div className='cart-container'>
        <Link to='user'>
          <div className='card scale'>
            <FiUser size='50px' color='#000' />
            <p>اطلاعات حساب کاربری</p>
          </div>
        </Link>

        <Link to='address'>
          <div className='card scale'>
            <FaLocationDot size='50px' color='#000' />
            <p> آدرس ها</p>
          </div>
        </Link>

        <Link to='orderReceived'>
          <div className='card scale'>
            <IoMdArrowRoundDown size='50px' color='#000' />
            <p>سفارش های دریافت شده</p>
          </div>
        </Link>

        <Link to='orderCancelled'>
          <div className='card scale'>
            <IoMdArrowRoundUp size='50px' color='#000' />
            <p> سفارش های لغو شده </p>
          </div>
        </Link>

        <Link to='orderProcessing'>
          <div className='card scale'>
            <FaArrowsRotate size='50px' color='#000' />
            <p> سفارش های در حال پردازش</p>
          </div>
        </Link>

        <div className='card scale' onClick={handleLogout}>
          <BiLogOut size='50px' color='#000' />
          <p> خروج</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .title {
    font-size: 22px;
    margin: 8rem 0 8rem 0;
  }
  .cart-container {
    display: grid;
    margin-bottom: 8rem;
    grid-template-columns: repeat(3, 1fr);
    gap: 8rem;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 4rem;
    }
  }
  .card {
    background: linear-gradient(#e6e6e6, #fff);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 8px;
    cursor: pointer;
    color: var(--color-body);
    transition: all ease 0.3s;
    p {
      margin-top: 2rem;
    }
    &:hover {
      transition: all ease 0.3s;
      color: var(--color-accent);
    }
  }
`;

export default ProfilePage;
