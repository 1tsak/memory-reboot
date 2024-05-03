"use client";
 import { auth } from "@/lib/firebase";
import { provider } from "@/lib/firebase";
import firebase from "firebase/compat/app";
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";

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
import { useEffect } from "react";
import { redirect } from "next/navigation";


//signIn function
const signIn = () => auth.signInWithPopup(provider);
const signOut = () => auth.signOut();


export default function Page() {


  useEffect(() => {
    
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-fixed"  style={{ 
      backgroundImage: `url("/background.png")` 
    }}>
      <Tabs defaultValue="student" className="w-[400px] m-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="student">I am a Student</TabsTrigger>
          <TabsTrigger value="instruct">I am an Instructor</TabsTrigger>
        </TabsList>
        <TabsContent value="student">
          <Card>
            <CardHeader>
              <CardTitle>Student Account</CardTitle>
              <CardDescription>
                Login in to your Student Account
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
            </CardContent>
            <CardFooter className="content-center flex flex-col">
              <Link href={"/home"}><Button className="bg-brand">Login</Button></Link>
              <p className="mt-4 text-gray-500" >Login with Google instead</p>
              <span className="mt-4 cursor-pointer text-xl" onClick={signIn}>
              <FcGoogle />
              </span>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="instruct">
          <Card>
            <CardHeader>
              <CardTitle>Instructor Account</CardTitle>
              <CardDescription>
                Login if you are an instructor
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
            </CardContent>
            <CardFooter className="flex flex-col">
              <Link href={"/home"}><Button className="bg-brand">Login</Button></Link>
              <p className="mt-4 text-gray-500" >Login with Google instead</p>
              <span className="mt-4 cursor-pointer text-xl" onClick={signIn}>
              <FcGoogle />
              </span>
            </CardFooter>
            
          </Card>
        </TabsContent>
        
      </Tabs>
    </div>
  );
}
