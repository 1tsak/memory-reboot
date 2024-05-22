import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  ArrowRightIcon,
  BookOpenCheck,
  CircleDotDashed,
  Route,
  TicketCheck,
} from "lucide-react";

import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TestCard from "./TestCard";
import { useState } from "react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data2 = [
  {
    name: "April 01",
    attempts: 4,
    tests: 2,
    amt: 2,
  },
  {
    name: "April 02",
    attempts: 3,
    tests: 1,
    amt: 2,
  },
  {
    name: "April 03",
    attempts: 2,
    tests: 9,
    amt: 2,
  },
  {
    name: "April 04",
    attempts: 2,
    tests: 3,
    amt: 2,
  },
  {
    name: "April 05",
    attempts: 1,
    tests: 4,
    amt: 2,
  },
  {
    name: "April 06",
    attempts: 2,
    tests: 3,
    amt: 2,
  },
  {
    name: "April 07",
    attempts: 3,
    tests: 4,
    amt: 2,
  },
];

export default function StudentDashboard() {
  const [user,setUser] = useState(()=>JSON.parse(localStorage.getItem("user")||""));
  const [quizData,setQuizData] = useState(()=>JSON.parse(localStorage.getItem("upcomingQuiz") || "[]"))
  const [results,setResult] = useState(()=>JSON.parse(localStorage.getItem("result")||"[]"))


  return (
    <div className="h-full flex flex-row gap-5 p-10">
      <div className="flex flex-col flex-1 gap-2">
        <Card className=" flex bg-white p-5 justify-around rounded-xl shadow-sm">
          <div className="flex flex-col">
            <Avatar className="size-20">
              <AvatarImage src={user?.photoURL || "./avatar.jpg"} className="object-center" />
              <AvatarFallback>Ak</AvatarFallback>
            </Avatar>
            <h2 className="text-md font-semibold mt-1">{user?.displayName}</h2>
            <span className="text-sm">Student</span>
            <Badge
              className=" py-2 px-5 flex gap-5 rounded-lg mt-2 -ml-2"
              variant="outline"
            >
              <div className="bg-red-600 p-3 rounded-full">
                <Route color="white" size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">65</span>
                <span className="text-xs font-semibold">Earning Points</span>
              </div>
            </Badge>
          </div>

          <div className="grid grid-rows-2 grid-cols-2">
            <div className="flex flex-row p-5 gap-5">
              <div className="bg-orange-500 p-3 h-16 w-16 flex justify-center items-center rounded-full">
                <CircleDotDashed color="white" size={16} />
              </div>
              <div className="block">
                <h2 className="text-2xl font-semibold mt-1">04</h2>
                <p className="text-sm font-semibold mt-1 text-slate-500">
                  Pending Tests
                </p>
              </div>
            </div>
            <div className="flex flex-row p-5 gap-5">
              <div className="bg-purple-600 p-3 h-16 w-16 flex justify-center items-center rounded-full">
                <BookOpenCheck color="white" size={16} />
              </div>
              <div className="block">
                <h2 className="text-2xl font-semibold mt-1">05</h2>
                <p className="text-sm font-semibold mt-1 text-slate-500">
                  Completed Tests
                </p>
              </div>
            </div>
            <div className="flex flex-row p-5 gap-5">
              <div className="bg-blue-600 p-3 h-16 w-16 flex justify-center items-center rounded-full">
                <Activity color="white" size={16} />
              </div>
              <div className="block">
                <h2 className="text-2xl font-semibold mt-1">75%</h2>
                <p className="text-sm font-semibold mt-1 text-slate-500">
                  Performance
                </p>
              </div>
            </div>
            <div className="flex flex-row p-5 gap-5">
              <div className="bg-purple-400 p-3 h-16 w-16 flex justify-center items-center rounded-full">
                <TicketCheck color="white" size={16} />
              </div>
              <div className="block">
                <h2 className="text-2xl font-semibold mt-1">01</h2>
                <p className="text-sm font-semibold mt-1 text-slate-500">
                  Certificates
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className=" flex flex-col bg-white p-5 justify-around rounded-xl shadow-sm w-full h-96">
          <CardHeader className="flex flex-row justify-between">
            <CardTitle className="text-sm text-slate-500">
              Learning Activity
            </CardTitle>
            <div className="flex font-semibold items-center text-sm gap-2 text-slate-500">
              <div className="h-2 w-2 bg-orange-400"></div>
              <p>Tests</p>
            </div>
            <div className="flex font-semibold items-center text-sm gap-2 text-slate-500">
              <div className="h-2 w-2 bg-blue-500"></div>
              <p>Attempts</p>
            </div>
          </CardHeader>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={300} data={data2}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="tests"
                stroke="#FB923C"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="attempts" stroke="#2563EB" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className=" w-[550px] flex-2 flex flex-col gap-5">
        <Card className="bg-white w-full p-2 justify-around rounded-xl shadow-sm">
          <CardHeader className="flex">
            <CardTitle className="text-md text-slate-500">
              My Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="flex w-full">
            <div>
              <h2 className="text-sm font-semibold my-1 text-slate-500">
                New Tests
              </h2>
              <h1 className="text-2xl font-semibold my-1 text-blue-500">{quizData.length}</h1>
              <h2 className="text-sm font-semibold my-1 text-slate-500">
                Visited
              </h2>
              <h1 className="text-2xl font-semibold my-1 text-purple-500">
                {results.length}/<span className="text-purple-400">{quizData.length}</span>
              </h1>
              <h2 className="text-sm font-semibold my-1 text-slate-500">
                Completed
              </h2>
              <h1 className="text-2xl font-semibold my-1 text-orange-500">
              {results.length}/<span className="text-orange-400">{quizData.length}</span>
              </h1>
            </div>
            <div className="w-[400px] h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#FB923C"
                    dataKey="value"
                  >
                    {data.map((entry: any, index: any) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
          <div className="m-2 border-t border-t-slate-300 font-bold flex justify-between p-2">
            <div>Total Hours</div>
            <div>8h 30 m</div>
          </div>
        </Card>
        {quizData.length>0 &&<TestCard title={quizData[0].name} date={quizData[0].date} id={0}/>}
      </div>
    </div>
  );
}
