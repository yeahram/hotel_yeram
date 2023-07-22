"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

const images = [
  "https://www.sangsangmadang.com/feah/temp/2023/202304/7848cb5f-059d-4534-927d-4f911f43ec31",
  "https://images.unsplash.com/photo-1660120447916-123439b05c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  "https://www.josunhotel.com/util/file/download.do?fileSn=1558651&sysCode=GJJ",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  "https://lounge.josunhotel.com/wp-content/uploads/2023/06/6_00203-1-1024x667.jpg",
  "https://lounge.josunhotel.com/wp-content/uploads/2023/06/6_00186-1-1024x667.jpg",
  "https://lounge.josunhotel.com/wp-content/uploads/2023/06/6_00158-1.jpg",
  "https://lounge.josunhotel.com/wp-content/uploads/2023/06/6_00046-1.jpg",
  "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://lounge.josunhotel.com/wp-content/uploads/2023/06/6_00034-1.jpg",
  "https://www.josunhotel.com/util/file/download.do?fileSn=1449441&sysCode=TWCB",
];

const variants = {
  initial: (direction: any) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: any) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    };
  },
};

const FourCaroucel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // 다음 버튼
  const nextButton = () => {
    setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  // 이전 버튼
  const prevButton = () => {
    setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  return (
    <div className="flex">
      <div className="m-auto w-screen aspect-video relative overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            className="absolute top-0 left-0 flex w-full h-full object-cover object-center"
            custom={direction}
            key={images[index]}
          >
            <motion.img src={images[index]} alt="caroucel" className="w-1/3" />
            <motion.img
              src={
                index + 1 > images.length - 1 ? images[0] : images[index + 1]
              }
              alt=""
              className="w-1/3"
            />
            <motion.img
              src={
                index + 2 > images.length - 1 ? images[1] : images[index + 2]
              }
              alt=""
              className="w-1/3"
            />
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevButton}
          className="absolute top-1/2 left-4 -translate-y-1/2 hover:text-white"
        >
          <BiChevronLeftCircle size={30} />
        </button>
        <button
          onClick={nextButton}
          className="absolute top-1/2 right-4 -translate-y-1/2 hover:text-white"
        >
          <BiChevronRightCircle size={30} />
        </button>
      </div>
    </div>
  );
};
export default FourCaroucel;
