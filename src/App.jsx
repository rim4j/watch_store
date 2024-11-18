import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  LandingPage,
  HomeLayout,
  LoginPage,
  ProductsPage,
  SingleProductPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    //  errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        //  errorElement: <ErrorElement />,
      },
      {
        path: "products",
        element: <ProductsPage />,
        // errorElement: <ErrorElement />,
      },
      {
        path: "products/:id",
        element: <SingleProductPage />,
        // errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    // errorElement: <Error />,
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomeLayout />,
//     errorElement: <p>error</p>,
//     children: [
//       {
//         index: true,
//         element: <LandingPage />,
//         errorElement: <p>error</p>,
//       },
//       {
//         path: "products",
//         element: <Products />,
//         loader: productsLoader(queryClient),
//         errorElement: <ErrorElement />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//     errorElement: <p>error</p>,
//   },
// ]);

function App() {
  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
