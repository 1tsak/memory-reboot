import { Header } from "@/components/header";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <main className="w-full flex flex-col items-center">
        <div className=" w-[90%] flex py-16 justify-around items-center bg-slate-100 rounded-b-3xl">
          <div className="flex-col space-y-1">
            <h2 className="text-4xl font-semibold">Memory Reboot</h2>
            <p className="max-w-xl text-justify text-md font-light">
              Welcome to Memory Reboot, where learning meets innovation. Our
              personalized assessment platform revolutionizes the way you learn,
              offering tailored quizzes and exams to match your unique strengths
              and weaknesses.
            </p>
            <div className="actions flex pt-3 space-x-2">
              <Link href={"/signup"}>
                <Button variant="outline">Get Started</Button>
              </Link>
            </div>
            <div className="flex pt-5 space-x-2 flex-wrap">
              <Badge className="font-light text-sm px-2 py-1" variant="outline">
                Personalized Learning
              </Badge>
              <Badge className="font-light text-sm px-2 py-1" variant="outline">
                Comprehensive Insights
              </Badge>
              <Badge className="font-light text-sm px-2 py-1" variant="outline">
                Performance Tracking
              </Badge>
            </div>
          </div>
          <Image src={"/434.png"} width={400} height={400} alt="hero" />
        </div>
        <div></div>
      </main>
    </div>
  );
}
