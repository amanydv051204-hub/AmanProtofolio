import React from 'react'
import Web from '../assets/images.png'
import Python from '../assets/python.png'
import Machine from '../assets/machine.png'
import Java from '../assets/Java.png'
import Data from '../assets/Data.png'
import App from '../assets/App.png'

function Services() {
  return (
    <div>
        <div className="bg-gradient-to-b from-white to-sky-200 min-h-screen font-semibold">
         <h1 className='pt-5 lg:pt-15 lg:text-5xl font-bold text-3xl flex justify-center bg-gradient-to-r from-red-300 to-pink-500 lg:from-sky-500 to-blue-600 bg-clip-text text-transparent'>Services</h1>
         
          <div className='lg:flex lg:flex-row justify-around mt-5 lg:mt-20 flex flex-col items-center gap-10'>
              <div className='bg-blue-200 w-80 h-40  lg:w-100 lg:h-50 flex lg:justify-center items-center rounded-2xl  shadow-lg'>
                <img src={Web} className='h-40 w-50'/>
                <p>Frontend, Backend, Full-Stack, UI/UX, Responsive, API, E-commerce, SEO, Maintenance, Security</p>
              </div>

              <div className='bg-blue-200 w-80 h-40 lg:w-100 lg:h-50 flex gap-5 lg:justify-center items-center rounded-2xl shadow-lg '>
                <img src={Python} className='h-40 w-50 pt-5 pl-5'/>
                <p>Web Apps, Automation, Data Analysis, Scripting, APIs.</p>
              </div>
              
              <div className='bg-blue-200 w-80 h-60 lg:w-100 lg:h-50 flex lg:justify-center items-center rounded-2xl shadow-lg  '>
                <img src={Machine} className='h-40 w-50'/>
                <p>Data Preprocessing, Modeling, NLP, Computer Vision, Regression, Classification, Clustering, TensorFlow, PyTorch, Model Deployment</p>
              </div>
          </div>

          {/* next line */}

          <div className='lg:flex lg:flex-row justify-around  mt-10 lg:mt-20 flex flex-col items-center gap-10'>
              <div className='bg-blue-200 w-80 h-40  lg:w-100 lg:h-50 flex lg:justify-center items-center rounded-2xl shadow-lg  '>
                <img src={Java} className='h-40 w-50'/>
                <p>Backend, Spring, Hibernate, APIs, Web Apps, Microservices, JDBC, Testing, Performance, Security</p>
              </div>

              <div className='bg-blue-200 w-80 h-40  lg:w-100 lg:h-50 flex lg:justify-center items-center rounded-2xl shadow-lg  '>
                <img src={Data} className='h-40 w-50'/>
                <p>Data Cleaning, Visualization, Reporting, SQL, Python, Excel, Dashboards, BI Tools, Statistics, Insights</p>
              </div>

              <div className='bg-blue-200 w-80 h-40  lg:w-100 lg:h-50 flex lg:justify-center items-center rounded-2xl shadow-lg  overflow-x-auto '>
                <img src={App} className='h-30 w-40'/>
                <p >iOS, Android, React Native, Flutter, UI/UX, API Integration, Testing,Maintenance</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Services
