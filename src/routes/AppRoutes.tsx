import { RouterProvider, createBrowserRouter } from "react-router";
import CONSTANTS from "../constants/constants";
import NotFound from "../pages/Notfound";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedLayout from "./ProtectedRouter";
import Customers from "../pages/Customers";
import Users from "../pages/Users";

const { ROLES } = CONSTANTS;

const withProtected = (Component: React.ReactNode, roles: string[]) => ({
  element: <ProtectedLayout roles={roles}>{Component}</ProtectedLayout>,
});

const routes = [
  { path: "/login", element: <Login /> },
  { path: "/users", ...withProtected(<Users />, [ROLES.ADMIN]) },
  {
    path: "/customers",
    ...withProtected(<Customers />, [ROLES.ADMIN, ROLES.USER]),
  },
  { path: "/", element: <Dashboard /> },
  { path: "*", element: <NotFound /> },
];

const router = createBrowserRouter(routes);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
