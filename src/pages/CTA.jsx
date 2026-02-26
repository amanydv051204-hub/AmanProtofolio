import React from 'react'
import Video from '../assets/Data.mp4'

function CTA() {
  return (
    <div className='lg:flex lg:gap-10 flex gap-4 flex-col lg:flex-row lg:pl-0 pl-5'>
      <div className='lg:w-200 w-80 pl-5 lg:pl-40 flex flex-col gap-5'>
        <h1 className='font-bold text-3xl lg:text-5xl text-red-700'>Are you ready to Experience with me?</h1>
        <h2 className='font-semibold text-lg lg:text-2xl'>Let’s build something amazing together. I turn ideas into fast, responsive and modern web experiences.</h2>
        <h2 className='font-semibold text-lg lg:text-2xl'>Have a project in mind? Let’s bring your vision to life.</h2>


        <a
          href="https://wa.me/917800126587"
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 items-center flex justify-center w-30 bg-gradient-to-r from-sky-400 to-blue-900 text-white font-semibold rounded-sm"
        >
          Start Here
        </a>


      </div>
      <video src={Video} autoPlay loop muted className="lg:w-120 w-85  lg:h-70 object-cover rounded-2xl shadow-lg" />
    </div>
  )
}

export default CTA
