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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShowAlert } from "@/components/ShowAlert";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({ title: "", des: "" });
  const [alert, setAlert] = useState(false);
  const [type, setType] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/home");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        localStorage.setItem("user",JSON.stringify(result.user));
        router.push("/home");
      })
      .catch((error) => {
        console.log(error.message);
      });
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
    if (password !== confirmPassword) {
      setAlert(true);
      setError({
        title: "Invalid Email",
        des: "Please enter a valid email address",
      });
      setTimeout(() => setAlert(false), 2000);
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="cpassword">Confirm Password</Label>
                <Input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id="cpassword"
                  type="password"
                  placeholder="Confirm your password"
                />
              </div>
            </CardContent>
            <CardFooter className="content-center flex flex-col">
              <Link href={"/"}>
                <Button onClick={signUp} className="bg-brand">
                  Register Now
                </Button>
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
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="cpassword">Confirm Password</Label>
                <Input
                  id="cpassword"
                  type="password"
                  placeholder="Confirm your password"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Link href={"/"}>
                <Button onClick={signUp} className="bg-brand">
                  Register Now
                </Button>
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
