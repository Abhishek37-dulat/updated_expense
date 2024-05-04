import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "100%",
  height: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#445760",
  boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
  padding: "40px 20px",
  "&>p:nth-of-type(1)": {
    color: "#fff",
    "&>b": {
      fontSize: "20px",
      color: "#02B2AF",
    },
  },
  "&>p:nth-of-type(2)": {
    color: "#fff",
    cursor: "pointer",
    fontSize: "18px",
    transition: "0.4s",
    ":hover": {
      fontSize: "20px",
    },
    ":active": {
      fontSize: "18px",
    },
  },
}));

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <MainBox>
      <Typography>
        Expense<b>X</b>
      </Typography>
      <Typography onClick={() => navigate("/profile")}>Profile</Typography>
    </MainBox>
  );
};

export default TopBar;
