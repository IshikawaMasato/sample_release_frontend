import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "笑",
    description: "あなたの面白さを知れます。",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
        <head>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
            <meta name="theme-color" content="#FFFFFF"/>
            <title>笑</title>
        </head>
        <body className={inter.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </body>
        </html>
    );
}
