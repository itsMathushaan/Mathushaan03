import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword"

const AppRoutes = [
  {
        index: true,
        element: <Login />
  },
  {
      path: '/ForgetPassword',
      element: <ForgetPassword />
  }/*,
  {
    path: '/fetch-data',
    element: <FetchData />
  }*/
];

export default AppRoutes;
