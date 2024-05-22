import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
const TestCard = ({ title, date, id = null }: any) => {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="text-md text-slate-500">{title}</CardTitle>
        <ArrowRightIcon />
      </CardHeader>
      <CardContent className="flex flex-row justify-between">
        <CardDescription className="text-lg font-semibold text-slate-800">
          {date} Test
        </CardDescription>
        <Link href={`/test/${id}`}>
          <Button>Start</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default TestCard;
