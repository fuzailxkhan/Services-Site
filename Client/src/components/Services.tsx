import seaFreightImage from '../assets/seaFreight.png';
import airFreightImage from '../assets/airFreight.jpg';
import warehousingImage from '../assets/warehousingImage.jpg';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg p-8 rounded">
          <img src={seaFreightImage} alt="Sea Freight" className="mb-4 rounded-lg" />
          <h3 className="text-xl font-bold mb-4">Sea Freight</h3>
          <p className="text-gray-700">We offer reliable and cost-effective sea freight services for your cargo, whether it's large or small. Our experienced team ensures that your goods are delivered safely and on time.</p>
        </div>
        <div className="bg-white shadow-lg p-8 rounded">
          <img src={airFreightImage} alt="Air Freight" className="mb-4 rounded-lg" />
          <h3 className="text-xl font-bold mb-4">Air Freight</h3>
          <p className="text-gray-700">With our air freight services, your cargo will reach its destination quickly and efficiently, no matter the distance. We prioritize speed and reliability to meet your shipping needs.</p>
        </div>
        <div className="bg-white shadow-lg p-8 rounded">
          <img src={warehousingImage} alt="Warehousing" className="mb-4 rounded-lg" />
          <h3 className="text-xl font-bold mb-4">Warehousing</h3>
          <p className="text-gray-700">Our warehousing services provide secure storage solutions for your goods, ensuring they are safe and easily accessible when needed. We offer flexible options to meet your storage needs.</p>
        </div>
      </div>
    </div>
  )
}

export default Services