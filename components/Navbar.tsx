"use client";
// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20 px-20 py-5">
      <div className="flex items-center justify-between">
        <div className="branding flex items-center w-fit gap-2.5 h-fit">
          <Image
            src="/icon.png"
            alt="logo"
            width={30}
            height={30}
            className="hover:scale-110 transition duration-500"
          />
          <span className="text-2xl hover:text-purple-500 cursor-pointer font-bold transition duration-500">
            Shinobu
          </span>
        </div>
        <div className="flex gap-12">
          <ul className="flex items-center justify-center gap-5">
            <Link href={"#features"}>
              <li className="cursor-pointer hover:text-purple-500 transition duration-500">
                Features
              </li>
            </Link>
            <Link href={"#commands"}>
              <li className="cursor-pointer hover:text-purple-500 transition duration-500">
                Commands
              </li>
            </Link>
            <li className="cursor-pointer hover:text-purple-500 transition duration-500">
              Roadmap
            </li>
          </ul>

          <div className="buttons flex gap-2">
            <Link href={"https://discord.gg/q4fZeFw4XF"}>
              <button className="px-5 py-2 font-semibold rounded-md bg-purple-500 hover:bg-purple-600 transition duration-500 cursor-pointer">
                Support Server
              </button>
            </Link>
            <button className="px-5 py-2 font-semibold rounded-md bg-[#5865F2] hover:bg-[#3344ff] transition duration-500 cursor-pointer">
              Login With Discord
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
