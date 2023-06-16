import React from 'react'
import {BiTimeFive} from "react-icons/bi"

import logo1 from "../../assets/one.jpg"
import logo2 from "../../assets/one.jpg"
import logo3 from "../../assets/one.jpg"
import logo4 from "../../assets/one.jpg"
import logo5 from "../../assets/one.jpg"
import logo6 from "../../assets/one.jpg"
import logo7 from "../../assets/one.jpg"
import logo8 from "../../assets/one.jpg"

const Data = [
  {id:1,
  image: logo1,
  title: "Web Developer",
  time: "Now",
  location: "Canada",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas?",
  company: "Novac Linus Co."
},
{id:2,
  image: logo2,
  title: "UI Designer",
  time: "Now",
  location: "Manchester",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas?",
  company: "Liquid Accessments"
},
{id:3,
  image: logo3,
  title: "Software Eng",
  time: "10Hrs",
  location: "Austria",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas?",
  company: "Web Tech Agency"
},
{
  id:4,
  image: logo4,
  title: "Ui/Ux Designer",
  time: "10H",
  location: "Germany",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas?",
  company: "Gorvenment"
},
{id:5,
  image: logo5,
  title: "Product Designer",
  time: "Now",
  location: "Manchester",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas?",
  company: "Newcastle"
},
{id:6,
  image: logo6,
  title: "Researcher",
  time: "5H",
  location: "Norway",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas?",
  company: "Nin Co."
},
{id:7,
  image: logo7,
  title: "Lead Developer",
  time: "14H",
  location: "Leeds",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas?",
  company: "Nimeloi - UK"
},
{id:8,
  image: logo8,
  title: "Data Scientist",
  time: "2 Days",
  location: "Turkey",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas?",
  company: "Name and Sons"
}

]

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {
          Data.map(({id,image,title,time,location,desc,company}) =>{
            return (
              <>
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

              <span className='flex justify-between items-center gap-4'>
                 <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
              </span>
              <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive />{time}
              </span>
              <h6 className='text-[#ccc]'>{location}</h6>
    
              <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>
            </div>
    
            <div className="company flex items-center gap-2">
              <img src={image} alt="Company Logo" className='w-[10%]' />
              <span className='text-[14px] py-[1rem] block group-hover:text-white'>
                {company}
              </span>
            </div>
    
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold group-hover:text-white'>Apply now</button>
            </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Jobs