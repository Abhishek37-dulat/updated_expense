import { Route, Routes } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import "./App.css";
import { set } from "lodash";
const AuthenticationRoutes = lazy(() =>
  import("./routes/AuthenticationRoutes")
);
const Layout = lazy(() => import("./routes/Layout"));

function App() {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );
  useEffect(() => {
    setAccessToken(localStorage.getItem("access_token"));
  }, [accessToken]);
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      document.body.style.backgroundColor = "#445760";
    } else {
      document.body.style.backgroundColor = "#fff";
    }
  }, []);
  console.log(accessToken);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/*"
          element={
            !localStorage.getItem("access_token") ? (
              <AuthenticationRoutes />
            ) : (
              <Layout />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
