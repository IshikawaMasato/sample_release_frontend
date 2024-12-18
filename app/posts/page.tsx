"use client";

import { Box, Container, Typography } from "@mui/material";
import Title from "@/app/components/Title";
import PostForm from "@/app/posts/PostForm";
import CountDownTimer from "../components/CountDownTimer";
import { useEffect, useState } from "react";
import Answer from "../components/Answer";
import BottomAppBar from "../components/BottomAppBar";

export interface RecentTopic {
  topic_id: number;
  topic: string;
  topic_created_at: Date;
  topic_image: string;
  post_id: number | null;
  post_content: string | null;
  post_created_at: Date | null;
}

export default function PostPage() {
  const [topic, setTopic] = useState<RecentTopic | undefined>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchLatestTopic = async (token: string | null) => {
      if (token) {
        const res = await fetch(
          `https://wara-back-qr9q.onrender.com/api/user/recent`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const Topic: RecentTopic = await res.json();
        setTopic(Topic);
      } else {
      }
    };
    fetchLatestTopic(token);
  }, []);

  if (!topic) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container
      component={"main"}
      maxWidth={false}
      disableGutters
      sx={{
        marginTop: "15px",
      }}
    >
      <CountDownTimer createdAt={new Date()} />
      <Box my={"10px"} textAlign={"center"}>
        <Typography variant={"h3"} fontWeight={"bolder"}>
          投稿する
        </Typography>
      </Box>
      <Title topic={topic?.topic} image={topic?.topic_image} />
      {topic.post_id === null ? (
        <PostForm topicId={topic.topic_id} />
      ) : (
        <Answer post_content={topic.post_content!} />
      )}
      <BottomAppBar />
    </Container>
  );
}
