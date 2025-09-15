// import type { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
// import CONSTANTS from "../constants/constants";
import NotFound from "../pages/Notfound";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
// import ProtectedLayout from "./ProtectedRouter";
import Customers from "../pages/Customers";
import Users from "../pages/Users";
import Branches from "../pages/Branches";
import Collections from "../pages/Collections";

// const { ROLES } = CONSTANTS;

// const router = createBrowserRouter(routes);

// const AppRoutes = () => <RouterProvider router={router} />;

// export default AppRoutes;

const AppRoutes = () => {
  // const withProtected = (Component: ReactNode, roles: string[]) => ({
  //   element: <ProtectedLayout roles={roles}>{Component}</ProtectedLayout>,
  // });

  const routes = [
    { path: "/login", element: <Login /> },
    { path: "/users", element: <Users />,
      //  ...withProtected(<Users />, [ROLES.ADMIN])
    },
    {
      path: "/branches",
      element: <Branches />,
      // ...withProtected(<Branches />, [ROLES.ADMIN, ROLES.USER]),
    },
    {
      path: "/customers",
      element: <Customers />,
      // ...withProtected(<Customers />, [ROLES.ADMIN, ROLES.USER]),
    },
    { path: "/", element: <Dashboard /> },
    { path: "*", element: <NotFound /> },
    { path: '/collection', element: <Collections/>}
  ];

  return (
    <Routes>
      {routes.map((ele) => (
        <Route path={ele.path} element={ele.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
