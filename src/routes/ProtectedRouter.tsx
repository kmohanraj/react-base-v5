import type { ReactNode, FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../store";

type TProtectedLayoutProps = {
  children: ReactNode;
  roles?: string[];
};

const ProtectedLayout: FC<TProtectedLayoutProps> = ({ children, roles }) => {
  const users = useSelector((state: RootState) => state.users);

  if (!users) return <Navigate to="/login" replace />;
  if (users.user?.isFirstLogin) {
    return <Navigate to="/change-password" replace />;
  }
  if (roles?.length && !roles.includes(users.user.role_id ?? "")) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default ProtectedLayout;
