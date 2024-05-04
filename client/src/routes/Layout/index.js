import React from "react";
import { LayoutRoutes, profileRoutes } from "../index";
import { Navigate, Route, Routes } from "react-router-dom";
import Missing from "../../modules/Missing";
import Navbar from "../Navbar";
import { useState } from "react";

const Index = () => {
  const [dataType, setDataType] = useState(0);

  return (
    <Routes>
      {/* <Route path={"/"} element={<Navigate to={"/expense"} replace />} /> */}
      {profileRoutes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={true}
            path={`${route.path}`}
            element={<route.component />}
          />
        );
      })}
      {LayoutRoutes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={true}
            path={`${route.path}`}
            element={
              <React.Fragment>
                {route.path === "/expense" && (
                  <Navbar dataType={dataType} setDataType={setDataType} />
                )}
                <route.component
                  dataType={dataType}
                  setDataType={setDataType}
                />
              </React.Fragment>
            }
          />
        );
      })}
      <Route path="*" element={<Navigate to={"/expense"} replace />} />
    </Routes>
  );
};

export default Index;
