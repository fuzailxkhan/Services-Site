import { FieldValues, useForm } from "react-hook-form";

const Login = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();
    const onLogin = (data:FieldValues)=>{
        console.log(data)
    }
  return (
    (
        <div className="border-black border p-3">
        <form onSubmit={handleSubmit((data)=>{onLogin(data)})} >
          <h1>Login to your Account</h1>

          <div className=" flex flex-col m-3">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  ps-10 p-2.5" {...register("email", {required:{value:true,message:"Please enter your email."},pattern: {value: /\S+@\S+\.\S+/,message: "Enter a valid email."}})}   id="email"/>
            {errors.email&&<span className="text-red-500" >{errors.email.message?.toString()}</span>}
          </div>

          <div className="flex flex-col m-3">
            <label htmlFor='password' className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input {...register("password",{required:true})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  ps-10 p-2.5" id="password"/>
            {errors.password&&<span className="text-red-500"> Please enter a password. </span>}
          </div>
               
          <div className=" m-3 flex flex-row-reverse gap-1">
            <button type="submit" className="bg-blue-500 text-white ps-4 pe-4 p-1.5 rounded-md shadow-md shadow-gray-400  hover:bg-blue-600 ms-2" data-bs-dismiss="modal">Login</button>
            <button type="button" className="bg-gray-200 text-gray-600 ps-4 pe-4 p-1.5 rounded-md shadow-md shadow-gray-400  hover:bg-blue-600" data-bs-dismiss="modal">Close</button>
          </div>
        </form>
        
    </div>
  ))
}

export default Login