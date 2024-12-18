"use client";

import { Box, Button, TextareaAutosize, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  topicId: number;
}

export default function PostForm(props: Props) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const token = localStorage.getItem("token");

    if (!token) {
      alert("ログインが必要です。");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        `https://wara-back-qr9q.onrender.com/api/user/posts/${props.topicId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ post_content: content }),
        }
      );

      if (!response.ok) {
        throw new Error("投稿に失敗しました");
      }

      const result = await response.json();
      console.log("投稿成功:", result);
      alert("投稿が成功しました");
      setContent("");

      if (typeof window !== "undefined") {
        window.location.pathname = "/posts";
      }
    } catch (error) {
      console.error("エラー:", error);
      alert("投稿に失敗しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      margin={"auto"}
      width={"90%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
    >
      <Typography variant={"h5"} mb={"15px"} fontWeight={"bold"} width={"100%"}>
        あなたの回答
      </Typography>
      <TextareaAutosize
        placeholder="回答を入力してください"
        minRows={"5"}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          width: "100%",
          margin: "10px 0",
          padding: "10px",
          border: "1px solid gray",
          borderRadius: "10px",
          overflowY: "auto",
        }}
      />
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"flex-end"}
        py={"5px"}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={handleSubmit}
          disabled={isSubmitting}
          style={{
            marginTop: "10px",
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
            borderRadius: "10px",
            padding: "10px 25px",
            fontSize: "16px",
          }}
        >
          投稿
        </Button>
      </Box>
    </Box>
  );
}
