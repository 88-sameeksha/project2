import React from 'react'
import { MdArrowDropDown } from "react-icons/md";
import { useSelector } from 'react-redux'

const Header = () => {
  const user=useSelector((store)=>store.app.user);
  console.log(user);
  return (
    <div className=' absolute z-10 flex w-[100%] items-center justify-between bg-gradient-to-b from-black px-4'>
      <img  className="w-56"src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Netflix_Logomark.png?_=20230907150228" alt="netflix-logo"/>
      { user &&(
    <div className='flex item-center'>
        <MdArrowDropDown size="24px" color='white'/>
        <h1 className='text-lg text-white font-medium'>{user.fullname}</h1>
        <div className='ml-4'>
        <button className='bg-red-800 text-white px-4 py-2'>Logout</button>
        <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
        </div>
    </div>
  )
}
    </div>
  )
}

export default Header
