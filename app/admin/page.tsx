"use client";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Papa from "papaparse";
import { DialogClose } from "@radix-ui/react-dialog";
import TestCard from "@/components/TestCard";

const page = () => {
  const [quizList, setQuizList] = useState(() =>
    JSON.parse(localStorage.getItem("upcomingQuiz") || "[]")
  );
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [jsonData, setJsonData] = useState();
  const saveQuiz = () => {
    if (!name) {
      alert("Name Can't be empty!");
      return;
    }
    if (!jsonData) {
      alert("Invalid CSV Data");
      return;
    }
    if (!date) {
      alert("Date Can't be empty!");
      return;
    }
    const newQuiz = {
      name,
      date,
      quizData: jsonData,
    };
    const updatedQuiz = [...quizList, newQuiz];
    setQuizList(updatedQuiz);
    localStorage.setItem("upcomingQuiz", JSON.stringify(updatedQuiz));
    setName("");
    setDate("");
  };
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results: any) => {
          console.log(results.data);

          setJsonData(results.data);
        },
        error: (error) => {
          console.error("Error parsing CSV:", error);
        },
      });
    }
  };
  return (
    <div className="min-h-screen bg-[#F7F4FB]">
      <nav className="sticky z-50 p-4  backdrop-blur-lg bg-white   dark:bg-gray-950/90 text-brand">
        <div className="px-16">
          <div className="flex justify-between py-2 items-center">
            <Link className="flex items-center" href="#">
              <Image src="/logo.svg" width={50} height={50} alt="logo" />
              <p className="ml-4 font-sans font-extrabold text-2xl">
                Memory Reboot
              </p>
            </Link>
            <p className="text-xl font-semibold">Instructor's Panel</p>
            <div></div>
          </div>
        </div>
      </nav>
      <div className="w-full flex flex-col items-center p-5">
        <Dialog>
          <DialogTrigger>
            <div className="p-5 border-purple-600 px-16 shadow-md border-2 flex flex-col rounded-lg w-fit justify-center items-center font-semibold cursor-pointer">
              <Plus size={30} />
              Add a Test
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Test</DialogTitle>
              <DialogDescription>
                Name Your Test, Select a Date & Upload a Questions CSV.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  File
                </Label>
                <Input
                  id="csv_picker"
                  type="file"
                  required
                  className="col-span-3"
                  accept=".csv"
                  onChange={handleFileChange}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={saveQuiz} type="submit">
                  Save changes
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <p className="m-8 text-lg font-semibold">Quizes</p>
        <div className="grid grid-cols-2 gap-5 w-full">
            {quizList.length>0 && quizList.map((quiz:any)=>(
                <TestCard title={quiz.name} date={quiz.date} />))
            }
        </div>
      </div>
    </div>
  );
};

export default page;
