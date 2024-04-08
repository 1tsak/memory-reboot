import { Button } from "@/components/ui/button";

import { MdOutlineAssessment,MdOutlineQueryStats } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoIosHelpCircleOutline } from "react-icons/io";
export const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-[350px] p-5 items-center space-y-10 ">
      <h2 className="text-2xl font-base">MEMORY REBOOT</h2>
      <div className="actions flex flex-col space-y-5">
        <div className="flex w-[250px] py-2 rounded-xl pl-2 pr-5  space-x-2 items-center bg-slate-100">
          <MdOutlineAssessment />
          <p>Take a Quiz</p>
        </div>
        <div className="flex w-[250px] py-2 rounded-xl pl-2 pr-5  space-x-2 items-center bg-slate-100">
          <MdOutlineQueryStats />
          <p>Results</p>
        </div>
        <div className="flex w-[250px] py-2 rounded-xl pl-2 pr-5  space-x-2 items-center bg-slate-100">
          <ImProfile />
          <p>Profile</p>
        </div>
        <div className="flex w-[250px] py-2 rounded-xl pl-2 pr-5  space-x-2 items-center bg-slate-100">
          <IoIosHelpCircleOutline />
          <p>Help</p>
        </div>
      </div>
      <div className="flex-1"></div>
      <Button className="w-[250px]" color="black">Logout</Button>
    </div>
  );
};
