import React from 'react'

import simple from "../../assets/one.jpg"
import valentines from "../../assets/two.jpg"
import shield from "../../assets/three.jpg"

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
       <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-400px block">The value that holds true and to account</h1>

       <div className="grid gap-[10rem] grid-cols-3 items-center">

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
            <div className="flex items-center gap-3">
                <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                    <img src={simple} alt="" className='w-[70%]'/>
                </div>

                <span className='font-semibold text-textColor text-[18px]'>
                    Simplicity
                </span>
                <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                    Things being made beautiful simple are at heart of everything we do.
                </p>
            </div>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
            <div className="flex items-center gap-3">
                <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                    <img src={valentines} alt="" className='w-[70%]'/>
                </div>

                <span className='font-semibold text-textColor text-[18px]'>
                    Simplicity
                </span>
                <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                    We beleive in making things better for everyone, even if just by a little bit!
                </p>
            </div>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
            <div className="flex items-center gap-3">
                <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                    <img src={shield} alt="" className='w-[70%]'/>
                </div>

                <span className='font-semibold text-textColor text-[18px]'>
                    Simplicity
                </span>
                <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                    We work on the basis of creating trust which can be nurtured through authenticity and transparency
                </p>
            </div>
        </div>

       </div>
    </div>
  )
}

export default Value