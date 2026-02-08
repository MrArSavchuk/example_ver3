import { Suspense } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { routeConfig } from "../lib/data";
import { useAuth } from "@/features/AdminAuth/hooks/useAuth";
import { Loader } from "@/shared/ui/Loader";

export const AppRouter = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={routeConfig.main.page} />
           <Route
              path="/auth"
              element={
            isLoggedIn ? (
              <Navigate to="/admin" replace />
            ) : (
              routeConfig.auth.page
            )
          }
        />
        
        <Route
          path="/admin"
          element={
            isLoggedIn ? (
              routeConfig.admin.page
            ) : (
              <Navigate to="/auth" state={{ from: location }} replace />
            )
          }
        />
        
                <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};