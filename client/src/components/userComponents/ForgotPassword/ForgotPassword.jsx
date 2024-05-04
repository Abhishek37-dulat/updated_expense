import React, { useState } from "react";
import { styled, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

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

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      toast("please enter email");
    }
    if (email) {
    }
  };
  return (
    <MainBox>
      <LoginBox>
        <Typography>Forgot Password🚀</Typography>
        <form onSubmit={handleSubmit}>
          <Box>
            <Typography>Enter your email</Typography>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
          </Box>
          <Box>
            <button onClick={handleSubmit}>
              <Typography>
                <>Send Link</>
              </Typography>
            </button>
          </Box>
          <Box>
            <Typography>
              <Link to="/signup">Signup</Link> <Link to="/login">Login</Link>
            </Typography>
          </Box>
        </form>
      </LoginBox>
    </MainBox>
  );
};

export default ForgotPassword;
