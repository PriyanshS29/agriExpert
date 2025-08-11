// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'
// import { assets } from '../assets/assets'
// import RelatedDoctors from '../components/RelatedDoctors'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const Appointment = () => {

//     const { docId } = useParams()
//     const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext)
//     const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

//     const [docInfo, setDocInfo] = useState(false)
//     const [docSlots, setDocSlots] = useState([])
//     const [slotIndex, setSlotIndex] = useState(0)
//     const [slotTime, setSlotTime] = useState('')

//     const navigate = useNavigate()

//     const fetchDocInfo = async () => {
//         const docInfo = doctors.find((doc) => doc._id === docId)
//         setDocInfo(docInfo)
//     }

//     const getAvailableSolts = async () => {

//         setDocSlots([])

//         // getting current date
//         let today = new Date()

//         for (let i = 0; i < 7; i++) {

//             // getting date with index 
//             let currentDate = new Date(today)
//             currentDate.setDate(today.getDate() + i)

//             // setting end time of the date with index
//             let endTime = new Date()
//             endTime.setDate(today.getDate() + i)
//             endTime.setHours(21, 0, 0, 0)

//             // setting hours 
//             if (today.getDate() === currentDate.getDate()) {
//                 currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
//                 currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
//             } else {
//                 currentDate.setHours(10)
//                 currentDate.setMinutes(0)
//             }

//             let timeSlots = [];


//             while (currentDate < endTime) {
//                 let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//                 let day = currentDate.getDate()
//                 let month = currentDate.getMonth() + 1
//                 let year = currentDate.getFullYear()

//                 const slotDate = day + "_" + month + "_" + year
//                 const slotTime = formattedTime

//                 const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true

//                 if (isSlotAvailable) {

//                     // Add slot to array
//                     timeSlots.push({
//                         datetime: new Date(currentDate),
//                         time: formattedTime
//                     })
//                 }

//                 // Increment current time by 30 minutes
//                 currentDate.setMinutes(currentDate.getMinutes() + 30);
//             }

//             setDocSlots(prev => ([...prev, timeSlots]))

//         }

//     }

//     const bookAppointment = async () => {

//         if (!token) {
//             toast.warning('Login to book appointment')
//             return navigate('/login')
//         }

//         const date = docSlots[slotIndex][0].datetime

//         let day = date.getDate()
//         let month = date.getMonth() + 1
//         let year = date.getFullYear()

//         const slotDate = day + "_" + month + "_" + year

//         try {

//             const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { docId, slotDate, slotTime }, { headers: { token } })
//             if (data.success) {
//                 toast.success(data.message)
//                 getDoctosData()
//                 navigate('/my-appointments')
//             } else {
//                 toast.error(data.message)
//             }

//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }

//     }

//     useEffect(() => {
//         if (doctors.length > 0) {
//             fetchDocInfo()
//         }
//     }, [doctors, docId])

//     useEffect(() => {
//         if (docInfo) {
//             getAvailableSolts()
//         }
//     }, [docInfo])

//     return docInfo ? (
//         <div>

//             {/* ---------- Doctor Details ----------- */}
//             <div className='flex flex-col sm:flex-row gap-4'>
//                 <div>
//                     <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
//                 </div>

//                 <div className='flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>

//                     {/* ----- Doc Info : name, degree, experience ----- */}

//                     <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>
//                     <div className='flex items-center gap-2 mt-1 text-gray-600'>
//                         <p>{docInfo.degree} - {docInfo.speciality}</p>
//                         <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
//                     </div>

//                     {/* ----- Doc About ----- */}
//                     <div>
//                         <p className='flex items-center gap-1 text-sm font-medium text-[#262626] mt-3'>About <img className='w-3' src={assets.info_icon} alt="" /></p>
//                         <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{docInfo.about}</p>
//                     </div>

//                     <p className='text-gray-600 font-medium mt-4'>Appointment fee: <span className='text-gray-800'>{currencySymbol}{docInfo.fees}</span> </p>
//                 </div>
//             </div>

//             {/* Booking slots */}
//             <div className='sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]'>
//                 <p >Booking slots</p>
//                 <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
//                     {docSlots.length && docSlots.map((item, index) => (
//                         <div onClick={() => setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-[#DDDDDD]'}`}>
//                             <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
//                             <p>{item[0] && item[0].datetime.getDate()}</p>
//                         </div>
//                     ))}
//                 </div>

//                 <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
//                     {docSlots.length && docSlots[slotIndex].map((item, index) => (
//                         <p onClick={() => setSlotTime(item.time)} key={index} className={`text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-[#949494] border border-[#B4B4B4]'}`}>{item.time.toLowerCase()}</p>
//                     ))}
//                 </div>

//                 <button onClick={bookAppointment} className='bg-primary text-white text-sm font-light px-20 py-3 rounded-full my-6'>Book an appointment</button>
//             </div>

//             {/* Listing Releated Doctors */}
//             <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
//         </div>
//     ) : null
// }

// export default Appointment

// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'
// import { assets } from '../assets/assets'
// import RelatedDoctors from '../components/RelatedDoctors'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const Appointment = () => {
//     const { docId } = useParams()
//     const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext)
//     const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
//     const [docInfo, setDocInfo] = useState(false)
//     const [docSlots, setDocSlots] = useState([])
//     const [slotIndex, setSlotIndex] = useState(0)
//     const [slotTime, setSlotTime] = useState('')
//     const navigate = useNavigate()

//     const fetchDocInfo = async () => {
//         const docInfo = doctors.find((doc) => doc._id === docId)
//         setDocInfo(docInfo)
//     }

//     const getAvailableSolts = async () => {
//         setDocSlots([])

//         let today = new Date()

//         for (let i = 0; i < 7; i++) {
//             let currentDate = new Date(today)
//             currentDate.setDate(today.getDate() + i)

//             let endTime = new Date()
//             endTime.setDate(today.getDate() + i)
//             endTime.setHours(21, 0, 0, 0)

//             if (today.getDate() === currentDate.getDate()) {
//                 currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
//                 currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
//             } else {
//                 currentDate.setHours(10)
//                 currentDate.setMinutes(0)
//             }

//             let timeSlots = []

//             while (currentDate < endTime) {
//                 let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

//                 let day = currentDate.getDate()
//                 let month = currentDate.getMonth() + 1
//                 let year = currentDate.getFullYear()

//                 const slotDate = day + "_" + month + "_" + year
//                 const slotTime = formattedTime

//                 const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true

//                 if (isSlotAvailable) {
//                     timeSlots.push({
//                         datetime: new Date(currentDate),
//                         time: formattedTime
//                     })
//                 }

//                 currentDate.setMinutes(currentDate.getMinutes() + 30)
//             }

//             setDocSlots(prev => ([...prev, timeSlots]))
//         }
//     }

//     const bookAppointment = async () => {
//         if (!token) {
//             toast.warning('Login to book appointment')
//             return navigate('/login')
//         }

//         const date = docSlots[slotIndex][0].datetime
//         let day = date.getDate()
//         let month = date.getMonth() + 1
//         let year = date.getFullYear()

//         const slotDate = day + "_" + month + "_" + year

//         try {
//             const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { docId, slotDate, slotTime }, { headers: { token } })
//             if (data.success) {
//                 toast.success(data.message)
//                 getDoctosData()
//                 navigate('/my-appointments')
//             } else {
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }

//     useEffect(() => {
//         if (doctors.length > 0) {
//             fetchDocInfo()
//         }
//     }, [doctors, docId])

//     useEffect(() => {
//         if (docInfo) {
//             getAvailableSolts()
//         }
//     }, [docInfo])

//     return docInfo ? (
//         <div className="bg-gray-100 min-h-screen py-8">

//             {/* ---------- Doctor Details ----------- */}
//             <div className="flex flex-col sm:flex-row gap-6 bg-white rounded-xl shadow-lg p-6 mb-8 mx-4 sm:mx-auto">

//                 <div className="w-full sm:w-1/3">
//                     <img className="w-full h-auto rounded-xl shadow-md" src={docInfo.image} alt="" />
//                 </div>

//                 <div className="flex-1 space-y-4">
//                     <p className="text-2xl font-semibold text-gray-700 flex items-center gap-2">{docInfo.name} <img className="w-5" src={assets.verified_icon} alt="" /></p>
//                     <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <p>{docInfo.degree} - {docInfo.speciality}</p>
//                         <button className="py-1 px-2 border text-xs rounded-full bg-gray-200">{docInfo.experience}</button>
//                     </div>

//                     <div className="mt-4">
//                         <p className="text-sm text-gray-600 font-medium">About</p>
//                         <p className="text-sm text-gray-600">{docInfo.about}</p>
//                     </div>

//                     <p className="text-lg font-medium text-gray-800">Appointment fee: <span className="font-semibold">{currencySymbol}{docInfo.fees}</span></p>
//                 </div>
//             </div>

//             {/* Booking Slots */}
//             <div className="mx-4 sm:mx-24 bg-white rounded-lg shadow-md p-6">
//                 <p className="text-xl font-semibold text-gray-800 mb-4">Choose a booking slot</p>

//                 <div className="flex gap-4 overflow-x-auto mb-4">
//                     {docSlots.length && docSlots.map((item, index) => (
//                         <div onClick={() => setSlotIndex(index)} key={index} className={`text-center py-4 min-w-[80px] rounded-xl cursor-pointer ${slotIndex === index ? 'bg-black text-white' : 'border border-gray-300 hover:bg-gray-100'}`}>
//                             <p className="font-semibold">{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
//                             <p>{item[0] && item[0].datetime.getDate()}</p>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="flex gap-3 overflow-x-auto mb-4">
//                     {docSlots.length && docSlots[slotIndex].map((item, index) => (
//                         <p onClick={() => setSlotTime(item.time)} key={index} className={`text-sm font-medium px-6 py-3 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-black text-white' : 'border border-gray-300 hover:bg-gray-200'}`}>{item.time.toLowerCase()}</p>
//                     ))}
//                 </div>

