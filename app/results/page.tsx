"use client"
import HomeNavBar from '@/components/HomeNavBar'
import ResultCard from '@/components/ResultCard'
import React, { useState } from 'react'

const page = () => {
    const [results,setResult] = useState(()=>JSON.parse(localStorage.getItem("result")||"[]"))
  return (
    <div className="min-h-screen bg-[#F7F4FB]">
      <HomeNavBar />
      <div className="p-5 flex flex-col gap-5">
        <h2>Results</h2>
        <div className="grid grid-cols-3 gap-5 w-full">
          {results.length > 0 &&
            results.map((result: any,index:number) => (
              <ResultCard title={result.name} date={result.correctAnswers} totalQuestions={result.totalQuestions}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default page