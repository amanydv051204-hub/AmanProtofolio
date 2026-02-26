import React from 'react'
import Achivement from '../assets/Achievement.png'
import Certificate from '../assets/certificate.png'

function Achieve() {
  return (
    <div className="bg-gradient-to-b from-sky-200 to-white min-h-screen">
          <div className='lg:pt-20 pt-10 flex justify-center text-3xl font-bold lg:text-5xl bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent'>
            <h1>Achievements</h1>
          </div>
            
            <div className='lg:flex lg:pl-80'>
              <img src={Achivement}/>
              <div className='flex flex-col lg:gap-10 pl-5'>
                <div className='lg:pt-40 flex items-center'>
                  <img src={Certificate} className='h-20 w-20' />
                    <div>
                      <p className='font-bold text-2xl'>MERN Stack</p>
                      <p>Completion of Mern Stack</p>
                    </div>
                </div>

                <div className='flex items-center'>
                 <img src={Certificate} className='h-20 w-20' />
                  <div>
                    <p className='font-bold text-2xl'>Python Programming </p>
                    <p>with Raspberry Pi</p>
                  </div>
                </div>
              </div>

            </div>
    </div>
  )
}

export default Achieve
