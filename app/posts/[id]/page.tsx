"use client";
import { Box, Container, Typography } from "@mui/material";
import Title from "@/app/components/Title";
import Answer from "@/app/components/Answer";
import { useEffect, useState } from "react";
import { PostData } from "@/app/types";

export default function PostPage({ params }: { params: { id: number } }) {
  const [post, setPost] = useState<PostData | undefined>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchDetailPost = async (id: number, token: string | null) => {
      const res = await fetch(
        `https://wara-back-qr9q.onrender.com/api/user/posts/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          cache: "no-store",
        }
      );
      const Post: PostData = await res.json();
      setPost(Post);
    };
    fetchDetailPost(params.id, token);
  }, []);

  return (
    <Container component={"main"} maxWidth={false} disableGutters>
      <Box my={"60px"} textAlign={"center"}>
        <Typography variant={"h3"} fontWeight={"bolder"}>
          投稿する
        </Typography>
      </Box>
      <Title topic={post?.post.topic.topic} image={post?.post.topic.image} />
      <Answer post_content={post?.post.post_content} />
    </Container>
  );
}
