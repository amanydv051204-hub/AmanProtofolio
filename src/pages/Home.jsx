import React from 'react'
import Navbar from './Navbar'
import Real from '../assets/real.png'
import Services from './Services'
import Achieve from './Achieve'
import CTA from './CTA'
import resumee from '../assets/Aman_Yadav_Resume.pdf'




function Home() {


  return (
    <div>
      <Navbar />
      <div className="lg:flex-row flex flex-col items-center justify-center-safe gap-20 bg-gradient-to-b from-black via-gray-900 to-gray-200 lg:gap-40 h-screen bg-cover bg-center overflow-x-hidden">

        <div className='flex flex-col gap-5 order-2 lg:order-1 lg:p-0 pl-10'>
          <h2 className="lg:text-[30px] text-[15px] font-bold text-blue-500">
            - Hi, I'm
          </h2>

          <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 lg:from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Aman Yadav
          </h1>
          <h2 className='w-100 font-bold text-[15px] lg:text-[30px] text-[#CBD5E1]'>
            I build web applications that about impact
          </h2>

          <div className='flex gap-5'>
            <a href="https://wa.me/917800126587" target="_blank" rel="noopener noreferrer" className=" flex justify-center  items-center w-20 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300">
              Hire Me
            </a>

            <button className='text-white rounded-md lg:h-10 h-8 lg:w-25 w-25  border border-blue-500'>
              View Project
            </button>
          </div>
        </div>

        <img
          src={Real}
          className='order-1 lg:order-2 w-50 lg:w-100 h-50 lg:h-100 bg-blue-900 rounded-full object-cover border-4 border-blue-500'
        />
      </div>

      {/* next slide page with details */}

      <div className='bg-[rgb(240,241,243)] h-100'>
        <div className='pl-5 lg:pr-40 lg:pl-40 lg:pt-20 pt-5 lg:gap-5 flex flex-col'>
          <h1 className='font-bold text-[25px] lg:text-5xl bg-gradient-to-r from-blue-500 to-black bg-clip-text text-transparent'>About Me</h1>
          <p className='font-semibold text-md lg:text-2xl'>I’m a tech professional and love building things that make a difference. Technology excites me, and I enjoy tackling challenges with creative solutions. I’m curious by nature, always learning, and thrive when bringing fresh ideas to projects. My goal is to grow, contribute meaningfully, and make every project I touch better than before.</p>
          <div className=' flex lg:flex-row pt-3 flex-col lg:gap-5'>

            <a href={resumee} target="_blank" rel="noopener      noreferrer" download="Aman_Yadav_Resume.pdf"
              className="mt-5 lg:mt-0 px-4 py-2 border-2 font-bold text-black w-max text-center">
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* next services section */}
      <Services />
      <Achieve />
      <CTA />
      <hr className='mt-20 ' />
      <div className='h-15 flex justify-center items-center font-bold'>© 2026 Aman Yadav. All rights reserved.</div>
    </div>

  )
}

export default Home
