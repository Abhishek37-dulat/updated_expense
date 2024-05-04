import React, { useContext, useEffect, useState } from "react";
import { styled, Box, Typography } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  authorizeUser,
  updateAuthLoading,
  updateAuthSuccessStatus,
} from "../../../redux/reducers/ducks/MainDuck";
import AuthContext from "../../../context/authProvider";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const LoginBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "400px",
  height: "max-content",
  marginTop: "100px",
  borderRadius: "8px",
  boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
  backgroundColor: "#EBEBEB",
  padding: "20px",
  "&>p:nth-of-type(1)": {
    fontFamily: '"Jersey 20", sans-serif',
    fontSize: "36px",
    color: "#101828",
  },
  "&>form": {
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    height: "max-content",
    "&>div": {
      // border: "1px solid black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100%",
      marginTop: "10px",
      "&>button": {
        marginTop: "10px",
        border: "none",
        outline: "none",
        width: "100%",
        padding: "10px",
        borderRadius: "4px",
        backgroundColor: "#445760",
        color: "#fff",
        cursor: "pointer",
        transition: "0.4s",
        ":hover": {
          boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
        },
      },
      "&>input": {
        width: "calc(100% - 20px)",
        padding: "10px",
        borderRadius: "4px",
        border: "none",
        outline: "none",
        marginTop: "5px",
        fontFamily: '"Poppins", sans-serif',
      },
      "&>p:nth-of-type(2)": {
        fontSize: "12px",
        fontWeight: "400",
        cursor: "pointer",
        color: "#445760",
        marginTop: "10px",
      },
    },
  },
}));

const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { setAccessToken, accessToken } = useContext(AuthContext);
  const { loginResponse, isLoading } = useSelector(({ authorization }) => ({
    loginResponse: authorization.loginResponse,
    isLoading: authorization.isLoading,
  }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast("please enter email");
    }
    if (password === "") {
      toast("please enter password");
    }
    if (email && password) {
      try {
        dispatch(
          authorizeUser({
            email: email?.toLowerCase(),
            password,
          })
        );
        dispatch(updateAuthLoading(true));
      } catch (error) {
        toast("invalid email and password");
      }

      // navigate("/expense");
    }
  };

  useEffect(() => {
    if (loginResponse?.data) {
      const accessToken = loginResponse?.data;
      setAccessToken(accessToken);
      setEmail("");
      setPassword("");
      window.location.href = "/expense";
    }
    dispatch(updateAuthSuccessStatus(false));
  }, [dispatch, loginResponse, setAccessToken]);
  console.log(loginResponse, accessToken);
  return (
    <MainBox>
      <LoginBox>
        <Typography>Let's Go🚀</Typography>
        <form onSubmit={handleSubmit}>
          <Box>
            <Typography>Enter Username</Typography>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="username or email"
            />
          </Box>
          <Box>
            <Typography>Enter Password</Typography>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <Typography>
              <Link to="/forgotpassword">forgot password?</Link>
            </Typography>
          </Box>
          <Box>
            <button onClick={handleSubmit}>
              <Typography>Login</Typography>
            </button>
          </Box>
          <Box>
            <Typography>
              don't have an account? <Link to="/signup">Signup</Link>
            </Typography>
          </Box>
        </form>
      </LoginBox>
    </MainBox>
  );
};

export default UserLogin;
