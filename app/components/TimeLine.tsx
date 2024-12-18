"use client";

import React, { useEffect, useState } from "react";
import { TimeLineData } from "../types";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useRouter } from "next/navigation";

async function handleIncrementHeart(id: number) {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `https://wara-back-qr9q.onrender.com/api/user/review/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to heart");
    }
    console.log("Increment successfully");
  } catch (error) {
    console.error("Error:", error);
  }
}

async function handleDecrementHeart(id: number) {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `https://wara-back-qr9q.onrender.com/api/user/review/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete heart");
    }
    console.log("delete successfully");
  } catch (error) {
    console.error("Error:", error);
  }
}

const TimeLine = ({ post }: TimeLineData) => {
  const [Allposts, setPost] = useState(post);
  const [likedPosts, setLikedPosts] = useState<{ [key: number]: boolean }>({});
  const router = useRouter();

  // 初期状態を設定
  useEffect(() => {
    const initialLikedPosts: { [key: number]: boolean } = {};
    post.forEach((post) => {
      initialLikedPosts[post.user_id] = post.isReviewedByUser;
    });
    setLikedPosts(initialLikedPosts);
  }, [post]);

  //ハートアイコンを押したときの処理
  const toggleHeartCount = (userId: number) => {
    setLikedPosts((prevLikedPosts) => {
      const isLiked = prevLikedPosts[userId];
      const updatedPosts = Allposts.map((post) => {
        if (post.user_id === userId) {
          if (isLiked) {
            return { ...post, total_hearts: post.total_hearts - 1 };
          } else {
            return { ...post, total_hearts: post.total_hearts + 1 };
          }
        }
        return post;
      });
      setPost(updatedPosts);
      return { ...prevLikedPosts, [userId]: !isLiked };
    });
  };

  return (
    <div>
      {Allposts.map((post) => (
        <Card key={post.id} sx={{ mb: 2 }}>
          <CardHeader
            avatar={
              <Avatar
                src={post.user.icon}
                alt={`${post.user.name}のアイコン`}
                sx={{ width: 60, height: 60, mr: 2 }}
              />
            }
            title={
              <Typography
                variant="h3"
                component="div"
                sx={{ fontSize: "1.3rem" }}
              >
                {post.user.name}
              </Typography>
            }
          />
          <CardContent>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.5rem",
                textAlign: "center",
                marginY: "auto",
                fontWeight: "bold",
              }}
            >
              {post.post_content}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                onClick={() => {
                  toggleHeartCount(post.user_id);

                  if (!likedPosts[post.user_id]) {
                    handleIncrementHeart(post.id);
                    router.refresh();
                  } else {
                    handleDecrementHeart(post.id);
                    router.refresh();
                  }
                }}
                startIcon={
                  likedPosts[post.user_id] ? (
                    <FavoriteIcon
                      sx={{ color: "#f50057", width: 30, height: 30 }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      sx={{ color: "#f50057", width: 30, height: 30 }}
                    />
                  )
                }
                sx={{ marginLeft: "auto", marginRight: 1 }}
              />
              <Typography sx={{ marginLeft: 0.5 }}>
                {post.total_hearts}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TimeLine;
