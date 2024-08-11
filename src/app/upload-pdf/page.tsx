"use client"
import DropFiles from '@/components/dropFiles/DropFiles';
import UploadFileStatus from '@/components/dropFiles/UploadFileStatus';
import Loader from '@/components/loader/loader'
import React, { useEffect, useState } from 'react'
const page = () => {
    const [loader , setloader] = useState(false);
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <div className="Uploadpdfcontainer flex flex-col justify-center items-center ">
            <div className='flex flex-col gap-3'>
               <h1 className='text-center text-4xl '>Upload files</h1>
               <p className='md:text-xl text-center text-sm'>PDF, text, images or Presentations. Max 10MB each.</p>
            </div>
               <DropFiles/>
              <UploadFileStatus/>
        </div>
    </div>
  )
}

export default page