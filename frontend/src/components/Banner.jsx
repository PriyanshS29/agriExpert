// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'

// const Banner = () => {

//     const navigate = useNavigate()

//     return (
//         <div className='flex bg-primary rounded-lg  px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>

//             {/* ------- Left Side ------- */}
//             <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
//                 <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
//                     <p>Book Appointment</p>
//                     <p className='mt-4'>With 100+ Trusted Doctors</p>
//                 </div>
//                 <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all '>Create account</button>
//             </div>

//             {/* ------- Right Side ------- */}
//             <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
//                 <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
//             </div>
//         </div>
//     )
// }

// export default Banner

// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'

// const Banner = () => {

//     const navigate = useNavigate()

//     return (
//         <div className='flex bg-gray-100 rounded-lg  px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 border-lg h-full'>

//             {/* ------- Left Side ------- */}
//             <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
//                 <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-gray-800 font-bold leading-tight'>
//                     <p>Book Appointment</p>
//                     <p className='mt-4'>With 100+ Trusted Experts</p>
//                 </div>
//                 <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='bg-primary text-sm sm:text-base text-[white] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all '>Create account</button>
//             </div>

//             {/* ------- Right Side ------- */}
//             <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
//                 <img className='w-full absolute left-10 right-0 max-w-md lg:w-[400px] h-full object-cover rounded-lg' src={assets.appointment_img} alt="" />
//             </div>
//         </div>
//     )
// }

// export default Banner

import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <motion.div 
            className='flex bg-gray-100 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 border-lg h-full'
            initial={{ opacity: 0, y: 50 }}  // Start hidden, slightly below
            whileInView={{ opacity: 1, y: 0 }}  // Slide in when scrolled into view
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% is visible
        >
            {/* ------- Left Side ------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-gray-800 font-bold leading-tight'>
                    <p>Book Appointment</p>
                    <p className='mt-4'>With 100+ Trusted Experts</p>
                </div>
                <motion.button 
                    onClick={() => { navigate('/login'); scrollTo(0, 0) }} 
                    className='bg-primary text-sm sm:text-base text-[white] px-8 py-3 rounded-full mt-6'
                    whileHover={{ scale: 1.05 }} // Slight hover effect
                    transition={{ duration: 0.2 }}
                >
                    Create account
                </motion.button>
            </div>

            {/* ------- Right Side ------- */}
            <motion.div 
                className='hidden md:block md:w-1/2 lg:w-[370px] relative'
                initial={{ opacity: 0, scale: 0.8 }}  // Start small and invisible
                whileInView={{ opacity: 1, scale: 1 }}  // Appear and expand when scrolled into view
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }} // Delayed effect for smoothness
                viewport={{ once: true, amount: 0.2 }}
            >
                <img 
                    className='w-full absolute left-10 right-0 max-w-md lg:w-[400px] h-full object-cover rounded-lg' 
                    src={assets.appointment_img} 
                    alt="Appointment"
                />
            </motion.div>
        </motion.div>
    )
}

export default Banner
