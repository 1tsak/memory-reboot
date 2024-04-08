"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Countdown from "react-countdown";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Link from "next/link";

const page = () => {
  return (
    <div
      className="h-screen fixed w-screen"
      style={{
        backgroundImage: `url("/mcq_bg.png")`,
      }}
    >
      <nav className="h-[100px] flex flex-row mt-10 rounded-md bg-white mb-10 mx-8">
        <div className="flex-grow ml-20">
            <div className="flex items-center content-center h-full">
            <Image src="/logo.svg" width={50} height={50} alt="logo"/>
            <p className="ml-4 font-sans font-extrabold text-2xl">Memory Reboot</p>
            </div>
        </div>
        <div className="flex flex-col justify-center content-center gap-2 m-10">
          <Countdown
            date={3599999 + Date.now()}
            renderer={(prop) => (
              <span className="font-bold w-0 content-center">
                <span className="content-center">
                  {prop.hours}:{prop.minutes}:{prop.seconds}
                </span>
              </span>
            )}
          />
          <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">End test</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will submit your test.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Link href="/home">
              <AlertDialogAction className="bg-brand" >Submit</AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
        </div>
      </nav>
      <div className="flex flex-row m-10 space-x-4 h-[70%]">
        <div className="bg-white h-full w-[25%] rounded-lg">fsdfs</div>
        <div className="bg-white flex-grow rounded-lg">fsdaf</div>
      </div>
    </div>
  );
};

export default page;
