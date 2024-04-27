import seaFreightImage from '../assets/seaFreight.png';
import airFreightImage from '../assets/airFreight.jpg';
import warehousingImage from '../assets/warehousingImage.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Welcome to Our Shipping Company</h1>
          <p className="text-lg mb-8">We are a leading shipping company with a focus on delivering your cargo safely and efficiently. Our experienced team and modern fleet ensure that your goods are in good hands.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to='/Services'>Get Started</Link></button>
        </div>
      </section>
      <section className=" py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-8 rounded">
              <img src={seaFreightImage} alt="Sea Freight" className="mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-4">Sea Freight</h3>
              <p className="text-gray-700">Our sea freight services offer reliable and cost-effective shipping solutions for your cargo, whether it's large or small.</p>
            </div>
            <div className="bg-white shadow-lg p-8 rounded">
              <img src={airFreightImage} alt="Air Freight" className="mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-4">Air Freight</h3>
              <p className="text-gray-700">With our air freight services, your cargo will reach its destination quickly and efficiently, no matter the distance.</p>
            </div>
            <div className="bg-white shadow-lg p-8 rounded">
              <img src={warehousingImage} alt="Warehousing" className="mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-4">Warehousing</h3>
              <p className="text-gray-700">Our warehousing services provide secure storage solutions for your goods, ensuring they are safe and easily accessible when needed.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <p className="text-lg mb-8">We strive to exceed your expectations with our commitment to excellence and customer satisfaction. Here are a few reasons to choose us:</p>
          <ul className="list-disc pl-8">
            <li className="mb-2">Reliable and efficient shipping solutions</li>
            <li className="mb-2">Experienced professionals</li>
            <li className="mb-2">Wide range of services</li>
            <li className="mb-2">Commitment to excellence</li>
            <li className="mb-2">Environmental responsibility</li>
          </ul>
        </div>
      </section>
    </div>
      );
}

export default Home