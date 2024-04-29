import { FieldValues, useForm } from "react-hook-form";
import { MdAlternateEmail } from "react-icons/md";
import { IoKeySharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import {  useEffect, useState } from "react";
import axios from "axios";
import {useNotification} from "../functions/functions";
import ship from "./Cruise Ship.svg";
import "./Login.css"

const Login = () => {
    const {setNotification} = useNotification();
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const {register,setValue,handleSubmit,formState:{errors}} = useForm();

    const onLogin = (data:FieldValues)=>{
        console.log(data);
        setLoading(true);
        axios.post("http://localhost:3000/Login",data)
        .then((res):void=>{
          console.log(res.data);
          setNotification(res.data.Message);
          setLoading(false);
          if(res.data.Message.startsWith('Welcome')){
            navigate("/");
          }
          else if(res.data.Message==="Wrong Password"){
              
              
              setValue('email', data.email);
              setValue('password', data.password);
          }
          else{
            console.log('Some New Error Occures')
          }
        })
    }

    useEffect(()=>{
      
    },[errors.password,errors.email,errors])

    


  return (
    (
        <div className="sticky top-[130px] p-3 pt-10 max-w-[400px] m-auto mx-8 sm:mx-auto mt-10 mb-96 bg-gray-100 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit((data)=>{onLogin(data)})} className={`${loading&&'blur-sm'}`}>
          <h1 className="text-center font-semibold text-lg">Login to your Account</h1>

          <div className=" flex flex-col m-3">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <div className=" flex flex-col relative">
              <MdAlternateEmail className="absolute fill-gray-600 bg-gray-300 rounded-lg rounded-e-none border-e border-gray-400 p-3 w-[42px] h-[42px]"/>
              <input className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  ps-12 p-2.5 outline-none ${errors.email&& "border-red-500 focus:border-red-500 focus:ring-red-500"}`} {...register("email", {required:{value:true,message:"Enter your email."},pattern: {value: /\S+@\S+\.\S+/,message: "Enter a valid email."}})}   id="email" placeholder="Enter your email" />
            </div>
            {errors.email&&<span className="text-red-500" >{errors.email.message?.toString()}</span>}
          </div>

          <div className="flex flex-col m-3">
            <label htmlFor='password' className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <div className="flex flex-col relative">
              <IoKeySharp className="absolute fill-gray-600 bg-gray-300 rounded-lg rounded-e-none border-e border-gray-400 p-3 w-[42px] h-[42px]"/>
              <input {...register("password",{required:true})} className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  ps-12 p-2.5 outline-none ${errors.password&& "border-red-500 focus:border-red-500 focus:ring-red-500"} `} placeholder='Enter your password' id="password" />
            </div>
            {errors.password&&<span className="text-red-500"> Please enter your password. </span>}
          </div>
               
          <div className=" m-3 mt-5 flex flex-row-reverse gap-1">
            <button type="submit" className="bg-blue-500 text-white ps-4 pe-4 p-1.5 rounded-md shadow-md shadow-gray-400  hover:bg-blue-600 ms-2" data-bs-dismiss="modal">Login</button>
            <button type="button" className="bg-gray-200 text-gray-600 ps-4 pe-4 p-1.5 rounded-md shadow-md shadow-gray-400  hover:bg-blue-600" data-bs-dismiss="modal">Close</button>
          </div>

            <div className="mt-6 flex">
                <hr className="w-40 m-auto border "/>
                <p className=" text-slate-500">or</p>
                <hr className="w-40 m-auto border "/>
            </div>

          <div className="flex justify-between m-3">
            <p className=" text-sm underline text-blue-700"><Link to="/SignUp">Don't have an Account?</Link></p>
            <p className="text-sm underline text-blue-700">Forgot your Password?</p>
          </div>

        </form>
        {loading&&<div className="absolute top-[150px] right-0 left-0">
        <img className="w-[100px] m-auto " src={ship}></img>
        <p className="text-center text-bold logging">Logging In</p>
      </div>}
    </div>
  ))
}

export default Login