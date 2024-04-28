import { useState } from 'react';
import shipLogo from './navbar_logo.jpg';
import {Link,NavLink} from "react-router-dom"
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { setNoti } from '../../app/appSlice';
import { useSelector } from 'react-redux';
import { WritableDraft } from 'immer'; 

const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const dispatch= useDispatch();
    const noti = useSelector((state: WritableDraft<{noti: string;}>)=>state.noti)

    const notiFunction = async(message:string)=>{
        dispatch(setNoti(message));
        setTimeout(()=>dispatch(setNoti('')),3000);
    }
    
    
  return ( 
    <div>
        <div className={`bg-gray-200 shadow-lg sm:w-[300px] w-[225px] p-[2px]  text-center rounded-lg fixed top-[-25px] left-0 right-0 mx-auto tranisiton-all duration-300 ${noti&&'top-[22px]'}`}><span>{noti}</span></div>
        <nav className="min-h-10 grid grid-cols-3 p-2 m-2 rounded-md sm:grid-cols-3 shadow-xl border mb-2">

            <div className="col-span-1 justify-self-center  self-center hidden sm:block">
                <Link to="/" className='flex'><img className="max-h-10 m-0" src={shipLogo} /><p className='self-center ms-5 font-semibold text-blue-900 hover:text-black'>World Wide Shipping</p></Link>
            </div>

            <div className="self-center relative block sm:hidden">
                <button onClick={()=>setMenuOpen(!menuOpen)} className=' rounded-md   text-white p-1.5'>
                    <HiOutlineMenuAlt1 size={22} className='fill stroke-blue-500 '/>
                </button>
                <div className={`shadow-md  m-2 p-3 w-full transition-all duration-300 fixed top-0  ${menuOpen? "left-[-8px]":"left-[-437px]"} bg-white`}>
                        <ul className='grid grid-cols-4'>
                            <li className=' text-center m-1'>
                            <NavLink to='/About' onClick={()=>{setMenuOpen(false)}} className={({isActive})=> `${isActive&&"text-blue-700"}`}>About</NavLink>
                            </li>

                            <li className=' text-center m-1'>
                            <NavLink to='/' onClick={()=>{setMenuOpen(false)}} className={({isActive})=> `${isActive&&"text-blue-700"} `}>Home</NavLink>
                            </li>

                            <li className=' text-center m-1'>
                            <NavLink to='/Services'onClick={()=>{setMenuOpen(false)}} className={({isActive})=> `${isActive&&"text-blue-700 "}`}>Service</NavLink>
                            </li>

                            <li className=' text-center m-1'>
                            <NavLink to='/Contact' onClick={()=>{setMenuOpen(false)}} className={({isActive})=> `${isActive&&"text-blue-700 "}`}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
            </div>

            <div className='self-center hidden sm:block'>
                <ul className="grid grid-cols-4 col-span-2 sm:col-span-1 self-center justify-self-start sm:justify-self-center sm:gap-5">
                    <li className="justify-self-start sm:justify-self-center font-semibold text-gray-400 hover:text-blue-700">
                        <NavLink to='/About' className={({isActive})=> `${isActive&&"text-blue-700"}`}>About</NavLink>
                    </li>
                    <li className="justify-self-start sm:justify-self-center font-semibold  text-gray-400 hover:text-blue-700">
                        <NavLink to='/' className={({isActive})=> `${isActive&&"text-blue-700"} `}>Home</NavLink>
                    </li>
                    <li className="justify-self-start sm:justify-self-center font-semibold  text-gray-400 hover:text-blue-700">
                        <NavLink to='/Services' className={({isActive})=> `${isActive&&"text-blue-700 "}`}>Service</NavLink>
                    </li>
                    <li className="justify-self-start sm:justify-self-center font-semibold  text-gray-400 hover:text-blue-700 ps-1">
                        <NavLink to='/Contact' className={({isActive})=> `${isActive&&"text-blue-700 "}`}>Contact</NavLink>
                    </li>
                </ul>
            </div>
            

            <div className='grid grid-cols-2 col-span-1 justify-self-end sm:justify-self-center self-center col-start-3'>
                <p className='self-center justify-self-center font-semibold text-blue-700 hover:text-black'><NavLink className={({isActive})=>`${isActive&&"border-b-4 border-blue-500 sm:pb-3.5 pb-[13px] px-2"}`} to="/Login">Login</NavLink></p>
                <button className=" bg-blue-500 text-white ps-4 pe-4 p-1.5 rounded-md shadow-md shadow-gray-400  hover:bg-blue-600">
                    <Link className='hidden sm:block' to="/SignUp">Sign Up</Link>
                    <Link className='block sm:hidden' to='/SignUp'>Sign</Link>
                </button>
            </div>
            
        </nav>
        
      <button onClick={()=>notiFunction("Welcome Fuzail Khan")}>Click Me</button>
    </div>
  )
}

export default Header