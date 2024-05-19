"use client";

import { auth } from "@/lib/firebase";
import { provider } from "@/lib/firebase";
import firebase from "firebase/compat/app";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ title: "", des: "" });
  const [alert, setAlert] = useState(false);
  const [type, setType] = useState("");

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(() => {router.push("/home")})
      .catch((error) => {console.log(error.message)});
  };

  const signUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (password === "" || email === "") {
      setAlert(true);
      setError({
        title: "Invalid Credentials",
        des: "Email and Password Can't be empty!",
      });
      setTimeout(() => setAlert(false), 2000);
      return;
    }

    if (!emailRegex.test(email)) {
      setAlert(true);
      setError({
        title: "Invalid Email",
        des: "Please enter a valid email address",
      });
      setTimeout(() => setAlert(false), 2000);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password).then(()=>{
      router.push("/login")
    }).catch((error) => {console.log(error.message)});
  };

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-fixed"
      style={{
        backgroundImage: `url("/background.png")`,
      }}
    >
      <Tabs onValueChange={(value: any) => setType(value)} defaultValue="student" className="w-[400px] m-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="student">Register as Student</TabsTrigger>
          <TabsTrigger value="instruct">Register as Instructor</TabsTrigger>
        </TabsList>
        <TabsContent value="student">
          <Card>
            <CardHeader>
              <CardTitle>Student Account</CardTitle>
              <CardDescription>Register as Student</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input value={email} onChange={(e)=>setEmail(e.target.value)} id="name" placeholder="user@mail.com" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Confirm Password</Label>
                <Input
                  id="username"
                  type="password"
                  placeholder="Confirm your password"
                />
              </div>
            </CardContent>
            <CardFooter className="content-center flex flex-col">
              <Link href={"/"}>
                <Button className="bg-brand">Register Now</Button>
              </Link>
              <p className="mt-4 text-gray-500">
                Register with Google Id instead
              </p>
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
              <CardDescription>Register as Instructor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input id="name" placeholder="user@mail.com" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Password</Label>
                <Input
                  id="username"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Confirm Password</Label>
                <Input
                  id="username"
                  type="password"
                  placeholder="Confirm your password"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Link href={"/"}>
                <Button className="bg-brand">Register Now</Button>
              </Link>
              <p className="mt-4 text-gray-500">
                Register with Google Id instead
              </p>
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
