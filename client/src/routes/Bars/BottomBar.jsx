import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
const MainBox = styled(Box)(({ theme }) => ({
  borderBottom: "2px solid #02B2AF",
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  "&>div": {
    width: "100%",
    padding: "12px 10px",
    cursor: "pointer",
  },
}));

const BottomBar = ({ dataType, setDataType }) => {
  return (
    <MainBox>
      <Box
        sx={{
          borderBottom: `${dataType === 0 ? "5px solid #02B2AF" : "none"}`,
          backgroundColor: `${dataType === 0 ? "#445760" : "#fff"}`,
          color: `${dataType === 0 ? "#fff" : "#010101"}`,
        }}
        onClick={() => setDataType(0)}
      >
        <Typography
          sx={{
            fontWeight: `${dataType === 0 ? "600" : "400"}`,
          }}
        >
          Daily
        </Typography>
      </Box>
      <Box
        sx={{
          borderBottom: `${dataType === 1 ? "5px solid #02B2AF" : "none"}`,
          backgroundColor: `${dataType === 1 ? "#445760" : "#fff"}`,
          color: `${dataType === 1 ? "#fff" : "#010101"}`,
        }}
        onClick={() => setDataType(1)}
      >
        <Typography
          sx={{
            fontWeight: `${dataType === 1 ? "600" : "400"}`,
          }}
        >
          Monthly
        </Typography>
      </Box>
      <Box
        sx={{
          borderBottom: `${dataType === 2 ? "5px solid #02B2AF" : "none"}`,
          backgroundColor: `${dataType === 2 ? "#445760" : "#fff"}`,
          color: `${dataType === 2 ? "#fff" : "#010101"}`,
        }}
        onClick={() => setDataType(2)}
      >
        <Typography
          sx={{
            fontWeight: `${dataType === 2 ? "600" : "400"}`,
          }}
        >
          {" "}
          Yearly
        </Typography>
      </Box>
    </MainBox>
  );
};

export default BottomBar;
