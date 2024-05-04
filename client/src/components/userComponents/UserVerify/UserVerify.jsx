import { Box, styled } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import {
  updateAuthLoading,
  userVerified,
} from "../../../redux/reducers/ducks/MainDuck";
import { useParams } from "react-router-dom";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&>button": {
    marginTop: "40px",
    border: "none",
    outline: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    backgroundColor: "#02B2AF",
    color: "#fff",
    transition: "0.4s",
    ":hover": {
      boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
      transform: "scale(1.2)",
    },
    ":active": {
      transform: "scale(1)",
    },
  },
}));

const UserVerify = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleVerify = () => {
    dispatch(updateAuthLoading(true));
    dispatch(userVerified(id));
  };
  return (
    <MainBox>
      <button onClick={() => handleVerify()}>Click here to Verify</button>
    </MainBox>
  );
};

export default UserVerify;
