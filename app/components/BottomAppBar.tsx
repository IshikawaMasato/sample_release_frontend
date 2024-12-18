"use client";

import React, { useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";

const BottomAppBar = () => {
  //現在どのパスを参照しているかを確認するためのuseState
  const [value, setValue] = React.useState("");
  const [pathname, setPathname] = React.useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  //現在のパスを格納
  useEffect(() => {
    setValue(window.location.pathname);
    setPathname(window.location.pathname);
  }, []);

  //ボタンを押すとURLを更新
  const TransitionToHome = () => {
    window.location.pathname = "/home";
  };

  const TransitionToAdd = () => {
    window.location.pathname = "/posts";
  };

  const TransitionToStar = () => {
    window.location.pathname = "/star";
  };

  const TransitionToAccount = () => {
    window.location.pathname = "/users";
  };

  return (
    <Box
      sx={{
        marginTop: "2px",
      }}
    >
      <BottomNavigation
        sx={{
          width: "100%",
          height: "6%",
          bgcolor: "white",
          position: "fixed",
          justifyContent: "center",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          borderTop: 1,
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          value="/home"
          onClick={TransitionToHome}
          icon={
            pathname === "/home" ? (
              <HomeIcon sx={{ width: 35, height: 35 }} />
            ) : (
              <HomeOutlinedIcon sx={{ width: 35, height: 35 }} />
            )
          }
          sx={{
            color: pathname === "/home" ? "black" : "inherit",
            "&.Mui-selected": { color: "black" },
          }}
        />

        <BottomNavigationAction
          value="/add"
          onClick={TransitionToAdd}
          icon={
            pathname === "/add" ? (
              <AddCircleOutlinedIcon sx={{ width: 35, height: 35 }} />
            ) : (
              <AddCircleOutlineIcon sx={{ width: 35, height: 35 }} />
            )
          }
          sx={{
            color: pathname === "/add" ? "black" : "inherit",
            "&.Mui-selected": { color: "black" },
          }}
        />

        <BottomNavigationAction
          value="/star"
          onClick={TransitionToStar}
          icon={
            pathname === "/star" ? (
              <StarIcon sx={{ width: 35, height: 35 }} />
            ) : (
              <StarBorderIcon sx={{ width: 35, height: 35 }} />
            )
          }
          sx={{
            color: pathname === "/add" ? "black" : "inherit",
            "&.Mui-selected": { color: "black" },
          }}
        />

        <BottomNavigationAction
          value="/account"
          onClick={TransitionToAccount}
          icon={
            pathname === "/account" ? (
              <AccountCircleIcon sx={{ width: 35, height: 35 }} />
            ) : (
              <AccountCircleOutlinedIcon sx={{ width: 35, height: 35 }} />
            )
          }
          sx={{
            color: pathname === "/account" ? "black" : "inherit",
            "&.Mui-selected": { color: "black" },
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomAppBar;
