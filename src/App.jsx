import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  LandingPage,
  HomeLayout,
  LoginPage,
  ProductsPage,
  SingleProductPage,
  ErrorPage,
  OtpPage,
  ProfilePage,
  UserDetailsPage,
} from "./pages";
import { ErrorElement } from "./components";
import "./app.css";

//loaders

//actions

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorElement />,
      children: [
        {
          index: true,
          element: <LandingPage />,
          errorElement: <ErrorElement />,
        },
        {
          path: "products",
          element: <ProductsPage />,
          errorElement: <ErrorElement />,
        },
        {
          path: "products/:id",
          element: <SingleProductPage />,
          errorElement: <ErrorElement />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
          errorElement: <ErrorElement />,
        },
        {
          path: "profile/user",
          element: <UserDetailsPage />,
          errorElement: <ErrorElement />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/otp",
      element: <OtpPage />,
      errorElement: <ErrorPage />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
