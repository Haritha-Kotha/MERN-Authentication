import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate()
  const [data,setData]=useState({
    email:"",
    password:""
  })

  const loginUser = async(e) => {
    e.preventDefault();
    //axios.get('/')
    const  {email, password} = data
    try {
      const {data} = await axios.post('/loginPage',
      {
        email,
        password
      })
      if(data.error)
      {
        toast.error(data.error)
      }
      else{
        setData({})
        toast.success("Login successfully done")
        navigate('/dashboard')
      }
    } catch (error) {
      
    }
  }

  return (
   <form onSubmit={loginUser}>
     <label>Email</label>
      <input type="text" placeholder='Enter Email' value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}} />
      <label>Password</label>
      <input type="text" placeholder='Enter Password' value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}} />
      <button type='submit'>Login</button>
   </form>
  )
}

export default LoginPage