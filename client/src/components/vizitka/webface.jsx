import React from 'react'
import {  Logo  } from '../../assets'


const Webface = () => {
  return (
    <div className=' bg-neutral-200 h-screen'>
       <div className={`col-span-5  px-4  bg-neutral-200 h-[60px] text-white`}>
        <div className="flex items-center justify-center h-21 w-21 ">
          <img src={Logo} alt="logo" className="object-cover w-[100px] h-[100px] rounded-full  ml-10"/>
          <div className='flex items-center justify-center w-20 h-[30px]  mr-20 bg-green-500 text-teal-100 text-center rounded-lg'><button>Sign in</button></div>
        </div>
        </div>
    </div>
  )
}

export default Webface