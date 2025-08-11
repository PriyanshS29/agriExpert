// import React from 'react'
// import { assets } from '../assets/assets'

// const Header = () => {
//     return (
//         <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>

//             {/* --------- Header Left --------- */}
//             <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
//                 <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
//                     Book Appointment <br />  With Trusted Doctors
//                 </p>
//                 <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
//                     <img className='w-28' src={assets.group_profiles} alt="" />
//                     <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
//                 </div>
//                 <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
//                     Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
//                 </a>
//             </div>

//             {/* --------- Header Right --------- */}
//             <div className='md:w-1/2 relative'>
//                 <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
//             </div>
//         </div>
//     )
// }

// export default Header

// import React from 'react';
// import { assets } from '../assets/assets';

// const Header = () => {
//     return (
//         <div className="flex flex-col md:flex-row flex-wrap bg-gray-100 rounded-lg px-6 md:px-10 lg:px-20 shadow-lg">

//             {/* --------- Header Left --------- */}
//             <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 md:py-[8vw] text-center md:text-left">
//                 <p className="text-4xl md:text-5xl lg:text-6xl text-gray-800 font-bold leading-tight">
//                     Book Appointment <br /> With Trusted Experts
//                 </p>
//                 <div className="flex flex-col md:flex-row items-center gap-4 text-gray-600 text-base font-light">
//                     <img className="w-28 h-28 rounded-full border-2 border-gray-300" src={assets.group_profiles} alt="Gardener Profiles" />
//                     <p>Explore our extensive list of trusted gardening experts and schedule appointments effortlessly.</p>
//                 </div>
//                 <a 
//                     href="#speciality" 
//                     className="flex items-center gap-3 bg-blue-600 px-8 py-3 rounded-full text-white text-sm hover:bg-blue-700 transition-all duration-300">
//                     Book Appointment 
//                     <img className="w-3" src={assets.arrow_icon} alt="Arrow Icon" />
//                 </a>
//             </div>

//             {/* --------- Header Right --------- */}
//             <div className="md:w-1/2 relative">
//                 <img 
//                     className="w-full md:absolute top-10 right-0 h-auto rounded-lg shadow-md" 
//                     src={assets.header_img} 
//                     alt="Header Illustration" 
//                 />
//             </div>
//         </div>
//     );
// };

// export default Header;

import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row flex-wrap bg-gray-100 rounded-lg px-6 md:px-10 lg:px-20 shadow-lg">

            {/* --------- Header Left --------- */}
            <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 md:py-[8vw] text-center md:text-left">
                <p className="text-4xl md:text-5xl lg:text-6xl text-gray-800 font-bold leading-tight">
                    Book Appointment <br /> With Trusted Experts
                </p>
                <motion.div 
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                    className="flex flex-col md:flex-row items-center gap-4 text-gray-600 text-base font-light"
                >
                    <img className="w-28 h-28 rounded-full border-2 border-gray-300" src={assets.group_profiles} alt="Gardener Profiles" />
                    <p>Explore our extensive list of trusted gardening experts and schedule appointments effortlessly.</p>
                </motion.div>
                <a 
                    href="#speciality" 
                    className="flex items-center gap-3 bg-blue-600 px-8 py-3 rounded-full text-white text-sm hover:bg-blue-700 transition-all duration-300">
                    Book Appointment 
                    <img className="w-3" src={assets.arrow_icon} alt="Arrow Icon" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                className="md:w-1/2 relative"
            >
                <img 
                    className="w-full md:absolute top-10 right-0 h-auto rounded-lg shadow-md" 
                    src={assets.header_img} 
                    alt="Header Illustration" 
                />
            </motion.div>
        </div>
    );
};

export default Header;
