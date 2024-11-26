import { Outlet } from "react-router-dom";
import { Navbar, Drawer, Loading } from "../components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeItems } from "../features/home/homeSlice";

const HomeLayout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.home);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  useEffect(() => {
    dispatch(getHomeItems());
  }, []);

  return (
    <div>
      <Navbar openDrawer={toggleDrawer} />
      <Drawer closeDrawer={toggleDrawer} open={openDrawer} />

      {isLoading ? (
        <div className='section section-center'>
          <Loading />
        </div>
      ) : (
        <section>
          <Outlet />
        </section>
      )}
    </div>
  );
};

export default HomeLayout;
