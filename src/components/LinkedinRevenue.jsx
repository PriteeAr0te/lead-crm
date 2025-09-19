import React from 'react'
import Chat from '../assets/img/chat.png'
import CRMFlow from '../assets/img/crm-flow.png'
import Button2 from './Button2'

const LinkedinRevenue = () => {
    return (
        <section className='w-full bg-[#EAEFFA] py-12 relative mt-4'>

            <div className='w-full flex flex-col justify-center items-center max-w-7xl px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-10'>
                <h2 className='text-accent z-40 text-3xl sm:text-4xl font-bold text-left'>
                    Join Thousands of Professionals Using LeadCRM
                </h2>
            </div>

            <div className='w-full h-full flex justify-center items-center mt-8'>
                <div className='w-full max-w-7xl rounded-lg mx-auto background-img min-h-[400px] relative'>
                    <h2 className='text-white z-40 text-xl sm:text-3xl md:text-4xl font-bold text-center absolute top-6 lg:top-10 inset-0'>
                        Your LinkedIn Powerhouse for Smarter Lead Management
                    </h2>
                </div>
            </div>

            <div className='w-full flex justify-center items-center mt-10'>
                <Button2 text="Get Started " arrow={true} />
            </div>
        </section>
    )
}

export default LinkedinRevenue