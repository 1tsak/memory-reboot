
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-5 z-50 mx-4 p-4  backdrop-blur-lg bg-white/10 rounded-md shadow-lg dark:bg-gray-950/90 text-brand">
      <div className="px-24">
        <div className="flex justify-between py-2 items-center">
          <Link className="flex items-center" href="#">
            <Image src="/logo.svg" width={50} height={50} alt="logo"/>
            <p className="ml-4 font-sans text-white font-extrabold text-2xl">Memory Reboot</p>
          </Link>
          
          {/* <nav className="hidden md:flex gap-4">
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
              Home
            </Link>
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
              About
            </Link>
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
              Services
            </Link>
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
              Contact
            </Link>
          </nav> */}
          <div className="flex items-center gap-4 text-white">
            <Link href={"/signup"}>
                <Button size="lg" variant="outline">
                  Register
                </Button>
            </Link>
            <Link href={"/login"}><Button size="lg" className="bg-brand">Login</Button></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
