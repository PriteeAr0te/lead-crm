import React from 'react'
import ArrowBG from '../assets/img/bg-arrows.png'
import InstallExtension from '../assets/img/install-extension.png'
import BrowseLinkedIn from '../assets/img/browse-linkedin.png'
import GetData from '../assets/img/get-data.png'
import SyncCrm from '../assets/img/sync-crm.png'
import Button2 from './Button2'
import BallShape from '../assets/img/ball-shape.png'

const HowWorks = () => {
    return (
        <section className='w-full h-full px-3 sm:px-5 md:px-10 mx-auto border-t border-[#F1F1F1] py-12 bg-[#EAEFFA] relative'>
            <h2 className='text-accent text-3xl sm:text-4xl font-bold mb-2'>
                How it Works
            </h2>
            <p className='text-[#4C4C4C]'>From setup to success in <strong>4 simple steps</strong></p>

            <div className='w-full max-w-7xl mx-auto relative mt-2'>
                <img className='inline-flex -translate-y-2' src={ArrowBG} alt="arrow-bg" />
                <div className='bg-transparent w-full h-full gap-6 inline-flex -translate-y-30 items-stretch justify-center'>
                    <div className='bg-white rounded-lg p-4 border-2 border-white hover:border-[#2D96BC] hover:translate-y-[-4px] transition-all duration-500 hover:shadow-md max-w-[290px] space-y-3'>
                        <h2 className='text-[84px] leading-[84px] font-caveat text-center font-[1000] text-primary'>1</h2>
                        <h3 className='text-2xl text-accent ont-semibold text-center'>
                            Install the Extension
                        </h3>
                        <p className='text-para opacity-85 text-center text-sm'>
                            Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.
                        </p>

                        <img src={InstallExtension} alt="install extension" />

                    </div>
                    <div className='bg-white rounded-lg p-4 border-2 border-white hover:border-[#2D96BC] hover:translate-y-[-4px] transition-all duration-500 hover:shadow-md max-w-[290px] space-y-3'>
                        <h2 className='text-[84px] leading-[84px] font-caveat text-center font-[1000] text-primary'>2</h2>
                        <h3 className='text-2xl text-accent ont-semibold text-center'>
                            Browse LinkedIn
                        </h3>
                        <p className='text-para opacity-85 text-center text-sm'>
                            Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.
                        </p>

                        <img src={BrowseLinkedIn} alt="Browse LinkedIn" />

                    </div>
                    <div className='bg-white rounded-lg p-4 border-2 border-white hover:border-[#2D96BC] hover:translate-y-[-4px] transition-all duration-500 hover:shadow-md max-w-[290px] space-y-3'>
                        <h2 className='text-[84px] leading-[84px] font-caveat text-center font-[1000] text-primary'>3</h2>
                        <h3 className='text-2xl text-accent ont-semibold text-center'>
                            Get Enriched Data
                        </h3>
                        <p className='text-para opacity-85 text-center text-sm'>
                            Enrich profiles with verified emails, phones, and company data with
                            95%+ accuracy guaranteed.
                        </p>

                        <img src={GetData} alt="Get Data" />

                    </div>
                    <div className='bg-white rounded-lg p-4 border-2 border-white hover:border-[#2D96BC] hover:translate-y-[-4px] transition-all duration-500 hover:shadow-md max-w-[290px] space-y-3'>
                        <h2 className='text-[84px] leading-[84px] font-caveat text-center font-[1000] text-primary'>4</h2>
                        <h3 className='text-2xl text-accent ont-semibold text-center'>
                            Sync to CRM Instantly
                        </h3>
                        <p className='text-para opacity-85 text-center text-sm'>
                            Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow  ups.
                        </p>

                        <img src={SyncCrm} alt="Sync to CRM Instantly" />

                    </div>
                </div>
            </div>

            <div className='w-full h-full inline-flex translate-y-[-50px] justify-center items-center'>
                <Button2 text="Try LeadCRM Now" arrow={true} />
            </div>

            <div className='absolute right-2 -bottom-12'>
                <img src={BallShape} alt="ball-shape" />
            </div>
        </section>
    )
}

export default HowWorks