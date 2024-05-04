import React, { useState } from "react";
import { styled, Box, Typography, IconButton, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { PieChart } from "@mui/x-charts/PieChart";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
const TopNav = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  height: "50px",
  backgroundColor: "#445760",
  boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
}));
const ProfileContent = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "calc(100% - 100px)",
  padding: "50px",
  minHeight: "calc(100vh - 100px)",
  [theme.breakpoints.down("msm")]: {
    padding: "0px",
    width: "100%",
  },
}));
const ProfileBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "calc(100% - 50px)",
  minHeight: "max-content",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
  [theme.breakpoints.down("msm")]: {
    boxShadow: "none",
  },
  "&>div:nth-of-type(1)": {
    // border: "1px solid black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",

    "&>p": {
      fontSize: "24px",
      fontWeight: "600",
    },
    "&>button": {
      backgroundColor: "#2C65CE",
      padding: "10px 20px",
      color: "#fff",
      border: "none",
      outline: "none",
      borderRadius: "8px",
      cursor: "pointer",
    },
  },
  "&>div:nth-of-type(2)": {
    // border: "1px solid black",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginTop: "30px",
    [theme.breakpoints.down("lsm")]: {
      flexDirection: "column",
    },
  },
}));

const UserAnylics = () => {
  const navigate = useNavigate();
  const data = [
    { label: "Income", value: 500 },
    { label: "Expense", value: 30 },
  ];
  return (
    <MainBox>
      <TopNav>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackRoundedIcon sx={{ color: "#fff" }} />
        </IconButton>
      </TopNav>
      <ProfileContent>
        <ProfileBox>
          <Box>
            <Typography>Analysis</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box style={{ display: "flex" }}>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#02B2AF",
                }}
              ></Box>
              <Typography sx={{ marginLeft: "10px", fontWeight: "600" }}>
                Income
              </Typography>
            </Box>
            <Box style={{ display: "flex", marginBottom: "20px" }}>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#2E96FF",
                }}
              ></Box>
              <Typography sx={{ marginLeft: "10px", fontWeight: "600" }}>
                Expense
              </Typography>
            </Box>
            <PieChart
              series={[
                {
                  paddingAngle: 5,
                  innerRadius: 100,
                  outerRadius: 120,
                  data,
                },
              ]}
              margin={{ right: 0 }}
              width={250}
              height={250}
              legend={{ hidden: true }}
            />
          </Box>
        </ProfileBox>
      </ProfileContent>
    </MainBox>
  );
};

export default UserAnylics;
