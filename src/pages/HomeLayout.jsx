import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Drawer } from "../components";
import { useState } from "react";

const HomeLayout = () => {
  const navigation = useNavigation();
  const [openDrawer, setOpenDrawer] = useState(false);

  const isPageLoading = navigation.state === "loading";

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div>
      <Navbar openDrawer={toggleDrawer} />
      <Drawer closeDrawer={toggleDrawer} open={openDrawer} />

      {isPageLoading ? (
        <p>loading</p>
      ) : (
        <section>
          <Outlet />
        </section>
      )}
    </div>
  );
};

export default HomeLayout;
