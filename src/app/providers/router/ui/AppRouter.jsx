import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../lib/data";
import { Loader } from "../../../../shared/ui/Loader/Loader";

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routeConfig).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.page}
          />
        ))}
      </Routes>
    </Suspense>
  );
};