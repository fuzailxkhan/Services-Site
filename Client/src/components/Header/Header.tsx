import shipLogo from './navbar_logo.jpg';
import {Link,NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div>
        <nav className="min-h-10 grid grid-cols-2 border border-cyan-800 p-2 sm:grid-cols-3">

            <div className="col-span-1 justify-self-center  self-center hidden sm:block">
                <img className="max-h-10 m-0 " src={shipLogo} />
            </div>

            <ul className="grid grid-cols-3 col-span-1 self-center">
                <li className="justify-self-start sm:justify-self-end font-semibold text-gray-400">
                    <NavLink to='/Home' className={({isActive})=>` ${isActive?"text-blue-500":"text-gray-400"}}`}>Home</NavLink>
                </li>
                <li className="justify-self-start sm:justify-self-center font-semibold  text-gray-400">
                    Services
                </li>
                <li className="justify-self-start sm:justify-self-start font-semibold  text-gray-400">
                    Pricing
                </li>
            </ul>

            <button className="col-span-1 justify-self-end sm:justify-self-center bg-violet-500 text-white ps-4 pe-4 rounded-md ">
                 Contact 
            </button>

        </nav>
    </div>
  )
}

export default Header