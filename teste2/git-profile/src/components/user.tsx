'use client'
import Image from "next/image";
import user from '../assets/user.png'
import { useState, useEffect } from "react";
import { getUserGit } from "@/http/get-user";


export function User(){
  const [userData, setUserData] = useState({name:'', bio:''})

  useEffect(()=>{
    const fetechUserData = async() =>{
      const data = await getUserGit();
      setUserData(data)
    }
    fetechUserData()
  },[])

  return(
    <div className='bg-withe-200 rounded-[25px] w-[804px] h-[257px]'>
                <div className='flex justify-center items-center max-w-[700px] px-[33px] gap-8 my-[18px]'>
                  <Image src={user} height={220} width={220} alt=''/>
                  <div className='flex flex-col w-[448px]'>
                    <p className='text-blue-500 font-nunito font-bold text-xl'>{userData.name}</p>
                    <p className='font-nunito font-[300px] text-[15px] mt-[16px]'>{userData.bio}</p>
                  </div>
                </div>
            </div>
  )
}