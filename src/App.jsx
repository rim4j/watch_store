import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
  AddressPage,
  OrderReceivedPage,
  OrderProgressPage,
  OrderCancelledPage,
} from "./pages";
import { ErrorElement } from "./components";
import "./app.css";

//loaders

//actions

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      // cacheTime: 1000,
    },
  },
});

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
        {
          path: "profile/address",
          element: <AddressPage />,
          errorElement: <ErrorElement />,
        },
        {
          path: "profile/orderReceived",
          element: <OrderReceivedPage />,
          errorElement: <ErrorElement />,
        },
        {
          path: "profile/orderProgress",
          element: <OrderProgressPage />,
          errorElement: <ErrorElement />,
        },
        {
          path: "profile/orderCancelled",
          element: <OrderCancelledPage />,
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
