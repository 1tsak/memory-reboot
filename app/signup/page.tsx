"use client";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-fixed"  style={{ 
      backgroundImage: `url("/background.png")` 
    }}>
      <Tabs defaultValue="student" className="w-[400px] m-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="student">Register as Student</TabsTrigger>
          <TabsTrigger value="instruct">Register as Instructor</TabsTrigger>
        </TabsList>
        <TabsContent value="student">
          <Card>
            <CardHeader>
              <CardTitle>Student Account</CardTitle>
              <CardDescription>
                Register as Student
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input id="name" placeholder="user@mail.com" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Password</Label>
                <Input id="username" type="password" placeholder="Enter your password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Confirm Password</Label>
                <Input id="username" type="password" placeholder="Confirm your password" />
              </div>
            </CardContent>
            <CardFooter className="content-center">
              <Link href={"/"}><Button className="bg-brand">Register Now</Button></Link>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="instruct">
          <Card>
            <CardHeader>
              <CardTitle>Instructor Account</CardTitle>
              <CardDescription>
                Register as Instructor
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input id="name" placeholder="user@mail.com" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Password</Label>
                <Input id="username" type="password" placeholder="Enter your password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Confirm Password</Label>
                <Input id="username" type="password" placeholder="Confirm your password" />
              </div>
            </CardContent>
            <CardFooter>
              <Link href={"/"}><Button className="bg-brand">Register Now</Button></Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}