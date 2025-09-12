import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import herosectionimage from '../assets/images/herosectionimage.png'
import herosectionicon1 from '../assets/icons/herosectionicon1.png'
import herosectionicon2 from '../assets/icons/herosectionicon2.png'
import herosectionicon3 from '../assets/icons/herosectionicon3.png'
import herosectionicon4 from '../assets/icons/herosectionicon4.png'
import whoweare from '../assets/images/whoweare.png'
import rightarrow from '../assets/icons/r-arrow.png'
import ai from '../assets/images/AI.png'
import frontend from '../assets/images/Frontend.png'
import dedicated from '../assets/images/Dedicated.png'
import mobileapp from '../assets/images/Mobile.png'

import productsection from '../assets/images/productsection.png'
import tech1 from '../assets/icons/tech1.png'
import tech2 from '../assets/icons/tech2.png'
import tech3 from '../assets/icons/tech3.png'
import tech4 from '../assets/icons/tech4.png'
import leftarrow from '../assets/icons/l-arrow.png'
import Testimonials from '../components/homecomponents/Testimonials';
import Clients from '../components/commoncomponents/Clients';
import GetinTouch from '../components/commoncomponents/GetinTouch';


const services = [
  { id: 1, title: "Entreprise Service", details: "details of 01" },
  { id: 2, title: "Expertise Service", details: "details of 02" },
  { id: 3, title: "Process", details: "details of 03" },
  { id: 4, title: "Mobile App Development", details: "details of 04" },
];

