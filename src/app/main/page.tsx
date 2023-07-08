"use client"; //클라이언트 렌더링하기위해서 꼭 써줘야함.

import Navbar from "@/components/Navbar";
import MainHeader from "@/components/mainHeader";
import { motion, MotionStyle } from "framer-motion";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
};
export default Main;
