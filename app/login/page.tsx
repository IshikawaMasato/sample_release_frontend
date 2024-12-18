"use client";

import { Box, Button, Container, Link, Typography } from "@mui/material";
import { useState } from "react";
import TextForm from "../components/TextForm";
import React from "react";

/**
 * ログインページ
 */
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // エラーメッセージの状態を追加

  /**
   * 入力コンポーネント
   */
  const loginForm = () => {
    return (
      <>
        <Typography variant="h6" component="h2" py={2} fontWeight={"bolder"}>
          Log In
        </Typography>
        <TextForm label={"メールアドレス"} onChange={setEmail} type={"email"} />
        <TextForm
          label={"パスワード"}
          onChange={setPassword}
          type={"password"}
        />
      </>
    );
  };

  /**
   * ログイン処理
   */
  const handleLogin = async () => {
    console.log("ログイン処理開始");
    console.log(`
        入力値
        メールアドレス: ${email}
        パスワード: ${password}
        `);

    try {
      const response = await fetch(
        "https://wara-back-qr9q.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // ローカルストレージにトークンを保存
        if (typeof window !== "undefined") {
          localStorage.setItem("token", token);
        }

        console.log("ログイン成功");
        console.log("トークン:", token);

        // /homeに遷移
        if (typeof window !== "undefined") {
          window.location.pathname = "/home";
        }
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "ログイン失敗"); // エラーメッセージを状態に設定
      }
    } catch (error) {
      console.error("ログインエラー:", error);
      setErrorMessage("ログインエラーが発生しました"); // エラーメッセージを状態に設定
    }

    console.log("ログイン処理終了");
  };

  return (
    <Container component={"main"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 20,
          px: 2,
        }}
      >
        <Typography variant="h3" component="h3" pb={15} fontWeight={"bold"}>
          笑
        </Typography>
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {loginForm()}
        </Box>
        {errorMessage && ( // エラーメッセージが存在する場合に表示
          <Typography color="error" variant="body1" py={2}>
            {errorMessage}
          </Typography>
        )}
        <Button
          fullWidth
          sx={{
            mt: 3,
            borderRadius: "10px",
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "black",
            },
          }}
          onClick={handleLogin}
        >
          Log In
        </Button>
        <Typography mt={2}>
          アカウントをお持ちでない方は
          <Link href="/signup" variant="body2">
            こちら
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
