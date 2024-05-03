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
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

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
            <Image src="/logo.svg" width={50} height={50} alt="logo" />
            <p className="ml-4 font-sans font-extrabold text-2xl">
              Memory Reboot
            </p>
            </div>
            </div>
            <div>
            <div className="flex flex-col justify-center content-center gap-2 m-4">
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
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This will submit your test.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Link href="/home">
                      <AlertDialogAction className="bg-brand">
                        Submit
                      </AlertDialogAction>
                    </Link>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        
      </nav>
      <div className="flex flex-row m-10 space-x-4 h-[70%]">
        <Card className="h-full w-[25%] rounded-lg bg-purple-600 p-5 border-0">
          <CardHeader>
            <CardTitle className="text-lg text-white">DSA Test</CardTitle>
            <CardDescription className="text-white">MCQs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-rows-5 grid-cols-5 gap-1 *:h-[40px] *:text-sm ">
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 1
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 2
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 3
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 4
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 5
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 6
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 7
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 8
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 9
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 10
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 11
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 12
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 13
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 14
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 15
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 16
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 17
              </div>
              <div className="p-2 bg-white rounded-sm font-semibold text-slate-700">
                Q. 18
              </div>
            </div>
            <div className="progress font-semibold flex flex-col gap-5 text-white">
              <div className="flex gap-5 items-center">
                <div className="p-2 bg-white rounded-sm font-semibold h-10 w-10 text-black" >10</div>
                <p>Unanswered</p>
              </div>
              <div className="flex gap-5 items-center">
                <div className="p-2 bg-green-600 rounded-sm font-semibold h-10 w-10">
                  12
                </div>
                <p>Answered</p>
              </div>
              <div className="flex gap-5 items-center">
                <div className="p-2 bg-yellow-300 rounded-sm font-semibold h-10 w-10 text-black">3</div>
                <p>Marked for Review</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="bg-white flex flex-col flex-1 rounded-lg p-8">
          <div className="h-full">
            <h2 className="text-xl">
              1. The data structure required to check whether an expression
              contains a balanced parenthesis is?
            </h2>
            <div className="flex flex-col gap-5 m-5">
              <div className="flex items-center space-x-2">
                <Checkbox id="ans1" />
                <label
                  htmlFor="ans1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Queue Data Structure
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="ans2" />
                <label
                  htmlFor="ans2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Tree Data Structure
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="ans3" />
                <label
                  htmlFor="ans3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Stack Data Structure
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="ans4" />
                <label
                  htmlFor="ans4"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Linked List Data Structure
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-end mr-5">
            <Button>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
