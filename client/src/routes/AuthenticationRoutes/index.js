import React from "react";
import { userRoutes } from "../index";
import { Navigate, Route, Routes } from "react-router-dom";
import Missing from "../../modules/Missing";

const index = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={"/login"} replace />} />
      {userRoutes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={true}
            path={`${route.path}`}
            element={<route.component />}
          />
        );
      })}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
};

export default index;
