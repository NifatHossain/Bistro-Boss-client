import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import OrderPage from "../pages/orderPage/OrderPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../pages/PrivateRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: '/menu',
          element:<PrivateRoute><Menu></Menu></PrivateRoute>
        },
        {
          path:'/order/:category',
          element:<OrderPage></OrderPage>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        }
      ]
    },
  ]);