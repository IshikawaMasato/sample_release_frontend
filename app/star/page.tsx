"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ShowTop3 from "../components/ShowTop3";
import Show4thOrLower from "../components/Show4thOrLower";
import { Users } from "../types";
import BottomAppBar from "../components/BottomAppBar";

const Page = () => {
  const [Users, setUsers] = useState<Users | undefined>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchAllUserRanking = async (token: string | null) => {
      const res = await fetch(
        "https://wara-back-qr9q.onrender.com/api/user/users",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          cache: "no-store",
        }
      );
      const UsersRanking = await res.json();
      setUsers(UsersRanking);
    };
    fetchAllUserRanking(token);
  }, []);

  return (
    <Box sx={{ padding: 2, paddingTop: 6 }}>
      <h1
        className="
                    flex
                    justify-center
                    font-medium
                    text-2xl
                    pb-3
                "
      >
        Leaderboard
      </h1>
      {Users && <ShowTop3 users={Users.users} />}
      {Users && <Show4thOrLower users={Users.users} />}
      <BottomAppBar />
    </Box>
  );
};

export default Page;
