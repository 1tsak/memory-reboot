
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Avatar, AvatarImage,AvatarFallback } from './ui/avatar'
import { Bell } from 'lucide-react'


const HomeNavBar = () => {
  return (
    <nav className="sticky top-5 z-50 mx-4 mb-10 p-4  backdrop-blur-lg bg-white/10 rounded-md shadow-lg dark:bg-gray-950/90 text-brand">
      <div className="px-24">
        <div className="flex justify-between py-2 items-center">
          <Link className="flex items-center" href="#">
            <Image src="/logo.svg" width={50} height={50} alt="logo"/>
            <p className="ml-4 font-sans font-extrabold text-2xl">Memory Reboot</p>
          </Link>
          
          {/* <div className="flex items-center gap-4 text-white">
            <Link href={"/signup"}>
                <Button size="lg" variant="outline">
                  Register
                </Button>
            </Link>
            <Link href={"/login"}><Button size="lg" className="bg-brand">Login</Button></Link>
          </div> */}
          <div className='flex justify-center content-center align-bottom gap-5'>
              <Avatar>
                <AvatarImage src="/avatar.jpg" className='object-center' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Bell className='place-self-center text-black'/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HomeNavBar