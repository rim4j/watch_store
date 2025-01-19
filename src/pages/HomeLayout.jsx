import { Outlet } from "react-router-dom";
import { Navbar, Drawer, Loading, Footer } from "../components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeItems } from "../features/home/homeSlice";
import { getCartItems } from "../features/cart/cartSlice";

const HomeLayout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.home);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  useEffect(() => {
    dispatch(getHomeItems());
    dispatch(getCartItems());
  }, []);

  return (
    <div>
      <div className='container'>
        <Navbar openDrawer={toggleDrawer} />
        <Drawer closeDrawer={toggleDrawer} open={openDrawer} />
      </div>

      {isLoading ? (
        <div className=' container center-item'>
          <Loading />
        </div>
      ) : (
        <section>
          <div className='container'>
            <Outlet />
          </div>
          <Footer />
        </section>
      )}
    </div>
  );
};

export default HomeLayout;
