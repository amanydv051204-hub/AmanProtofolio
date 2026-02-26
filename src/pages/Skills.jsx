import React from 'react'
import Navbar from './Navbar'
import Skillbio from '../assets/skillbest.png'

function Skills() {
  return (
    <div className='w-full min-h-screen bg-zinc-900'>
      <Navbar />
      <div className='flex flex-col pt-10 lg:flex-row justify-center items-center lg:pt-50 gap-5'>
        <img src={Skillbio} className='lg:h-100 h-50 w-50 lg:w-100 rounded-full border-blue-500 border-2 bg-zinc-700' />
        <div className='flex flex-col lg:w-150 w-80 gap-5'>
          <p className='text-white font-bold text-[18px] lg:text-3xl'><a className='text-[#18ed71]'>PROFESSIONAL </a>WEB DESIGNER</p>
          <p className='text-white font-medium'>I am a creative and detail-oriented Web Designer with a strong passion for building visually appealing and user-friendly websites. I specialize in responsive design, modern UI/UX principles, and clean layouts that enhance user experience. I focus on creating engaging digital experiences that combine aesthetics with functionality to deliver impactful and professional web solutions.</p>
          <a
            href="https://wa.me/917800126587"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 items-center flex justify-center w-30 bg-gradient-to-r from-sky-400 to-blue-900 text-white font-semibold rounded-sm"
          >
            Start Here
          </a>
        </div>
      </div>
      {/* next section */}

      <div className='lg:p-50 grid p-5 grid-cols-3 lg:gap-10 '>
        <div className='flex flex-col  gap-10'>
          <div className='flex lg:flex-row flex-col gap-10 lg:w-300'>
            <div className='bg-red-300 h-30 w-80 flex pl-5 flex-col justify-center rounded-2xl gap-2 '>
              <p className='font-bold text-2xl lg:text-3xl'>👨‍💻 Web Developer</p>
              <p className='font-medium'>Creative web developer building modern, responsive</p>
            </div>
            <div className='bg-red-300 w-80 flex pl-5  flex-col justify-center rounded-2xl '>
              <p className='font-bold text-2xl lg:text-3xl'>🚀 App Developer</p>
              <p className='font-medium'>Creative app building scalable, user-friendly mobile application</p>
            </div>
            <div className='bg-red-300 pl-5 flex  w-80 justify-center flex-col rounded-2xl '>
              <p className='font-bold text-2xl lg:text-3xl'>📊 Data Analytics</p>
              <p className='font-medium'>Detail-oriented data analytics professional transforming data into insights.</p>
            </div>
          </div>

          <div className='flex lg:flex-row flex-col gap-10 lg:w-300'>
            <div className='bg-red-300 h-30 pl-5 w-80 flex justify-center flex-col rounded-2xl '>
              <p className='font-bold text-2xl lg:text-3xl'> 🧠 Machine Learning</p>
              <p className='font-medium'>Passionate machine learning engineer building intelligent predictive systems.</p>
            </div>
            <div className='bg-red-300  pl-5 flex w-80 justify-center flex-col rounded-2xl '>
              <p className='font-bold text-2xl lg:text-3xl'>⚡ Python Developer</p>
              <p className='font-medium'>Skilled Python developer building efficient, scalable software solutions.</p>
            </div>
            <div className='bg-red-300 pl-5 flex w-80 justify-center flex-col rounded-2xl '>
              <p className='font-bold text-2xl lg:text-3xl'>💻 C++ Developer</p>
              <p className='font-medium'>Proficient C++ developer building high-performance, efficient software systems.</  p>
            </div>
          </div>
        </div>
      </div>
      <hr className='mt-20 text-white ' />
      <div className='h-15 flex justify-center items-center font-bold text-white'>© 2026 Aman Yadav. All rights reserved.</div>

    </div>
  )
}

export default Skills
