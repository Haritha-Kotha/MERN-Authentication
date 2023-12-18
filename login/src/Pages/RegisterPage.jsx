import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate()
  const [data,setData]=useState({
    name:"",
    email:"",
    password:"",
  })

  const registerUser = async (e) =>
  {
    e.preventDefault();
    const {name, email, password} = data
    try {
      const {data} = await axios.post('/registerPage', {
        name, email, password
      })
      if(data.error)
      {
        toast.error(data.error)
      }
      else{
        setData({})
        toast.success("Registered Successfully")
        navigate('/loginPage')
      }
    } catch (error) {
      console.log(error) 
    }
  }

  return (
    <form onSubmit={registerUser}>
      <label>Name</label>
      <input type="text" placeholder='Enter Name' value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}} />
      <label>Email</label>
      <input type="text" placeholder='Enter Email' value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}} />
      <label>Password</label>
      <input type="text" placeholder='Enter Password' value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}} />
      <button type='submit'>Register</button>
    </form>
  )
}


export default RegisterPage