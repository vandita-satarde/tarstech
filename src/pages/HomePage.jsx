import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import homeicon1 from '../assets/icons/homeicon1.png'
import whoweare from '../assets/images/whoweare.png'

function HomePage() {
  return (
    <>
      {/* hero section */}
      <div className='relative text-center tracking-wider bg-black text-white pt-25 lg:pt-45 min-h-screen '>
        <p className='text-[48px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFFFFF00] '>ELEVATE YOUR VISION, IGNITE<br/> TOMORROW’S INNOVATION.</p>
        <p className='text-[24px] lg:mt-15'>Crafting Digital Excellence for a Future<br/> Beyond Imagination.</p>
        <div className='absolute right-40 top-86 space-y-5'>
          <img src={homeicon1} />
          <img src={homeicon1} />
          <img src={homeicon1} />
          <img src={homeicon1} />
        </div>
        <div className='flex justify-center gap-20 lg:mt-63 text-[24px] '>
          <p>Full Cycle Product Development</p>
          <p>Digital Product Design</p>
          <p>Branding</p>
          <p>Industry Automation Service</p>
        </div>
        <div className='flex flex-col items-center gap-2 lg:py-15 lg:text-[16px]'>
          <p>SCROLL</p>
          <IoIosArrowDown size={23}/>
        </div>
      </div>

      {/* Who we are */}
      <div className='py-28 text-center bg-gradient-to-b from-black to-[#1E1E1E] text-white '>
        <p className='text-[18px] text-[#9C9C9C] font-[500] '>Who We Are</p>
        <p className='text-[28px] mt-3 uppercase'>Epic Beginnings: Unveiling Our Essence,<br/> Crafting Futures with Excellence.</p>
        <div className='flex gap-12 px-20 pt-14 '>
          <img src={whoweare} className='w-1/2'/>
          <div className='space-y-10 text-left w-[490px] '>
            <p className='text-[28px] '>Empowering Progress: Our Story, Your Journey, Shared Excellence.</p>
            <p className='text-[20px] '>Embark on a journey through our narrative, where innovation meets purpose.</p>
            <p className='text-[20px] '>Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames. Blandit et purus mollis convallis malesuada egestas risus quam enim. Semper lorem rhoncus et felis tristique tellus volutpat orci. Dui elementum a sed.</p>
            <button className='w-[202px] h-[56px] rounded-[8px] border '>Who We Are →</button>
          </div>
        </div>
      </div>

      {/* counts */}
      <div className='py-17 bg-[#121212] text-white'>
        <div className='text-center'>
          <p className='text-[36px] '>400+</p>
          <p className='text-[18px] text-[#9C9C9C] '>Projects Competed</p>
        </div>
      
      </div>

    </>
  )
}

export default HomePage
