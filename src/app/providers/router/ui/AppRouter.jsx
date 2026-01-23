import React, { Suspense } from "react";

import {
  Route,
  Routes,
} from "react-router-dom";

import { 
    getRouteMain,
    getRouteAuth,
    getRouteAdminPanel,
       } from "../lib/helper";

import { routeConfig } from "../lib/data";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>} >
      <Routes>
        <Route 
            path={getRouteMain()} 
            element={routeConfig.main.page} 
        />

        <Route 
            path={getRouteAuth()} 
            element={routeConfig.auth.page} 
        />

        <Route
            path={getRouteAdminPanel()}
            element={routeConfig.admin.page}
        />
      </Routes>
    </Suspense>
  );
};

