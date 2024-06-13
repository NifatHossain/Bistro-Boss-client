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
import Cart from "../pages/dasboard/Cart";
import Dashboard from "../layout/Dashboard";
import Reservation from "../pages/dasboard/Reservation";
import Payment from "../pages/dasboard/Payment";
import Reviews from "../pages/dasboard/Reviews";
import Bookings from "../pages/dasboard/Bookings";


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
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },
        {
          path:'reservation',
          element:<Reservation></Reservation>
        },
        {
          path:'payment',
          element: <Payment></Payment>
        },
        {
          path:'review',
          element:<Reviews></Reviews>
        },
        {
          path:'booking',
          element:<Bookings></Bookings>
        }
      ]
    }
  ]);