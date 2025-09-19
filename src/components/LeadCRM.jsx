import React from 'react'
import Chat from '../assets/img/chat.png'
import CRMFlow from '../assets/img/crm-flow.png'
import Button2 from './Button2'

const LeadCRM = () => {
    return (
        <section className='w-full py-12 relative mt-10'>
            <div className='absolute -top-12 inset-2/3 w-full h-full'>
                <img src={Chat} alt="chat" className='opacity-100' />
            </div>

            <div className='w-full flex flex-col justify-center items-center'>
                <h2 className='text-accent z-40 text-3xl sm:text-4xl font-bold mb-2 text-center'>
                    Our Supported LeadCRM
                </h2>
                <p className='text-[#4C4C4C] text-center mb-6 w-full sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[55%] 2xl:w-[45%]'>LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. We don’t want you to miss any revenue opportunity on the internet!</p>
            </div>

            <div className='w-full flex flex-col justify-center items-center px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-10'>
                <img src={CRMFlow} alt="crm-flow" />
            </div>

            <div className='w-full flex justify-center items-center mt-6'>
                <Button2 text="Lets Integrate your CRM Now!" />
            </div>
        </section>
    )
}

export default LeadCRM