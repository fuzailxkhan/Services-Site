

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 gap-5">
        <div className="lg:grid grid-cols-3"> 
          <div className="">
            <h2 className="text-xl font-bold mb-4">Our Office</h2>
            <p className="mb-2">Office# 304 DHA Phase II</p>
            <p className="mb-2">Karachi, Pakistan</p>
            <p className="mb-2">Postal: 74900</p>
            <p className="mb-4">Phone: 0312 4209211</p>
            <p className="mb-4">Email: wwslimited@gmail.com</p>
            
          </div>
          <div className="flex flex-col col-span-2">
            <iframe  className="w-full h-full flex-grow"    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.081437383463!2d67.02791197599011!3d24.895203643865198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ffc203d83a9%3A0x94364c6ca7ba9aa4!2sKarachi%20Trading%20company!5e0!3m2!1sen!2s!4v1710245539416!5m2!1sen!2s" loading="lazy" ></iframe>
          </div>
        </div>
        <div className="self-center justify-self-center min-w-96">
          <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-md py-2 px-3" />
            <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-md py-2 px-3" />
            <textarea placeholder="Your Message" rows={4} className="border border-gray-300 rounded-md py-2 px-3"></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact