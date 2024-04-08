"use client";
import HomeNavBar from '@/components/HomeNavBar'
import Navbar from '@/components/Navbar';
import StudentDashboard from '@/components/StudentDashboard';
import { Card } from '@/components/ui/card';


const page = () => {
  return (
    <div className='min-h-screen bg-[#F7F4FB]'>
        <HomeNavBar/>
        <StudentDashboard/>
        </div>

  )
}

export default page