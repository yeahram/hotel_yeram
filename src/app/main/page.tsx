"use client"; //클라이언트 렌더링하기위해서 꼭 써줘야함.

import { motion, MotionStyle } from "framer-motion";
import MainHeader from "../../components/image-data.tsx/MainHeader";

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
