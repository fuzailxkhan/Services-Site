import shipLogo from './navbar_logo.jpg';
import {Link,NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div>
        <nav className="min-h-10 grid grid-cols-2 border border-cyan-800 p-2 sm:grid-cols-3">

            <div className="col-span-1 justify-self-center  self-center hidden sm:block">
                <Link to="/Home"><img className="max-h-10 m-0 " src={shipLogo} /></Link>
            </div>

            <ul className="grid grid-cols-3 col-span-1 self-center">
                <li className="justify-self-start sm:justify-self-end font-semibold text-gray-400">
                    <NavLink to='/Home' className={({isActive})=> `${isActive&&"text-blue-700"}`}>Home</NavLink>
                </li>
                <li className="justify-self-start sm:justify-self-center font-semibold  text-gray-400">
                    <NavLink to='/Services' className={({isActive})=> `${isActive&&"text-blue-700"}`}>Services</NavLink>
                </li>
                <li className="justify-self-start sm:justify-self-start font-semibold  text-gray-400">
                    <NavLink to='/Pricing' className={({isActive})=> `${isActive&&"text-blue-700"}`}>Pricing</NavLink>
                </li>
            </ul>

            <div className='grid grid-cols-2 col-span-1 justify-self-end sm:justify-self-center self-center'>
                <p className='self-center justify-self-center font-semibold text-blue-700'><Link to="/Login">Login</Link></p>
                <button className=" bg-violet-500 text-white ps-4 pe-4 p-1 rounded-md ">
                    <Link to="/Contact">Contact Us</Link>
                </button>
            </div>
            
            

        </nav>
    </div>
  )
}

export default Header