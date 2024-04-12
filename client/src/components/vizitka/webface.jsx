import React from 'react'
import {  LogoDark, LogoLight,  } from '../../assets'
import { styles } from '../../constants/styles'

const Webface = () => {
  return (
    <div className=' bg-neutral-200 h-screen'>
       <div className={`col-span-5  px-4  bg-slate-100 h-[60px] text-white`}>
        <div className="flex items-center justify-center h-20 w-20">
          <img src={LogoDark} alt="logo" className="object-cover w-20 h-20 rounded-full"/>
        </div>
        </div>
    </div>
  )
}

export default Webface