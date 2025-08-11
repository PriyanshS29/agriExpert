// import React from 'react'
// import { assets } from '../assets/assets'

// const Contact = () => {
//   return (
//     <div>

//       <div className='text-center text-2xl pt-10 text-[#707070]'>
//         <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
//       </div>

//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
//         <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
//         <div className='flex flex-col justify-center items-start gap-6'>
//           <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
//           <p className=' text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
//           <p className=' text-gray-500'>Tel: (415) 555-0132 <br /> Email: greatstackdev@gmail.com</p>
//           <p className=' font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
//           <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
//           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Contact
import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-12">

      {/* Contact Header */}
      <div className="text-center text-3xl font-bold text-[#4A4A4A]">
        <p>CONTACT <span className="text-gray-700">US</span></p>
      </div>

      {/* Contact Details */}
      <div className="my-12 flex flex-col md:flex-row gap-12 items-center justify-center">

        {/* Image */}
        <div className="animate__animated animate__fadeIn">
          <img className="rounded-lg shadow-lg w-full md:max-w-[400px]" src={assets.contact_image} alt="Contact Us" />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-lg text-gray-700 leading-relaxed">
          <p className="text-lg font-semibold text-gray-600">Get in Touch</p>
          <p className="opacity-100">We'd love to hear from you! Whether you have a question or need support, feel free to reach out to us directly.</p>
          
          {/* Phone and Email */}
          <div className="mt-6">
            <p className="font-semibold text-xl text-gray-800">Contact Details</p>
            <p className="opacity-100">Phone: (415) 555-0132</p>
            <p className="opacity-100">Email: greatstackdev@gmail.com</p>
          </div>

          {/* Button */}
          <div className="mt-6">
            <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded-lg shadow-lg hover:shadow-2xl">
              Send Us a Message
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
