import HomeNavBar from "@/components/HomeNavBar";
import TestCard from "@/components/TestCard";

const page = () => {
  return (
    <div className="min-h-screen bg-[#F7F4FB]">
      <HomeNavBar />
      <div className="p-5 flex flex-col gap-5">
    <h2>Upcoming Tests</h2>
      <div className="grid grid-cols-3 gap-5 w-full">
        <TestCard title="Javascript Quiz" date="22 May" />
        <TestCard title="HTML Quiz" date="22 May" />
        <TestCard title="C++ Quiz" date="21 May" />
      </div>
      </div>
    </div>
  );
};

export default page;
