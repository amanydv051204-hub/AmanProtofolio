import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false);


  return (
    <div className='bg-[rgb(5,8,19)] '>
      <div className='flex justify-between items-center w-full'>
        <button
          className="md:hidden text-2xl text-white pl-5"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <p className='text-white md:hidden font-semibold pr-3'>Aman Yadav</p>


      </div>
      {open && (
        <ul className="md:hidden flex flex-col font-medium gap-4 mt-4 bg-zinc-900 p-4 rounded text-white">

          <Link
            to="/"
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/bio"
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Bio
          </Link>

          <Link
            to="/skills"
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Skills
          </Link>
          <div className='flex gap-2'>
            <a href="https://www.instagram.com/aman_yadav/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-pink-500"><path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.56 4 20 5.44 20 7.75v8.5C20 18.56 18.56 20 16.25 20h-8.5C5.44 20 4 18.56 4 16.25v-8.5C4 5.44 5.44 4 7.75 4zm4.25 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" /></svg>
            </a>
            <p>instagram</p>
          </div>

          <div className='flex gap-2'>
            <a href="https://www.facebook.com/profile.php?id=100083825137494">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-blue-600"><path d="M22 12a10 10 0 10-11.63 9.87v-6.99H7.9V12h2.47V9.8c0-2.44 1.45-3.8 3.68-3.8 1.07 0 2.2.19 2.2.19v2.42h-1.24c-1.22 0-1.6.76-1.6 1.53V12h2.72l-.43 2.88h-2.29v6.99A10 10 0 0022 12z" /></svg>
            </a>
            <p>facebook</p>
          </div>

          <div className='flex gap-2'>
            <a href="https://www.linkedin.com/in/aman-yadav/"><svg xmlns="http://www.w3.org/2000/           svg" viewBox="02424" fill="currentColor" class="w-6 h-6 text-blue-700"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88  0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4v14h-4V8zm7 0h3.6v1.92h.05c.5-.95 1.72-1.95 3.54-1.95 3.78 0 4.48 2.49 4.48 5.73V22h-4v-7.5c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V22h-4V8z" /></svg>
            </a>
            <p>linkedin</p>
          </div>

          <div className='flex gap-2'>
            <a href="https://github.com/AmanYadav"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24       24" fill="currentColor" class="w-6 h-6 text-white"><path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.88 1.55 2.31 1.1 2.87.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0112 6.84c.82.004 1.65.11 2.42.32 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.27 10.27 0 0022 12.26C22 6.58 17.52 2 12 2z" /></svg>
            </a>
            <p>Github</p>
          </div>

        </ul>
      )}




      <div className='hidden md:flex bg-[rgb(5,8,19)] pl-10 items-center h-15 justify-between w-35rem md:w-48rem lg:w-64rem'>
        <div className='flex gap-20 font-medium'>
          <Link className='text-red-500 ' to="/">Home</Link>
          <Link className='text-white' to="/bio">Bio</Link>
          <Link className='text-white' to="/skills">Skills</Link>
        </div>

        <div className='flex gap-10 pr-10'>
          <a href="https://www.instagram.com/aman_yadav/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-pink-500"><path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.56 4 20 5.44 20 7.75v8.5C20 18.56 18.56 20 16.25 20h-8.5C5.44 20 4 18.56 4 16.25v-8.5C4 5.44 5.44 4 7.75 4zm4.25 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" /></svg>
          </a>

          <a href="https://www.facebook.com/profile.php?id=100083825137494">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-blue-600"><path d="M22 12a10 10 0 10-11.63 9.87v-6.99H7.9V12h2.47V9.8c0-2.44 1.45-3.8 3.68-3.8 1.07 0 2.2.19 2.2.19v2.42h-1.24c-1.22 0-1.6.76-1.6 1.53V12h2.72l-.43 2.88h-2.29v6.99A10 10 0 0022 12z" /></svg>
          </a>

          <a href="https://www.linkedin.com/in/aman-yadav/"><svg xmlns="http://www.w3.org/2000/           svg" viewBox="02424" fill="currentColor" class="w-6 h-6 text-blue-700"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88  0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4v14h-4V8zm7 0h3.6v1.92h.05c.5-.95 1.72-1.95 3.54-1.95 3.78 0 4.48 2.49 4.48 5.73V22h-4v-7.5c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V22h-4V8z" /></svg>
          </a>

          <a href="https://github.com/AmanYadav"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24       24" fill="currentColor" class="w-6 h-6 text-white"><path fill-rule="evenodd" clip-rule="evenodd"
            d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.88 1.55 2.31 1.1 2.87.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0112 6.84c.82.004 1.65.11 2.42.32 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.27 10.27 0 0022 12.26C22 6.58 17.52 2 12 2z" /></svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
