import React from 'react'
import { Button } from './ui/button';
import { FaPlayCircle } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';


const Content = () => {
  return (
    <div className='text-white mt-10' >
        <div className='flex flex-col justify-center items-center gap-5'>
            <div className='text-center '>
                <div className='font-bold font-sans text-7xl text-center mb-4'>
                    <p>PowerFull Tools for Effective</p>
                    <p>Student Assessment</p>
                
                </div>
                <p className='text-white/70 m-auto'>
                Your ultimate saas solution for effortless student administration and academic excellence.
                </p>
                <p className='text-white/70 my-0'>Simplify administrative tasks, enhance your management.</p>
            </div>

            <div className='flex flex-row justify-center gap-10' >
                <Link href={"/home"}>
                    <Button className='bg-brand'>
                        Get Started --->
                    </Button>
                </Link>
                <Link href={"/"} >
                    <Button className='gap-2' variant="outline" >See How it Works
                    <span><FaPlayCircle /></span></Button>
                </Link>
            </div>
            <div className='flex content-end gap-10 justify-around mb-10' >
                <Card1/>
                <Card2/>
                <Card5/>
                <Card3/>
                <Card4/>
            </div>
        </div>
    </div>
  )
}

const Card1 = ()=>{
    return <div className='w-60 h-80 flex flex-col content-center justify-between rounded-lg overflow-hidden bg-white/90'>
        <img className='brightness-75' src={"/card1.png"}/>
        <p className='max-w-30 text-black font-medium content-end mb-4 p-4 flex-grow break-words'>
        Empower Your Educational Institution with School Manager Pro --->
        </p>
    </div>
}


const Card4 = ()=>{
    return <div className='h-80 w-60 content-center rounded-md overflow-hidden bg-white/90'>
        <img className='w-full h-full object-cover' src="/child.jpg" alt="" />
    </div>
}
const Card2 = ()=>{
    return <div className='place-self-end w-40 h-72 flex flex-col justify-center rounded-lg overflow-hidden bg-white/90 text-black text-center gap-10'>
        <div className='p-2'>
            <p className='text-4xl  font-bold'>
                260%
            </p>
            <p className='text-sm font-thin text-gray-600'>Your ultimate solution for assessments</p>
        </div>
    </div>
}

const Card3 = ()=>{
    return <div className='place-self-end w-40 h-72 flex flex-col justify-center rounded-lg overflow-hidden bg-white/90 text-black text-center gap-10'>
        <div className='p-2'>
            <p className='text-4xl  font-bold'>
                65%
            </p>
            <p className='text-sm font-thin text-gray-600'>Schools use our comprehensive tools and support</p>
        </div>
    </div>
}

const Card5 = ()=>{
    return <div className= 'place-self-end rounded-md overflow-hidden bg-red-900'>
        <img width={250} height={250} src="/barcamp.png" alt="" />
    </div>
}
export default Content