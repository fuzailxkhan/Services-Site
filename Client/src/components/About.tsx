import ship1 from "../assets/Ship1.jpg";
import ship2 from "../assets//ship3.jpg";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-10 text-center">World Wide Shipping Limited</h1>
      <div className="flex flex-col md:flex-row mb-8">
        <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
          <img src={ship1} alt="Shipping Company 1" className="rounded-lg shadow-lg"/>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">About Us</h2>
          <p className="mb-4">Founded in 1927, Our Shipping Company has been a leader in the industry for over 100 years. We specialize in providing reliable and efficient shipping solutions for businesses of all sizes.</p>
          <p className="mb-4">Our mission is to deliver goods safely and on time, every time. With a fleet of modern vessels and a team of experienced professionals, we ensure that your cargo reaches its destination securely and efficiently.</p>
          <p className="mb-4">We offer a wide range of services, including sea freight, air freight, warehousing, and logistics solutions. Our commitment to excellence and customer satisfaction sets us apart from the competition.</p>
          <p className="mb-4">At Our Shipping Company, we believe in sustainability and environmental responsibility. We strive to minimize our carbon footprint and promote eco-friendly practices in all aspects of our operations.</p>
          <p className="mb-4">Whether you're shipping goods locally or internationally, you can trust Our Shipping Company to deliver your cargo with care and professionalism. Contact us today to learn more about our services and how we can help your business succeed.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 order-last md:pl-4 mb-4 md:mb-0">
          <img src={ship2} alt="Shipping Company 2" className="rounded-lg shadow-lg"/>
        </div>
        <div className="md:w-1/2 order-first">
          <h2 className="text-2xl font-bold mb-2">Our Team</h2>
          <p className="mb-4">Meet the dedicated team behind Our Shipping Company, committed to providing you with the best shipping solutions.</p>
          <ul className="list-disc pl-5">
            <li className="mb-2">Sajid Taalpur - CEO</li>
            <li className="mb-2">Majid Angethi - Logistics Manager</li>
            <li className="mb-2">Sheikh Jabbar - Operations Director</li>
            <li className="mb-2">Haq Fareed - Customer Service Manager</li>
          </ul>
          <p>Our team is here to ensure that your shipping experience is smooth, efficient, and meets your expectations. Get in touch with us to learn more about how we can assist you.</p>
        </div>
      </div>
    </div>
  )
}

export default About