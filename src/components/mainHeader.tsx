"use client";

import Image from "next/image";
import Menu from "./menu";

const MainHeader = () => {
  return (
    <div
      className="
      border-[1px]
      border-neutral-400
      min-w-1920
  "
    >
      <Image
        alt="image"
        src="https://www.josunhotel.com/static/home/images/ko/pc/HUMA/bg_main01.jpg"
        layout="fill"
        objectFit="cover"
        className="
        -z-10
        "
      ></Image>
      <Menu></Menu>
    </div>
  );
};
export default MainHeader;