function HomePage() {
  const [openDetails, setOpenDetails] = useState(null);
  const toggleService = (index) => { setOpenDetails((prev) => (prev === index ? null : index)) }

  return (
    <>
      {/* hero section */}
      <div className='relative w-full h-[710px] lg:h-[900px] '>
        <img src={herosectionimage} className='absolute object-cover w-full h-[710px] lg:h-[900px]' />
        <div className='absolute right-7 lg:right-40 top-68 lg:top-86 space-y-3 lg:space-y-5'>
          <img src={herosectionicon1} className='w-9 md:w-auto' />
          <img src={herosectionicon2} className='w-9 md:w-auto' />
          <img src={herosectionicon3} className='w-9 md:w-auto' />
          <img src={herosectionicon4} className='w-9 md:w-auto' />
        </div>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center tracking-wider text-white pt-35 lg:pt-45 '>
          <p className='text-[26px] lg:text-[48px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFFFFF30] font-[neutral_face] '>ELEVATE YOUR VISION,<br className='block md:hidden' /> IGNITE<br className='hidden md:block' /> TOMORROW’S INNOVATION.</p>
          <p className='text-[10px] lg:text-[24px] mt-10 lg:mt-15'>Crafting Digital Excellence for a Future<br /> Beyond Imagination.</p>
          <div className='flex justify-center items-center gap-2 lg:gap-20 mt-55 lg:mt-53 text-[8px] lg:text-[24px] '>
            <p>Full Cycle Product Development</p>
            <p>Digital Product Design</p>
            <p>Branding</p>
            <p>Industry Automation Service</p>
          </div>
          <div className=' flex flex-col items-center gap-2 lg:gap-2 pt-12 lg:pt-15 text-[13px] lg:text-[16px] font-[neutral_face]'>
            <p>SCROLL</p>
            <IoIosArrowDown size={23} />
          </div>
        </div>
      </div>

      {/* Who we are */}
      <div className='py-10 lg:py-28 text-center bg-gradient-to-b from-black to-[#1E1E1E] text-white '>
        <p className='text-[12px] lg:text-[18px] text-[#9C9C9C] font-[500] '>Who We Are</p>
        <p className='text-[16px] lg:text-[28px] mt-1 md:mt-3 uppercase font-[neutral_face]'>Epic Beginnings: Unveiling Our Essence,<br className='hidden md:block' /> Crafting Futures with Excellence.</p>
        <div className='flex flex-col md:flex-row gap-5 lg:gap-12 px-5 lg:px-20 pt-6 lg:pt-14 '>
          <img src={whoweare} className='md:w-1/2' />
          <div className='space-y-5 lg:space-y-10 text-left lg:w-[490px] '>
            <p className='text-[18px] lg:text-[28px] '>Empowering Progress: Our Story, Your Journey, Shared Excellence.</p>
            <div className='space-y-5 lg:space-y-10 w-[260px] lg:w-[400px] text-[12px] lg:text-[20px]  '>
              <p>Embark on a journey through our narrative, where innovation meets purpose.</p>
              <p>Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames. Blandit et purus mollis convallis malesuada egestas risus quam enim. Semper lorem rhoncus et felis tristique tellus volutpat orci. Dui elementum a sed.</p>
            </div>
            <button className='w-[130px] lg:w-[202px] h-[40px] lg:h-[56px] rounded-[8px] border hover:bg-white hover:text-black duration-500 text-[13px] lg:text-[16px] '>Who We Are &nbsp; →</button>
          </div>
        </div>
      </div>

      {/* counts */}
      <div className='flex justify-center items-center gap-2 lg:gap-25 px-3 md:px-0 py-6 md:py-15 bg-[#121212] text-white'>
        <div className='text-center space-y-1 lg:space-y-5 '>
          <p className='text-[15px] lg:text-[36px] font-[neutral_face] '>400+</p>
          <p className='text-[9px] lg:text-[18px] text-[#9C9C9C] '>Projects Competed</p>
        </div>
        <div className='bg-white w-[1px] h-10 lg:h-18 '></div>
        <div className='text-center space-y-1 lg:space-y-5'>
          <p className='text-[15px] lg:text-[36px] font-[neutral_face] '>15+</p>
          <p className='text-[9px] lg:text-[18px] text-[#9C9C9C] '>Successful Years</p>
        </div>
        <div className='bg-white w-[1px] h-10 lg:h-18 '></div>
        <div className='text-center space-y-1 lg:space-y-5'>
          <p className='text-[15px] lg:text-[36px] font-[neutral_face] '>98%</p>
          <p className='text-[9px] lg:text-[18px] text-[#9C9C9C] '>Client Retention</p>
        </div>
        <div className='bg-white w-[1px] h-10 lg:h-18 '></div>
        <div className='text-center space-y-1 lg:space-y-5'>
          <p className='text-[15px] lg:text-[36px] font-[neutral_face] '>30+</p>
          <p className='text-[9px] lg:text-[18px] text-[#9C9C9C] '>Countries</p>
        </div>
      </div>

      {/* our services */}
      <div className="py-10 lg:py-28 text-center bg-gradient-to-br from-[#1E1E1E] to-[#121212] text-white ">
        <p className="text-[12px] lg:text-[18px] text-[#9C9C9C] font-[500] ">
          Our Services
        </p>
        <p className="text-[16px] lg:text-[28px] mt-1 md:mt-3 px-6 md:px-0 uppercase font-[neutral_face]">
          Your Aspiration, Our Expertise: Tailored<br className='hidden md:block' /> Services for Unmatched Excellence.
        </p>

        <div className="py-5 lg:py-15 px-5 lg:px-30 font-[neutral_face] text-[14px] lg:text-[28px]">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="border-b border-[#FFFFFF33] px-3 lg:px-5 py-6 lg:py-8"
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-4 lg:gap-20">
                  <p>{`0${service.id}`}</p>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFFFFF50] uppercase ">
                    {service.title}
                  </p>
                </div>
                <div
                  onClick={() => toggleService(index)}
                  className="cursor-pointer transition-transform duration-700"
                >
                  <img
                    src={rightarrow}
                    className={`w-7 lg:w-full transform transition-transform duration-300 ${openDetails === index ? "-rotate-45" : "rotate-0"
                      }`}
                  />
                </div>

              </div>

              {openDetails === index && (
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openDetails === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="mt-6 lg:mt-12 border-l pl-3 lg:pl-5 border-[#9C9C9C] text-left text-[12px] lg:text-[18px] text-[#9C9C9C] lowercase">
                    {service.details}
                  </p>
                  <div className='flex flex-wrap justify-center gap-4 py-5'>
                    <img src={ai} className='w-35 lg:w-auto h-full' />
                    <img src={frontend} className='w-35 lg:w-auto h-full' />
                    <img src={dedicated} className='w-35 lg:w-auto h-full' />
                    <img src={mobileapp} className='w-35 lg:w-auto h-full' />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* product */}
      <div className="py-10 lg:py-28 text-center bg-gradient-to-bl from-[#1E1E1E] to-[#121212] text-white ">
        <p className="text-[12px] lg:text-[18px] text-[#9C9C9C] font-[500] ">Product</p>
        <p className="text-[16px] lg:text-[28px] mt-1 md:mt-3 px-6 md:px-0 uppercase font-[neutral_face]">
          From Challenge to Victory: Exploring Case<br className='hidden md:block' /> Studies of Innovation and Excellence
        </p>
        <div className='flex flex-col md:flex-row gap-5 lg:gap-16 px-5 lg:px-20 pt-6 lg:pt-14 '>
          <img src={productsection} className='md:w-1/2' />
          <div className='flex flex-col justify-between text-left lg:w-[490px] '>
            <div className='space-y-4 lg:space-y-5'>
              <p className="text-[10px] lg:text-[14px] text-[#9C9C9C] font-[500] ">Category</p>
              <p className='text-[15px] lg:text-[24px] '>Dave Financial CRM</p>
              <p className='text-[11px] lg:text-[16px] '>Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames. Blandit et purus mollis convallis malesuada egestas risus quam enim. Semper lorem rhoncus et felis tristique tellus volutpat orci. Dui elementum a sed.</p>
              <p className="pt-4 lg:pt-6 pb-3 text-[11px] lg:text-[16px] text-[#9C9C9C] font-[500] ">Technology</p>
              <div className='flex gap-7 lg:gap-15 pl-4 lg:pl-6'>
                <img src={tech1} className='w-6 lg:w-full' />
                <img src={tech2} className='w-6 lg:w-full' />
                <img src={tech3} className='w-6 lg:w-full' />
                <img src={tech4} className='w-6 lg:w-full' />
                <img src={tech3} className='w-6 lg:w-full' />
              </div>
            </div>
            <button className='mt-8 md:mt-0 w-[160px] lg:w-[238px] h-[40px] lg:h-[56px] rounded-[8px] border hover:bg-white hover:text-black duration-500 text-[13px] lg:text-[16px] font-[500] '>View Case Study &nbsp; →</button>
          </div>
        </div>
        <div className='flex justify-center gap-5 pt-10 lg:pt-15'>
          <img src={leftarrow} className='w-8 lg:w-auto' />
          <img src={rightarrow} className='w-8 lg:w-auto' />
        </div>
      </div>

      {/* testimonials */}
      <div className="py-10 lg:py-28 text-center bg-gradient-to-b from-[#1E1E1E] to-[#121212] text-white ">
        <p className="text-[12px] lg:text-[18px] text-[#9C9C9C] font-[500] ">Testimonials</p>
        <p className="text-[16px] lg:text-[28px] lg:leading-12 mt-1 md:mt-3 px-6 md:px-0 uppercase font-[neutral_face]">Voices of Trust: Client Stories, Testimonials<br className='hidden md:block' /> that Illuminate Our Shared Success.        </p>
        <div className='flex flex-col md:flex-row gap-4 md:gap-16 px-6 md:px-30 py-8 md:py-20'>
          <Testimonials 
            image={herosectionimage}
          />
          <Testimonials 
            image={herosectionimage}
          />
        </div>
        <div className='flex justify-center gap-5 '>
          <img src={leftarrow} className='w-8 lg:w-auto' />
          <img src={rightarrow} className='w-8 lg:w-auto' />
        </div>
      </div>

      
      <Clients />
      <GetinTouch />
    </>
  )
}

export default HomePage
