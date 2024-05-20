"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { data } from "@/app/utils/sampleTestData";
import { useState } from "react";
import clsx from "clsx";
import {Header} from "./components/Header";
import Link from "next/link";

const page = () => {


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(new Array(data.length).fill(null));
  const [answeredCount,setAnsweredCount] = useState(0);

  const handleOptionChange = (option:any) => {
    setSelectedOption((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[currentQuestion] = option;
      return updatedOptions;
    });
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, data.length - 1));
  };

  const handleBack = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };
 
  useEffect(() => {
    setAnsweredCount(selectedOption.filter((option) => option !== null).length);
  },[selectedOption])
  const unansweredCount = data.length - answeredCount;
  const handleSubmit = () => {
    // Add logic to submit answers
  };
  return (
    <div
      className="h-screen fixed w-screen"
      style={{
        backgroundImage: `url("/mcq_bg.png")`,
      }}
    >
      <Header/>
      <div className="flex flex-row m-5 space-x-4 h-[70%]">
        <Card className="h-full w-[25%] rounded-lg bg-purple-600 p-2 border-0">
          <CardHeader>
            <CardTitle className="text-lg text-white">DSA Test</CardTitle>
            <CardDescription className="text-white">MCQs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-y-scroll h-[250px]">
              <div className="grid grid-rows-5 grid-cols-5 gap-2">
                {data.map((item: any, index: number) => (
                  <Button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={clsx("p-2 bg-white rounded-sm font-semibold text-slate-700 cursor-pointer",{
                      "bg-red-500 text-white": currentQuestion === index,
                      "bg-green-500 text-white":selectedOption[index] != null 
                    })}
                  >
                    Q. {index + 1}
                  </Button>
                ))}
              </div>
            </div>
            <div className="progress font-semibold flex mt-2 flex-col gap-2 text-white">
              <div className="flex text-sm gap-5 items-center">
                <div className="p-2 bg-white rounded-sm font-semibold  text-black" >{data.length-answeredCount}</div>
                <p>Unanswered</p>
              </div>
              <div className="flex gap-5 text-sm items-center">
                <div className="p-2 bg-green-600 rounded-sm font-semibold ">
                  {answeredCount}
                </div>
                <p>Answered</p>
              </div>
              <div className="flex gap-5 text-sm items-center">
                <div className="p-2 bg-yellow-300 rounded-sm font-semibold  text-black">3</div>
                <p>Marked for Review</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="bg-white flex flex-col flex-1 rounded-lg p-8">
          <div className="h-full">
            <h2 className="text-xl">
              {currentQuestion + 1} {data[currentQuestion].question}
            </h2>
            <div className="flex flex-col gap-5 m-5">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="ans1"
                  name="answer"
                  value={data[currentQuestion].option1}
                  checked={selectedOption[currentQuestion] === data[currentQuestion].option1}
                  onChange={() => handleOptionChange(data[currentQuestion].option1)}
                />
                <label
                  htmlFor="ans1"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  {data[currentQuestion].option1}
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="ans2"
                  name="answer"
                  value={data[currentQuestion].option2}
                  checked={selectedOption[currentQuestion] === data[currentQuestion].option2}
                  onChange={() => handleOptionChange(data[currentQuestion].option2)}
                />
                <label
                  htmlFor="ans2"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  {data[currentQuestion].option2}
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="ans3"
                  name="answer"
                  value={data[currentQuestion].option3}
                  checked={selectedOption[currentQuestion] === data[currentQuestion].option3}
                  onChange={() => handleOptionChange(data[currentQuestion].option3)}
                />
                <label
                  htmlFor="ans3"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  {data[currentQuestion].option3}
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="ans4"
                  name="answer"
                  value={data[currentQuestion].option4}
                  checked={selectedOption[currentQuestion] === data[currentQuestion].option4}
                  onChange={() => handleOptionChange(data[currentQuestion].option4)}
                  
                />
                <label
                  htmlFor="ans4"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  {data[currentQuestion].option4}
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-around mr-5">
            <Button onClick={handleBack}>Back</Button>
            {currentQuestion < data.length - 1 && <Button onClick={handleNext}>Next</Button>}
           { currentQuestion === data.length - 1 && <Link href="/home"><Button variant={"destructive"} >Submit</Button></Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
