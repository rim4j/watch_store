import { Outlet } from "react-router-dom";
import { Navbar, Loading, Footer, DrawerApp } from "../components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeItems } from "../features/home/homeSlice";
import { getCartItems } from "../features/cart/cartSlice";
import { allProductsUrl } from "../utils/url";
import { fetchFilterProducts } from "../features/filteredProducts/filteredProductsSlice";

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
    dispatch(fetchFilterProducts(allProductsUrl));
  }, []);

  return (
    <div>
      <div className='container'>
        <Navbar openDrawer={toggleDrawer} />
        {/* <Drawer closeDrawer={toggleDrawer} open={openDrawer} /> */}
        <DrawerApp closeDrawer={toggleDrawer} open={openDrawer} />
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
