import shipLogo from '../Header/navbar_logo.jpg';


const Footer = () => {
  return (
    <footer className=" p-2">
      <div className="border  rounded-md shadow-md shadow-gray-400 p-2">

        <div className="border-b grid grid-cols-2 sm:ms-52 sm:me-52">

            <div className="justify-self-start">
              <img className='max-h-28' src={shipLogo} ></img>
            </div>

            <div className="justify-self-start">

              <div>Fuzail</div>
              <div>Fuzail</div>
              <div>Fuzail</div>
              
            </div>

        </div>

        <div>Khan</div>

      </div>
    </footer>
  )
}

export default Footer