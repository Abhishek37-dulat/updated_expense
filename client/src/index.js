import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import customTheme from "./customeTheme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store/GlobalStore";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/authProvider";
import { Suspense } from "react";
import Spinner from "./modules/shared/Loader";

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={customTheme}>
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Suspense fallback={<Spinner />}>
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  theme="dark"
                  pauseOnHover
                />
                <App />
              </Suspense>
            </PersistGate>
          </Provider>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);

reportWebVitals();
