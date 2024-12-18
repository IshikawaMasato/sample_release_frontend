"use client";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const useCheckToken = () => {
  console.log("トークンチェック開始");
  var token = null;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
    if (token) {
      console.log("トークン確認, ホームに遷移");
      window.location.pathname = "/home";
    } else {
      console.log("トークン無し, ログインに遷移");
      window.location.pathname = "/login";
    }
  }
  console.log("トークンチェック終了");
};

export default function Home() {
  useCheckToken();

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", marginTop: "5rem" }}>
      <Box className={inter.className}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Wara
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          The best place to share your thoughts and stories
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginTop: "2rem" }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
}
