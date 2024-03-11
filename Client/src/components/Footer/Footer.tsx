import shipLogo from '../Header/navbar_logo.jpg';


const Footer = () => {
  return (
    <footer className="p-2">
      <div className="border  rounded-lg shadow-xl p-2 pt-5 pb-3">
        <div className='sm:ms-6 sm:me-6 md:ms-10 md:me-10 lg:ms-24 lg:me-24 xl:ms-52 xl:me-52'>
            <div className="border-b grid grid-cols-1 sm:grid-cols-2 pb-5 pt-3">

              <div className="md:justify-self-start sm:block hidden sm:justify-self-start">
                <img className='max-h-28' src={shipLogo} ></img>
              </div>

              <div className="justify-self-start sm:justify-self-center grid grid-cols-2 sm:grid-cols-3 gap-y-5 sm:gap-10 w-full sm:w-auto">

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

            <div className='grid grid-cols-2 pt-3 pb-1 border-b'>

              <div className='justify-self-start ps-4 grid-span-1 sm:flex'>
                <p>©Fuzail Khan &nbsp;</p>
                <p>All Rights Reserved</p> 
              </div>

              <div className='justify-self-end pe-5 grid-span-1 flex gap-5'>
                <svg className="w-4 h-4 self-center mt-1 fill-slate-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                </svg>
                <svg className="w-4 h-4 self-center mt-1 fill-slate-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                <i className='fa fa-instagram self-center fill-slate-500 text-lg mt-1'></i>
              </div>
            
            </div>
        </div>
        

      </div>
    </footer>
  )
}

export default Footer