import React from 'react'
import Header from './Header'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import setUser  from '../redux/userslice'



const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [islogin,setIslogin]=useState(false);
  const [fullname,setFullname]=useState("");
   const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  
  const loginhandler=()=>{
    setIslogin(!islogin);
  }
  const handledata=async(e)=>{
    e.preventDefault();
    if(islogin){
      //llogin 
      try{

       const res=await axios.post("http://localhost:5600/api/user/login",{email,password});
        
        if(res.data.success){
          toast.success(res.data.message);
          dispatch(setUser(res.data.user));
          navigate("/browse")
        }
      }catch (error) {
    // Check if the server returned a response with an error message
    const errorMessage = error.response?.data?.message || error.message || "Something went wrong";
    
    toast.error(errorMessage);
    console.log(error);
      }
    }else{
   try{
        const res=await axios.post("http://localhost:5600/api/user/register",{fullname,email,password});
        
        if(res.data.success){
          toast.success(res.data.message);
        }
        setIslogin(true);
   }catch (error) {
    // Check if the server returned a response with an error message
    const errorMessage = error.response?.data?.message || error.message || "Something went wrong";
    
    toast.error(errorMessage);
    console.log(error);
   }
  }

}
  return (
    <div>
      <Header/>
      <div className='absolute'>
        < img className='w-[100vw] h-[100vh]'src="https://xboxwire.thesourcemediaassets.com/sites/2/2023/05/Background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.png" alt="banner"/>
      </div>
      <form  onSubmit={handledata}className=' flex  flex-col w-3/12 my-36 p-12 left-0 right-0 mx-auto  items-center justify-center absolute  rounded-md bg-black opacity-90'>
        
        <h1 className='text-white text-3xl mb-5 font-bold'>{islogin ?"Login":"SignUp"}</h1>
        <div className=' flex flex-col'>
             
            {  !islogin&& <input value={fullname} onChange={e=>setFullname(e.target.value)}type='text' placeholder='Full Name'className='outline-none p-3 my-2 rounded-md bg-gray-700 text-white'/>}
             <input value={email}  onChange={e=>setEmail(e.target.value)}type='text'placeholder='E-mail ID'className='outline-none p-3 my-2 rounded-md bg-gray-700 text-white'/>
            <input  value={password} onChange={e=>setPassword(e.target.value)}type='password'placeholder ='Password'className='outline-none p-3 my-2 rounded-md bg-gray-700 text-white'/>
             <button className='bg-red-600 rounded-md  text-white font-medium mt-8 p-3'>{islogin? "Login":"SignUp"}</button>
             <p className='text-white mt-3  items-center justify-center'>{islogin?  "New to Netflix?" : "Already Have an Account?"}<span onClick={loginhandler} className='ml-1 text-blue-700 font-medium cursor-pointer'>{islogin? "SignUp":"Login"}</span></p>
        </div>
      </form>
    </div>
  )
}

export default Login
