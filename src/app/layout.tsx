import React from "react";

import "./globals.css";
import Recoil from "./utils/Recoil";
import ReactQuery from "./utils/ReactQuery";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-KR">
      <body>
        <Recoil>
          <ReactQuery>{children}</ReactQuery>
        </Recoil>
      </body>
    </html>
  );
}
