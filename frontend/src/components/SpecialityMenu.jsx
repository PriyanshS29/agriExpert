// import React from 'react'
// import { specialityData } from '../assets/assets'
// import { Link } from 'react-router-dom'

// const SpecialityMenu = () => {
//     return (
//         <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
//             <h1 className='text-3xl font-medium'>Find by Speciality</h1>
//             <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
//             <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
//                 {specialityData.map((item, index) => (
//                     <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index}>
//                         <img className='w-16 sm:w-24 mb-2 ' src={item.image} alt="" />
//                         <p>{item.speciality}</p>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default SpecialityMenu

// import React from 'react';
// import { specialityData } from '../assets/assets'; // Assuming data has gardening-related info
// import { Link } from 'react-router-dom';

// const SpecialityMenu = () => {
//     return (
//         <div id='speciality' className='flex flex-col items-center gap-8 py-16 bg-gray-100 rounded-lg px-6 md:px-10 lg:px-20 shadow-lg mt-16'>
//             <h1 className='text-4xl md:text-5xl lg:text-6xl text-gray-800 font-bold leading-tight'>Find by Speciality</h1>
//             <p className='text-4xl md:text-5xl lg:text-2xl text-gray-800 leading-tight'>
//                 Explore our trusted specialists for home gardening, pest control, irrigation systems, and more.
//             </p>
//             <div className='flex sm:justify-center gap-6 pt-8 w-full overflow-x-auto'>
//                 {specialityData.map((item, index) => (
//                     <Link 
//                         to={`/experts/${item.speciality}`} 
//                         onClick={() => scrollTo(0, 0)} 
//                         className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:scale-110 transition-all duration-300'
//                         key={index}
//                     >
//                         <img 
//                             className='w-20 sm:w-28 mb-3 rounded-full border-2 border-gray-300' 
//                             src={item.image} 
//                             alt={item.speciality} 
//                         />
//                         <p className='text-sm font-medium text-gray-800'>{item.speciality}</p>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default SpecialityMenu;

import React from 'react';
import { specialityData } from '../assets/assets'; 
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SpecialityMenu = () => {
    return (
        <div 
            id='speciality' 
            className='flex flex-col items-center gap-8 py-16 bg-gray-100 rounded-lg px-6 md:px-10 lg:px-20 shadow-lg mt-16'
        >
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-gray-800 font-bold leading-tight'>
                Find by Speciality
            </h1>
            <p className='text-4xl md:text-5xl lg:text-2xl text-gray-800 leading-tight'>
                Explore our trusted specialists for home gardening, pest control, irrigation systems, and more.
            </p>

            {/* Speciality List with Scroll Animation */}
            <div className='flex sm:justify-center gap-6 pt-8 w-full overflow-x-auto'>
                {specialityData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}  // Start position (hidden, slightly below)
                        whileInView={{ opacity: 1, y: 0 }}  // Become visible when scrolled into view
                        transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered animation
                        viewport={{ once: true, amount: 0.2 }} // Ensures animation plays only once
                    >
                        <Link 
                            to={`/experts/${item.speciality}`} 
                            onClick={() => scrollTo(0, 0)} 
                            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:scale-110 transition-all duration-300'
                        >
                            <img 
                                className='w-20 sm:w-28 mb-3 rounded-full border-2 border-gray-300' 
                                src={item.image} 
                                alt={item.speciality} 
                            />
                            <p className='text-sm font-medium text-gray-800'>{item.speciality}</p>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default SpecialityMenu;

