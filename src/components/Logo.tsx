"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      height="100"
      width="150"
      src="https://www.josunhotel.com/static/home/images/ko/pc/HUMA/bg_main01.jpg"
    />
  );
};

export default Logo;
