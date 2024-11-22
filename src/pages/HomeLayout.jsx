import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Drawer } from "../components";
import { useState } from "react";

const HomeLayout = () => {
  const navigation = useNavigation();
  const [openDrawer, setOpenDrawer] = useState(true);

  const isPageLoading = navigation.state === "loading";

  return (
    <div>
      <Navbar />
      {openDrawer && <Drawer />}

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
