"use client";
import HomeNavBar from "@/components/HomeNavBar";
import TestCard from "@/components/TestCard";
import { useState } from "react";

const page = () => {
  const [upcomingQuizes, setUpcomingQuizes] = useState(() =>
    JSON.parse(localStorage.getItem("upcomingQuiz") || "[]")
  );
  return (
    <div className="min-h-screen bg-[#F7F4FB]">
      <HomeNavBar />
      <div className="p-5 flex flex-col gap-5">
        <h2>Upcoming Tests</h2>
        <div className="grid grid-cols-3 gap-5 w-full">
          {upcomingQuizes.length > 0 &&
            upcomingQuizes.map((quiz: any) => (
              <TestCard title={quiz.name} date={quiz.date} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
