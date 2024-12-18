"use client";

import { Box, Container, Link, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextForm from "@/app/components/TextForm";

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailExists, setEmailExists] = useState(false);

  /**
   * emailの重複チェックを行う
   * 重複してない -> step2: 名前とパスワードの入力画面
   * 重複してる -> そのままで新規パスワードを入力してもらう
   */
  const handleSubmitEmail = async () => {
    console.log("メールアドレスチェック処理を開始");
    console.log(`email ${email}`);

    try {
      const res = await fetch(
        "https://wara-back-qr9q.onrender.com/api/checkEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      const data = await res.json();
      if (data.exists) {
        console.log("メールアドレス重複");
        setEmailExists(true);
      } else {
        console.log("名前とパスワード入力に遷移");
        setEmailExists(false);
        setStep(2);
      }
    } catch (err) {
      console.error("Error checking email:", err);
    }

    console.log("メールアドレスチェック処理を終了");
  };

  /**
   * sign up処理を行う
   */
  const handleSignUp = async () => {
    console.log("登録処理開始");
    console.log(`名前: ${name}`);
    console.log(`パスワード: ${password}`);

    try {
      const res = await fetch(
        "https://wara-back-qr9q.onrender.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const data = await res.json();
      if (res.status === 201) {
        console.log("登録成功");
        if (typeof window !== "undefined") {
          localStorage.setItem("token", data.token);
        }

        // /homeに遷移
        if (typeof window !== "undefined") {
          window.location.pathname = "/home";
        }
      } else {
        console.log("登録失敗", data);
      }
    } catch (err) {
      console.log("エラー", err);
    }

    console.log("登録処理終了");
  };

  /**
   * ステップ1で表示されるメールアドレスフォーム
   */
  const emailForm = () => {
    return (
      <>
        <Typography variant="h6" component="h2" py={2} fontWeight={"bolder"}>
          アカウントを作成する
        </Typography>
        <Typography pb={2}>メールアドレスを入力してください</Typography>
        <TextForm label={"メールアドレス"} onChange={setEmail} type={"email"} />
      </>
    );
  };

  /**
   * ステップ2で表示されるフォーム
   */
  const signUpForm = () => {
    return (
      <>
        <Typography variant="h6" component="h2" py={2} fontWeight={"bolder"}>
          続ける
        </Typography>
        <Typography pb={2}>名前とパスワードを入力してください</Typography>
        <TextForm label={"名前"} onChange={setName} type={"text"} />
        <TextForm
          label={"パスワード"}
          onChange={setPassword}
          type={"password"}
        />
      </>
    );
  };

  return (
    <main>
      <Container>
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
            {step === 1 && emailForm()}
            {step === 2 && signUpForm()}
            {emailExists && (
              <Typography color="error" pt={2}>
                メールアドレスは既に存在します。新しいパスワードを入力してください。
              </Typography>
            )}
          </Box>
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
            onClick={step === 1 ? handleSubmitEmail : handleSignUp}
          >
            {step === 1 ? "Check Email" : "Sign Up"}
          </Button>
          <Typography mt={2}>
            アカウントをお持ちの方は
            <Link href="/login" variant="body2">
              こちら
            </Link>
          </Typography>
        </Box>
      </Container>
    </main>
  );
}
