import React from "react";
import "./globals.css";
import "./globals.css";
import { Nunito } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";
import Recoil from "./utils/Recoil";
import ReactQuery from "./utils/ReactQuery";
const font = Noto_Sans_KR({ subsets: ["latin"], weight: "300" });
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
