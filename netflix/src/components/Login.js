import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
        < img className='w-[100vw] h-[100vh]'src="https://xboxwire.thesourcemediaassets.com/sites/2/2023/05/Background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.png" alt="banner"/>
      </div>
      <form className=' flex  flex-col w-3/12 my-36 p-12 left-0 right-0 mx-auto  items-center justify-center absolute bg-black opacity-90'>
        
        <h1 className='text-white text-3xl mb-5 font-bold'>Sign Up</h1>
        <div className=' flex flex-col'>
             
             <input type='text' placeholder='Full Name' className='outline-none p-3 my-2 rounded-md bg-gray-700 text-white'/>
             <input type='text'placeholder='E-mail ID'className='outline-none p-3 my-2 rounded-md bg-gray-700 text-white'/>
            <input type='password'placeholder='Password'className='outline-none p-3 my-2 rounded-md bg-gray-700 text-white'/>
             <p>Already have an Account?</p>
        </div>
      </form>
    </div>
  )
}

export default Login
