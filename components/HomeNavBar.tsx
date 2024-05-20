import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Bell } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const HomeNavBar = () => {
  const auth =getAuth();
  const router = useRouter();
  const signOutAccount=()=>{
    signOut(auth).then(() => {
      router.push("/login")
    }).catch((error:any) => {
      console.log(error.message);
      
    });
  }
  return (
    <nav className="sticky z-50 p-4  backdrop-blur-lg bg-white   dark:bg-gray-950/90 text-brand">
      <div className="px-16">
        <div className="flex justify-between py-2 items-center">
          <Link className="flex items-center" href="#">
            <Image src="/logo.svg" width={50} height={50} alt="logo" />
            <p className="ml-4 font-sans font-extrabold text-2xl">
              Memory Reboot
            </p>
          </Link>

          {/* <div className="flex items-center gap-4 text-white">
            <Link href={"/signup"}>
                <Button size="lg" variant="outline">
                  Register
                </Button>
            </Link>
            <Link href={"/login"}><Button size="lg" className="bg-brand">Login</Button></Link>
          </div> */}
          <ul className="flex space-x-10 text-slate-600 font-semibold">
            <li>
              <Link href="/upcoming">Upcoming Tests</Link>
            </li>
            <li>
              <Link href="">Results</Link>
            </li>
            <li>
              <Link href="">Profile</Link>
            </li>
            <li>
              <Link href="">Help</Link>
            </li>
          </ul>
          <div className="flex justify-center content-center align-bottom gap-10">
            <Popover>
              <PopoverTrigger asChild>
                <Avatar>
                  <AvatarImage src="/avatar.jpg" className="object-center" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-50">
                <Button onClick={()=>signOutAccount()} variant="destructive">
                  Logout
                </Button>
              </PopoverContent>
            </Popover>
            <Bell className="place-self-center text-black" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavBar;
