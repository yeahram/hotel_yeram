"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
interface imageType {
  id: number;
  title: string;
  subtitle: string;
  imageSrc: string;
}
const images = [
  {
    id: 1,
    title: "CLOSER TO HOLIDAY",
    subtitle:
      "부산으로 찾아온<요시고 사진전 : 따듯한 휴일의 기적 2023.05.30 - 2023.09.02>",
    imageSrc:
      "https://www.sangsangmadang.com/feah/temp/2023/202304/7848cb5f-059d-4534-927d-4f911f43ec31",
  },
  // {},
  // {},
  // "https://images.unsplash.com/photo-1660120447916-123439b05c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  // "https://www.josunhotel.com/util/file/download.do?fileSn=1558651&sysCode=GJJ",
  // "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  // "https://lounge.josunhotel.com/wp-content/uploads/2023/06/6_00203-1-1024x667.jpg",
  // "https://lounge.josunhotel.com/wp-content/uploads/2023/06/6_00186-1-1024x667.jpg",
  // "https://lounge.josunhotel.com/wp-content/uploads/2023/06/6_00158-1.jpg",
  // "https://lounge.josunhotel.com/wp-content/uploads/2023/06/6_00046-1.jpg",
  // "https://images.unsplash.com/photo-1520587393050-c5298e1a8486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  // "https://lounge.josunhotel.com/wp-content/uploads/2023/06/6_00034-1.jpg",
  // "https://images.unsplash.com/photo-1565041054083-45a0d4b25229?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
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

const FourCaroucel: React.FC<imageType> = () => {
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
      <div className="m-auto h-[400px] w-5/6  aspect-video relative overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            className="absolute top-0 left-0 flex w-full h-[400px] object-cover object-center"
            custom={direction}
            key={images[index]?.id}
          >
            <div
              className="
              w-1/3
              h-[400px]
              "
            >
              <motion.img
                src={images[index].imageSrc}
                alt="caroucel"
                // className="w-1/3"
                className="p-5 w-full h-[350px]"
              />
              <ul className="p-5">
                <li>{images[index].title}</li>
              </ul>
            </div>

            <motion.img
              src={
                index + 1 > images.length - 1
                  ? images[0].imageSrc
                  : images[index + 1]?.imageSrc
              }
              alt=""
              className="w-1/3"
            />
            <motion.img
              src={
                index + 2 > images.length - 1
                  ? images[1].imageSrc
                  : images[index + 2].imageSrc
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
