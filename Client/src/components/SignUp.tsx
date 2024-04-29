import { FieldValues, useForm } from "react-hook-form";
import { MdAlternateEmail } from "react-icons/md";
import { IoKeySharp } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import noUser from "../assets/no-user.png"
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"
import ship from "./Cruise Ship.svg";
import {useNotification} from "../functions/functions";

const SignUp = () => {

  const [picture,setPicture] = useState<string>();
  const [pictureError,setPictureError] = useState<string>();
  const [loading,setLoading] = useState(false);
  const {register,handleSubmit,setValue,reset,formState:{errors}} = useForm();
  
  const navigate = useNavigate();
  const {setNotification} = useNotification();

  const onSignUp = (data:FieldValues)=>{
    if(!picture)setPictureError("Please upload an image");
    else{
    console.log(data);
    reset();
    setPicture('');
    setPictureError('');
    
    setLoading(true);
    axios.post("http://localhost:3000/Signup",data)
    .then((res):void=>{console.log(res.data.Message);
      setNotification(res.data.Message)
      
      setLoading(false);
      if(res.data.Message.startsWith('Welcome')){
        navigate("/");
      }
      else if(res.data.Message==="Email already in use"){
          setPicture(picture);
          setValue('firstName', data.firstName);
          setValue('lastName', data.lastName);
          setValue('email', data.email);
          setValue('password', data.password);
      }
      else{
        console.log('Some New Error Occures')
      }
    })
    }
  }

  const handleImageChange =(e:ChangeEvent<HTMLInputElement>)=>{
    let file;
    if (e.target.files) {
      file = e.target.files[0];
      if(file&& file.size <= 5 * 1024 * 1024){
        console.log("File Size okay")
        const reader = new FileReader();
        reader.onload = () => {
          if(reader.result){
          setPicture(reader.result.toString());
          setValue('picture',reader.result.toString());}
           };
        reader.readAsDataURL(file);
        setPictureError(''); 
      }
      else{
        setPictureError("Image should be under 5MB.")
      }
    }else{
      setPictureError("Please upload an image.")
    }
  }

  const closeButton =()=>{
    // axios.post("http://localhost:3000/SignUp",{Message:"Hello"})
  }
  

  return (

    <div className="sticky border top-[130px] pt-10 pb-10 max-w-[420px] m-auto mx-8 sm:mx-auto mt-10 mb-96 bg-gray-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit((data)=>{onSignUp(data)})} className={`${loading&&'blur-sm'}`} >

        <h1 className="text-center font-semibold text-lg mb-5">Create an Account</h1>

        <div className="flex flex-col justify-center m-3 mb-1">
          <p className="self-center font-medium text-gray-900 mb-1">Add a picture</p>
          <label htmlFor="file-upload" className="self-center">
            <div className={`${pictureError&&"border-red-500"} border-4 border-gray-400 rounded-full overflow-hidden`}>
              <img src={picture?picture:noUser} className="h-[150px] w-[150px] object-cover bg-gray-200 m-auto"/>
            </div>
          </label>
          {pictureError&&<p className="text-center text-red-500">{pictureError}</p>}
          <input onChange={handleImageChange}  id="file-upload" type="file" accept="image/*"  className="hidden" />
          
        </div>

        <div className="flex sm:flex-row flex-col">

          <div className=" flex flex-col mb-0 m-3 sm:me-1 me-3">
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
            <div className=" flex flex-col relative">
              <GoPerson className="absolute fill-gray-600 bg-gray-300 rounded-lg rounded-e-none border-e border-gray-400 ps-3 pe-2.5 w-[42px] h-[42px]"/>
              <input className={`bg-gray-50 border sm:rounded-e-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  ps-12 p-2.5 pe-0 outline-none ${errors.email&& "border-red-500 focus:border-red-500 focus:ring-red-500"}`} {...register("firstName", {required:{value:true,message:"Enter your first name."}})}   id="firstName" placeholder="Enter your first name" />
            </div>
            {errors.firstName&&<span className="text-red-500" >{errors.firstName.message?.toString()}</span>}
          </div>

          <div className=" flex flex-col m-3 sm:ms-0 mb-0 ms-3 me-3 sm:w-full w-auto">
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
            <div className=" flex flex-col relative ">
              <input className={`bg-gray-50 border sm:rounded-s-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 pe-0 p-2.5 outline-none ${errors.email&& "border-red-500 focus:border-red-500 focus:ring-red-500"}`} {...register("lastName", {required:{value:true,message:"Enter your last name."}})}   id="lastName" placeholder="Enter your last name" />
            </div>
            {errors.lastName&&<span className="text-red-500" >{errors.lastName.message?.toString()}</span>}
          </div>

        </div>

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
              <input {...register("password",{required:true})} className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  ps-12 p-2.5 outline-none ${errors.password&& "border-red-500 focus:border-red-500 focus:ring-red-500"} `} placeholder='Enter a password' id="password" />
            </div>
            {errors.password&&<span className="text-red-500"> Please enter your password. </span>}
          </div>

          

          <div className=" m-3 mt-5 flex flex-row-reverse gap-1">
            <button type="submit" className="bg-blue-500 text-white ps-4 pe-4 p-1.5 rounded-md shadow-md shadow-gray-400  hover:bg-blue-600 ms-2" data-bs-dismiss="modal">Sign Up</button>
            <NavLink to='/'><button type="button" onClick={()=>closeButton()} className="bg-gray-200 text-gray-600 ps-4 pe-4 p-1.5 rounded-md shadow-md shadow-gray-400  hover:bg-blue-600" data-bs-dismiss="modal">Close</button></NavLink>
          </div>

      </form>
      {loading&&<div className="absolute top-[250px] right-0 left-0">
        <img className="w-[100px] m-auto Ship" src={ship}></img>
      </div>}
        
      </div>

  )
}

export default SignUp