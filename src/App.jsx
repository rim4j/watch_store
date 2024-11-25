import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  LandingPage,
  HomeLayout,
  LoginPage,
  ProductsPage,
  SingleProductPage,
  ErrorPage,
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
      errorElement: <ErrorPage />,
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
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
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
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
