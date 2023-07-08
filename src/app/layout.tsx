import React from "react";
import "./globals.css";
import "./globals.css";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import { Playfair } from "next/font/google";
import Recoil from "./utils/Recoil";
import ReactQuery from "./utils/ReactQuery";
const inter = Inter({ subsets: ["latin"] });
const font = Nunito({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-KR">
      <body className={font.className}>
        <Recoil>
          <ReactQuery>{children}</ReactQuery>
        </Recoil>
      </body>
    </html>
  );
}
