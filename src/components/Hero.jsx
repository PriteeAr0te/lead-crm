import React from 'react'
import rocket from '../assets/img/rocket.png'
import Line1 from '../assets/img/line-1.png'
import Work1 from '../assets/img/work-1.png'
import Work2 from '../assets/img/work-2.png'
import Work3 from '../assets/img/work-3.png'
import Chrome from '../assets/img/chrome.png'
import Share from '../assets/img/share.png'
import { Star } from 'lucide-react'
import Chrome2 from '../assets/img/chrome-logo.png'
import Button2 from './Button2'

const Hero = () => {
    return (
        <section className='w-screen h-full bg-hero py-10 flex flex-col justify-center items-center mx-2 sm:mx-4 border-b border-[#F1F1F1]'>
            <div className='w-full max-w-5xl mx-auto flex flex-col gap-6 justify-center items-center'>
                <span className='w-fit px-2 py-1.5 flex gap-2 items-center rounded-lg border-primary text-subheading'>
                    <img src={rocket} alt="rocket" />
                    <span className='text-center'>Thousands of Professional using LeadCRM</span>
                </span>

                <h1 className='text-4xl sm:text-5xl font-semibold max-w-4xl leading-16 text-center text-heading'>
                    Linkedin CRM Integration <br /> Capture, Sync and Enrich in
                    <span className='relative text-primary ml-2'>
                        Both Ways
                        <img className='absolute -bottom-3 height-[20px] left-2' src={Line1} alt="line" />
                    </span>
                </h1>

                <p className='text-center text-lg text-para'>
                    Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on LinkedIn profiles. <br /> Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.
                </p>

                <div className='px-4 py-2 hero-gradient rounded-lg flex gap-6 justify-between items-center'>
                    <span className='z-30 text-para'>Works with </span>
                    <div className='flex gap-2 items-center z-30'>
                        <img src={Work1} width={55} alt="work" />
                        <img src={Work2} width={55} alt="work" />
                        <img src={Work3} width={55} alt="work" />
                    </div>
                </div>

                <div className='flex justify-center flex-wrap md:flex-nowrap md:justify-between gap-8 mt-3 items-center'>
                    <div className='flex gap-3 items-center'>
                        <span className='rounded-lg bg-white p-4'>
                            <img src={Chrome} className='' alt="chrome" />
                        </span>
                        <span className='flex gap-1.5 items-center'>
                            <Star size={20} className='fill-yellow-500 outline-0 ring-0 border-0' />
                            <Star size={20} className='fill-yellow-500 outline-0 ring-0 border-0' />
                            <Star size={20} className='fill-yellow-500 outline-0 ring-0 border-0' />
                            <Star size={20} className='fill-yellow-500 outline-0 ring-0 border-0' />
                            <Star size={20} className='fill-yellow-500 outline-0 ring-0 border-0' />

                            <span className='ml-2'>5/5</span>
                        </span>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <span className='rounded-lg bg-white p-4'>
                            <img src={Share} className='' alt="chrome" />
                        </span>
                        <span className='flex gap-1.5 items-center'>
                            <Star size={20} className='fill-yellow-500 outline-0 ring-0 border-0' />
                            <Star size={20} className='fill-yellow-500 outline-0 ring-0 border-0' />
                            <Star size={20} className='fill-yellow-500 outline-0 ring-0 border-0' />
                            <Star size={20} className='fill-yellow-500 outline-0 ring-0 border-0' />
                            <Star size={20} className='fill-yellow-500 outline-0 ring-0 border-0' />

                            <span className='ml-2'>5/5</span>
                        </span>
                    </div>
                </div>

                <div className='flex h-full items-stretch justify-center gap-6'>
                    <button className='rounded-lg px-4 py-3 flex gap-6 items-center text-white bg-[#373737]'>
                        <p className=''>
                            <span className='text-white/75'>Available in</span> <br />
                            <span>Chrome Web Store</span>
                        </p>

                        <span className='p-2 bg-white rounded-full'>
                            <img src={Chrome2} width={30} alt="chrome web store" />
                        </span>
                    </button>
                    <Button2 text=" Get a Free Trial Now!" />

                </div>
            </div>
        </section>
    )
}

export default Hero