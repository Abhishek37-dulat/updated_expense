import { Box, styled } from "@mui/material";
import React from "react";
import TopBar from "./Bars/TopBar";
import BottomBar from "./Bars/BottomBar";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const Navbar = ({ dataType, setDataType }) => {
  return (
    <MainBox>
      <TopBar />
      <BottomBar dataType={dataType} setDataType={setDataType} />
    </MainBox>
  );
};

export default Navbar;
