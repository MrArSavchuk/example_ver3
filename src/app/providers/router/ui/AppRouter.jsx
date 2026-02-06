import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../lib/data";
import { Loader } from "../../../../shared/ui/Loader/Loader";
import { Header } from "../../../../widgets/Header/ui/Header";
import { Footer } from "../../../../widgets/Footer";

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header/>
      <Routes>
        {Object.values(routeConfig).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.page}
          />
        ))}
      </Routes>
      <Footer isShow={true} />
    </Suspense>
  );
};