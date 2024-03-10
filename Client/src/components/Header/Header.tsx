

const Header = () => {
  return (
    <div>
        <nav className="min-h-10 grid grid-cols-2 border border-cyan-800 p-2 sm:grid-cols-3">

            <div className="col-span-1 justify-self-start ms-5 self-center hidden sm:block">Logo</div>

            <ul className="grid grid-cols-3 col-span-1 self-center sm:ps-32 sm:pe-32">
                <li className="justify-self-center">
                    Home
                </li>
                <li className="justify-self-center">
                    Services
                </li>
                <li className="justify-self-center">
                    Pricing
                </li>
            </ul>

            <button className="col-span-1 justify-self-end me-5 bg-cyan-400 p-2 rounded-md">
                Contact
            </button>

        </nav>
    </div>
  )
}

export default Header