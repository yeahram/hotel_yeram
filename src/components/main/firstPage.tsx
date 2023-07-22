"use client"; //클라이언트 렌더링하기위해서 꼭 써줘야함.

import Navbar from "@/components/Navbar";
import MainHeader from "@/components/mainHeader";
import { motion, MotionStyle } from "framer-motion";
import Image from "next/image";
const FirstPage = () => {
  return (
    <div className="h-[100vh]">
      <div className="h-[80px]">
        <Navbar />
      </div>

      <div className="mt-[250px]">
        <div
          className="
          text-2xl
          text-slate-50
          flex
          justify-center
          align-center
          h-[100px]
          "
        >
          EXPERIENCE THE DIFFERENCE
        </div>
        <div
          className="
        flex
        flex-row
        flex-nowrap
        justify-evenly
        align-items
        text-slate-50
        text-lg
        hover:cursor-pointer
        min-w-[1200px]
        "
        >
          <div>RESERVATION</div>
          <div>HOTEL</div>
          <div>CHECK IN/OUT</div>
          <div>ROOM / ADULT / CHILDREN</div>
        </div>
      </div>
      <Image
        alt="hotelImage"
        src="https://www.josunhotel.com/static/home/images/ko/pc/HUMA/bg_main01.jpg"
        fill
        style={{ objectFit: "cover", zIndex: "-1" }}
      ></Image>
    </div>
  );
};
export default FirstPage;
