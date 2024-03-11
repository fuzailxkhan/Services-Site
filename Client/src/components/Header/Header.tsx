import shipLogo from './navbar_logo.jpg';
import {Link,NavLink} from "react-router-dom"

const Header = () => {
  return ( 
    <div>
        <nav className="min-h-10 grid grid-cols-2 p-2 m-2 rounded-lg sm:grid-cols-3 shadow-xl border mb-2">

            <div className="col-span-1 justify-self-center  self-center hidden sm:block">
                <Link to="/" className='flex'><img className="max-h-10 m-0" src={shipLogo} /><p className='self-center ms-5 font-semibold text-blue-900'>World Wide Shipping</p></Link>
            </div>

            <div className='self-center'>
                <ul className="grid grid-cols-3 col-span-1 self-center">
                    <li className="justify-self-start sm:justify-self-end pl-0 font-semibold text-gray-400 hover:text-blue-700">
                        <NavLink to='/About' className={({isActive})=> `${isActive&&"text-blue-700"}`}>About</NavLink>
                    </li>
                    <li className="justify-self-start sm:justify-self-center font-semibold  text-gray-400 hover:text-blue-700">
                        <NavLink to='/' className={({isActive})=> `${isActive&&"text-blue-700"} `}>Home</NavLink>
                    </li>
                    <li className="justify-self-start sm:justify-self-start font-semibold  text-gray-400 hover:text-blue-700">
                        <NavLink to='/Services' className={({isActive})=> `${isActive&&"text-blue-700 "}`}>Services</NavLink>
                    </li>
                </ul>
            </div>
            

            <div className='grid grid-cols-2 col-span-1 justify-self-end sm:justify-self-center self-center'>
                <p className='self-center justify-self-center font-semibold text-blue-700 hover:text-orange-500'><NavLink className={({isActive})=>`${isActive&&"border-b-4 border-blue-500 pb-3.5 px-2"}`} to="/Login">Login</NavLink></p>
                <button className=" bg-blue-500 text-white ps-4 pe-4 p-1.5 rounded-md shadow-md shadow-gray-400  hover:bg-blue-600">
                    <Link to="/Contact">Sign Up</Link>
                </button>
            </div>
            
        </nav>
    </div>
  )
}

export default Header