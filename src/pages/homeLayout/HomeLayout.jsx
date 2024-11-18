import { Outlet, useNavigation } from "react-router-dom";

const HomeLayout = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";

  return (
    <div>
      <h1>لوگو</h1>
      <h1>خانه</h1>
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