//                 <button onClick={bookAppointment} className="bg-black text-white text-lg font-semibold py-3 px-12 rounded-full w-full mt-4 transition-transform transform hover:scale-105">
//                     Book Appointment
//                 </button>
//             </div>

//             {/* Listing Related Doctors */}
//             <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
//         </div>
//     ) : null
// }

// export default Appointment

import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedExperts from '../components/RelatedExperts'
import axios from 'axios'
import { toast } from 'react-toastify'

const Appointment = () => {
    const { expId } = useParams()
    const { experts, currencySymbol, backendUrl, token, getExposData } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const [expInfo, setExpInfo] = useState(false)
    const [expSlots, setExpSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')
    const navigate = useNavigate()

    const fetchExpInfo = async () => {
        const expInfo = experts.find((exp) => exp._id === expId)
        setExpInfo(expInfo)
    }

    const getAvailableSolts = async () => {
        setExpSlots([])

        let today = new Date()

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }

            let timeSlots = []

            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

                let day = currentDate.getDate()
                let month = currentDate.getMonth() + 1
                let year = currentDate.getFullYear()

                const slotDate = day + "_" + month + "_" + year
                const slotTime = formattedTime

                const isSlotAvailable = expInfo.slots_booked[slotDate] && expInfo.slots_booked[slotDate].includes(slotTime) ? false : true

                if (isSlotAvailable) {
                    timeSlots.push({
                        datetime: new Date(currentDate),
                        time: formattedTime
                    })
                }

                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }

            setExpSlots(prev => ([...prev, timeSlots]))
        }
    }

    const bookAppointment = async () => {
        if (!token) {
            toast.warning('Login to book appointment')
            return navigate('/login')
        }

        const date = expSlots[slotIndex][0].datetime
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        const slotDate = day + "_" + month + "_" + year

        try {
            const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { expId, slotDate, slotTime }, { headers: { token } })
            if (data.success) {
                toast.success(data.message)
                getExposData()
                navigate('/my-appointments')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (experts.length > 0) {
            fetchExpInfo()
        }
    }, [experts, expId])

    useEffect(() => {
        if (expInfo) {
            getAvailableSolts()
        }
    }, [expInfo])

    return expInfo ? (
        <div className="bg-gray-100 min-h-screen py-8">

            {/* ---------- Doctor Details ----------- */}
            <div className="flex flex-col sm:flex-row gap-6 bg-white rounded-xl shadow-lg p-6 mb-8 mx-4 sm:mx-auto">

                <div className="w-full sm:w-1/3">
                    <img className="w-full h-auto rounded-xl shadow-md" src={expInfo.image} alt="" />
                </div>

                <div className="flex-1 space-y-4">
                    <p className="text-2xl font-semibold text-gray-700 flex items-center gap-2">{expInfo.name} <img className="w-5" src={assets.verified_icon} alt="" /></p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <p>{expInfo.degree} - {expInfo.speciality}</p>
                        <button className="py-1 px-2 border text-xs rounded-full bg-gray-200">{expInfo.experience}</button>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm text-gray-600 font-medium">About</p>
                        <p className="text-sm text-gray-600">{expInfo.about}</p>
                    </div>

                    <p className="text-lg font-medium text-gray-800">Appointment fee: <span className="font-semibold">{currencySymbol}{expInfo.fees}</span></p>
                </div>
            </div>

            {/* Booking Slots */}
            <div className="mx-4 sm:mx-24 bg-white rounded-lg shadow-md p-6">
                <p className="text-xl font-semibold text-gray-800 mb-4">Choose a booking slot</p>

                <div className="flex gap-4 overflow-x-auto mb-4">
                    {expSlots.length && expSlots.map((item, index) => (
                        <div onClick={() => setSlotIndex(index)} key={index} className={`text-center py-4 min-w-[80px] rounded-xl cursor-pointer ${slotIndex === index ? 'bg-black text-white' : 'border border-gray-300 hover:bg-gray-100'}`}>
                            <p className="font-semibold">{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                            <p>{item[0] && item[0].datetime.getDate()}</p>
                        </div>
                    ))}
                </div>

                <div className="flex gap-3 overflow-x-auto mb-4">
                    {expSlots.length && expSlots[slotIndex].map((item, index) => (
                        <p onClick={() => setSlotTime(item.time)} key={index} className={`text-sm font-medium px-6 py-3 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-black text-white' : 'border border-gray-300 hover:bg-gray-200'}`}>{item.time.toLowerCase()}</p>
                    ))}
                </div>

                <button onClick={bookAppointment} className="bg-black text-white text-lg font-semibold py-3 px-12 rounded-full w-full mt-4 transition-transform transform hover:scale-105">
                    Book Appointment
                </button>
            </div>

            {/* Listing Related Experts */}
            <RelatedExperts speciality={expInfo.speciality} expId={expId} />
        </div>
    ) : null
}

export default Appointment
