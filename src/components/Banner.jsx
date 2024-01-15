import React from 'react'
import image from '../assets/logo.jpg'
import pic from '../assets/images/Vaishnavi-pic.jpg'

//bg-base-200 :
function Banner() {
    return (
        <div id='home' className='mb-20 mt-20'>
            <div className='grid w-full place-items-center bg-cover col-start-1 row-start-1 bg-center  py-10'>
                <div className='z-0 flex items-center justify-around max-w-screen-xl gap-4 p-4 flex-col lg:flex-row-reverse'>
                    <img src={pic} alt="" className='w-3/4 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4 rounded-full shadow-2xl' />
                    <div>
                        <h1 className='font-sans md:text-5xl lg:text-5xl sm:text-3xl'>Hi!<br></br> I am{" "}<span className=' text-orange-500 font-bold font-serif'>Vaishnavi Nagrale</span></h1>
                        <p className='py-6 text-md lg:text-lg md:text-lg xl:text-xl'>
                        I specialize in crafting robust and dynamic applications,<br/> both for the web and mobile platforms, to bring<br/> your ideas to life with innovation and expertise.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner