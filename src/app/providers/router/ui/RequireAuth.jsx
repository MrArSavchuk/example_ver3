import { Navigate, useLocation } from "react-router-dom";
import { getRouteAuth } from "../lib/helper";
import { useAuth } from "@/features/AdminAuth/hooks/useAuth";

const RequireAuth = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();

    if (!isLoggedIn) {
        return <Navigate to={getRouteAuth()} state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;