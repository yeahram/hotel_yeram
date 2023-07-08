"use client";

import Container from "./Container";
import Logo from "./Logo";
import Search from "./Search";
import { Ysabeau } from "next/font/google";
const font = Ysabeau({ subsets: ["latin"] });

const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between  gap-3 md:gap-0">
            <div className="min-w-[350px] pl-[10px]">
              <h1 className={`${font.className} text-lg`}>
                The Shilla Hotels & Resorts
              </h1>
            </div>
            <Search />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
