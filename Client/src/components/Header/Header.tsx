import shipLogo from './navbar_logo.jpg';
import {Link,NavLink} from "react-router-dom"

const Header = () => {
  return ( 
    <div>
        <nav className="min-h-10 grid grid-cols-3 p-2 m-2 rounded-lg sm:grid-cols-3 shadow-xl border mb-2">

            <div className="col-span-1 justify-self-center  self-center hidden sm:block">
                <Link to="/" className='flex'><img className="max-h-10 m-0" src={shipLogo} /><p className='self-center ms-5 font-semibold text-blue-900 hover:text-black'>World Wide Shipping</p></Link>
            </div>

            
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
            
            

            <div className='grid grid-cols-2 col-span-1 justify-self-end sm:justify-self-center self-center'>
                <p className='self-center justify-self-center font-semibold text-blue-700 hover:text-black'><NavLink className={({isActive})=>`${isActive&&"border-b-4 border-blue-500 sm:pb-3.5 pb-[13px] px-2"}`} to="/Services">Login</NavLink></p>
                <button className=" bg-blue-500 text-white ps-4 pe-4 p-1.5 rounded-md shadow-md shadow-gray-400  hover:bg-blue-600">
                    <Link className='hidden sm:block' to="/Contact">Sign Up</Link>
                    <Link className='block sm:hidden' to='/Contact'>Sign</Link>
                </button>
            </div>
            
        </nav>
    </div>
  )
}

export default Header