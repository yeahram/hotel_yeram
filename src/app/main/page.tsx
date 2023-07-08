"use client"; //클라이언트 렌더링하기위해서 꼭 써줘야함.

import MainHeader from "@/components/mainHeader";
import { motion, MotionStyle } from "framer-motion";

const Main = () => {
  return (
    <div
      className="
        w-full
        h-full
        flex
        justify-center
        items-center
        "
    >
      <MainHeader></MainHeader>
    </div>
  );
};
export default Main;
