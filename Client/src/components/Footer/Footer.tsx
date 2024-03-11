import shipLogo from '../Header/navbar_logo.jpg';


const Footer = () => {
  return (
    <footer className="p-2">
      <div className="border  rounded-md shadow-md shadow-gray-400 p-2 pt-5">

        <div className="border-b grid grid-cols-1 sm:grid-cols-2 sm:ms-52 sm:me-52 pb-5 pt-3">

            <div className="justify-self-center sm:block hidden">
              <img className='max-h-28' src={shipLogo} ></img>
            </div>

            <div className="justify-self-center sm:flex gap-10 sm:gap-20">

              <div className='border-s ps-5'>
                <p className='font-semibold pb-2'>Resources</p>
                <p className='text-gray-500'>About</p>
                <p className='text-gray-500'>Home</p>
              </div>

              <div className='border-s ps-5'>
                <p className='font-semibold pb-2'>Follow Us</p>
                <p className='text-gray-500'>Facebook</p>
                <p className='text-gray-500'>Twitter</p>
              </div>

              <div className='border-s ps-5'>
                <p className='font-semibold pb-2'>Legal</p>
                <p className='text-gray-500'>Privacy Policy</p>
                <p className='text-gray-500'>Terms & Condition</p>
              </div>

            </div>

        </div>

        <div>Khan</div>

      </div>
    </footer>
  )
}

export default Footer