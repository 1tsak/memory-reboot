import { Button } from "@/components/ui/button";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="flex w-full py-5 px-10 justify-between bg-slate-100">
      <span className="font-semibold">LOGO</span>
      <div className="actions flex space-x-5">
        <Link href={"/login"}>
          <Button variant="outline">Login</Button>
        </Link>
        {/* <Button variant="destructive">Register</Button> */}
      </div>
    </div>
  );
};
