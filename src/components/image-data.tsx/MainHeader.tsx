"use client";
import Image from "next/image";
const MainHeader = () => {
  return (
    <div
      className="
      border-[1px]
      border-neutral-400
      w-full
  "
    >
      <Image
        alt="image"
        src="https://www.josunhotel.com/static/home/images/ko/pc/HUMA/bg_main01.jpg"
        layout="fill"
        objectFit="cover"
      ></Image>
    </div>
  );
};
export default MainHeader;
