import styled from "styled-components";
import { Input, Button } from "../components";
import GoogleMapReact from "google-map-react";

const UserDetailsPage = () => {
  const defaultProps = {
    center: {
      lat: 36.885796,
      lng: 54.068883,
    },
    zoom: 15,
  };

  return (
    <Container>
      <h1 className='title'>اطلاعات حساب کاربر</h1>
      <Input placeholder='نام کاربر' />
      <Input placeholder='موبایل' dir phone />
      <Input placeholder='کد پستی' />
      <Input placeholder='آدرس' />

      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {/* <Div lat={59.955413} lng={30.337844} text='My Marker' /> */}
        </GoogleMapReact>
      </div>

      <div className='btn-container'>
        <Button title='ذخیره' />
      </div>
    </Container>
  );
};

const Container = styled.div`
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
