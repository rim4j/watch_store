import { useDispatch } from "react-redux";
import { Button } from "../components";
import { logOut } from "./../features/user/userSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <Container>
      <h1 className='title'>اطلاعات کاربر</h1>
      <Link to='/'>
        <Button title='خروج' onClick={handleLogout} />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  .title {
    font-size: 18px;
  }
`;

export default ProfilePage;
