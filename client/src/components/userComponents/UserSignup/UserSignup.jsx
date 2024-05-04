import React, { useContext, useEffect, useState } from "react";
import { styled, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
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
  marginTop: "50px",
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
        marginTop: "20px",
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

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const { setAccessToken } = useContext(AuthContext);
  const { loginResponse, isLoading } = useSelector(({ authorization }) => ({
    loginResponse: authorization.loginResponse,
    isLoading: authorization.isLoading,
  }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email === "" ||
      firstName === "" ||
      lastName === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      toast("all fields are required");
    } else {
      if (password !== confirmPassword) {
        toast("password and confirm paswword don't match💢");
      } else {
        dispatch(updateAuthLoading(true));
        dispatch(
          registerUser({
            name: firstName + " " + lastName,
            email: email?.toLowerCase(),
            password: password,
          })
        );
      }
    }
  };

  useEffect(() => {
    if (loginResponse) {
      const accessToken = loginResponse?.access_token;
      console.log(loginResponse, accessToken);
      setAccessToken(accessToken);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      window.location.href = "/expense";
    }
    dispatch(updateAuthSuccessStatus(false));
  }, [dispatch, loginResponse, setAccessToken]);

  return (
    <MainBox>
      <LoginBox>
        <Typography>Create New Account🪺</Typography>
        <form onSubmit={handleSubmit}>
          <Box>
            <Typography>Enter First Name</Typography>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="first name"
            />
          </Box>
          <Box>
            <Typography>Enter Last Name</Typography>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="last name"
            />
          </Box>
          <Box>
            <Typography>Enter Email</Typography>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
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
          </Box>
          <Box>
            <Typography>Enter Confirm Password</Typography>
            <input
              type="text"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="confirm password"
            />
          </Box>
          <Box>
            <button onClick={handleSubmit}>
              <Typography>
                <>Register</>
              </Typography>
            </button>
          </Box>
          <Box>
            <Typography>
              Already have an account? <Link to="/login">Login</Link>
            </Typography>
          </Box>
        </form>
      </LoginBox>
    </MainBox>
  );
};

export default UserSignup;
