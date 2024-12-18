"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
  createdAt: Date;
}

const formatTime = (seconds: number) => {
  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${h}:${m}:${s}`;
};

function CountDownTimer({ createdAt }: Props) {
  const [time, setTime] = useState(0);
  const [isCountingDown, setIsCountingDown] = useState(true);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const createdTime = new Date(createdAt).getTime();
      const diffInSeconds = Math.floor((now - createdTime) / 1000);

      if (diffInSeconds < 120) {
        setTime(120 - diffInSeconds);
        setIsCountingDown(true);
      } else {
        setTime(diffInSeconds - 120);
        setIsCountingDown(false);
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [createdAt]);

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Typography variant="h3" fontWeight={"bold"}>
        {formatTime(time)}
      </Typography>
    </Box>
  );
}

export default CountDownTimer;
