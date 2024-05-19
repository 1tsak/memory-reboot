"use client";
import { auth } from "@/lib/firebase";
import { provider } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import firebase from "firebase/compat/app";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

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
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { ShowAlert } from "@/components/ShowAlert";
import { useRouter } from "next/navigation";

//signIn function

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ title: "", des: "" });
  const [alert, setAlert] = useState(false);
  const [type, setType] = useState("");
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(() => {
        console.log("logged in success!");
        router.push("/home");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const signInWithEmail = () => {
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
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(auth);
        router.push("/home");
      })
      .catch((err) => {
        console.log(err.message);
        setError({ title: "Error!", des: err.message });
      });

    // Proceed with sign-in if validation passes
    // ...
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [type]);

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-fixed"
      style={{
        backgroundImage: `url("/background.png")`,
      }}
    >
      {alert && (
        <ShowAlert type="destructive" title={error.title} des={error.des} />
      )}
      <Tabs
        onValueChange={(value: any) => setType(value)}
        defaultValue="student"
        className="w-[400px] m-auto"
      >
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
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="name"
                  placeholder="user@mail.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Password</Label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="username"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </CardContent>
            <CardFooter className="content-center flex flex-col">
              <Button onClick={signInWithEmail} className="bg-brand">
                Login
              </Button>
              <p className="mt-4 text-gray-500">OR</p>
              <Button
                className="mt-4 flex gap-2 cursor-pointer text-xl"
                onClick={signIn}
              >
                <FcGoogle />
                <span className="text-sm">Login With Google</span>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="instruct">
          <Card>
            <CardHeader>
              <CardTitle>Instructor Account</CardTitle>
              <CardDescription>Login if you are an instructor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input
                  type="email"
                  id="name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@mail.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Password</Label>
                <Input
                  id="username"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button onClick={signInWithEmail} className="bg-brand">
                Login
              </Button>
              <p className="mt-4 text-gray-500">OR</p>
              <Button
                className="mt-4 flex gap-2 cursor-pointer text-xl"
                onClick={signIn}
              >
                <FcGoogle />
                <span className="text-sm">Login With Google</span>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
