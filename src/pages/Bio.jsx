import React from 'react'
import Navbar from './Navbar'
import Biobg from '../assets/Biobg.png'

function Bio() {
  return (
    <div >
      <Navbar />
      <div className='h-screen bg-cover bg-center ' style={{ backgroundImage: `url(${Biobg})` }}>
        <div className='text-white flex flex-col pt-50 pl-5 lg:h-screen justify-center w-50 lg:w-180 lg:pl-30          lg:gap-5'>
          <p className='text-[18px] lg:text-5xl font-extrabold text-blue-400 '>Hi,</p>
          <p className='text-[18px] lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text   text-transparent'>I'm Aman Yadav</p>
          <p className='text-[10px] lg:text-xl font-medium bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text  text-transparent'>I am a passionate App and Web Developer who loves turning ideas into powerful digital products. Skilled in Java, Python, and Data Analytics, I focus on building fast, scalable, and user-friendly applications. I believe in continuous learning, innovation, and creating technology that drives real business growth.</p>
          <a href="/Aman_Yadav_Resume.pdf" target="_blank" rel="noopener      noreferrer" download="Aman_Yadav_Resume.pdf"
            className="mt-5 lg:mt-0  px-4 py-2 font-bold text-white bg-blue-800 w-max text-center">Download Resume
          </a>
        </div>

      </div>

    </div>
  )
}

export default Bio
