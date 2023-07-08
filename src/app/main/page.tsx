"use client"; //클라이언트 렌더링하기위해서 꼭 써줘야함.

import Navbar from "@/components/Navbar";
import MainHeader from "@/components/mainHeader";
import { motion, MotionStyle } from "framer-motion";
import Image from "next/image";
const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Image
        alt="hotelImage"
        src="https://www.josunhotel.com/static/home/images/ko/pc/HUMA/bg_main01.jpg"
        fill
      ></Image>
    </div>
  );
};
export default Main;
