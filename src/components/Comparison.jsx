import React from 'react';
import WithoutCRM from '../assets/img/without-crm.png'
import WithCRM from '../assets/img/with-crm.png'
import { X } from 'lucide-react';
import AI from '../assets/img/ai.png'
import Contacts from '../assets/img/contacts.png'
import CRM from '../assets/img/crm-overlay.png'
import Bidirectional from '../assets/img/bidirectional.png'
import Button2 from './Button2'
import Arrow from '../assets/img/arrow.png'

const Comparison = () => {
    return (
        <section className='w-full py-12 max-w-7xl mx-auto border-t border-[#F1F1F1]'>
            <h2 className='text-center text-4xl text-accent font-semibold'>
                Every LinkedIn Prospector faces these daily challenges
            </h2>

            <div className="w-full h-full flex flex-col lg:flex-row gap-4 justify-center items-center lg:items-stretch m-4 mt-8">

                <div className="bg-[#FFF7F8] rounded-lg shadow-lg p-4 mx-4 sm:mx-0 w-full sm:w-[70%] md:w-[60%] lg:w-[38%] border border-white hover:border-[#D24B68] transition-all duration-500 hover:shadow-lg shadow-black/20 hover:shadow-emerald-500/10 hover:translate-y-[-4px]">
                    <img src={WithoutCRM} width={490} alt="without Lead crm" className="rounded-lg" />
                    <h3 className="text-2xl font-semibold text-danger mt-5">Without LeadCRM</h3>

                    <ul className='w-full space-y-3 mt-5'>
                        <li className='w-full flex items-center gap-4'>
                            <X size={24} className='text-danger' />
                            <div className=''>
                                <span className='text-xl font-semibold text-[#262626]'>Manual Data Entry</span>
                                <span className='bg-[#FFDDD5] py-1 px-2 ml-3 rounded-xl text-danger text-xs  inline-block -translate-y-1'>3+ Hours wasted daily</span>

                                <p className='text-[#4C4C4C] font-medium text-sm mt-1.5'>
                                    Copying LinkedIn contacts to CRM manually plus losing conversation history
                                </p>

                            </div>
                        </li>
                        <li className='w-full flex items-center gap-4'>
                            <X size={24} className='text-danger' />
                            <div className=''>
                                <span className='text-xl font-semibold text-[#262626]'>Incomplete Data</span>
                                <span className='bg-[#FFDDD5] py-1 px-2 ml-3 rounded-xl text-danger text-xs  inline-block -translate-y-1'>360% Data Incomplete</span>

                                <p className='text-[#4C4C4C] font-medium text-sm mt-1.5'>
                                    LinkedIn profiles missing Email and Phones from 700M+ Database
                                </p>

                            </div>
                        </li>
                        <li className='w-full flex items-center gap-4'>
                            <X size={24} className='text-danger' />
                            <div className=''>
                                <span className='text-xl font-semibold text-[#262626]'>No CRM Visibility</span>
                                <span className='bg-[#FFDDD5] py-1 px-2 ml-3 rounded-xl text-danger text-xs  inline-block -translate-y-1'>Zero context available</span>

                                <p className='text-[#4C4C4C] font-medium text-sm mt-1.5'>
                                    Can’t see existing CRM contacts when browsing LinkedIn profiles
                                </p>

                            </div>
                        </li>
                        <li className='w-full flex items-center gap-4'>
                            <X size={24} className='text-danger' />
                            <div className=''>
                                <span className='text-xl font-semibold text-[#262626]'>Limited Productivity</span>
                                <span className='bg-[#FFDDD5] py-1 px-2 ml-3 rounded-xl text-danger text-xs inline-block -translate-y-1'>No smart assistance</span>

                                <p className='text-[#4C4C4C] font-medium text-sm mt-1.5'>
                                    Writing messages manually plus no AI assistant for reply, Invite or comments.
                                </p>

                            </div>
                        </li>
                    </ul>

                </div>


                <div className="flex flex-row lg:flex-col items-center justify-center my-6 mx-2">
                    <span className="h-[2px] min-w-[150px] lg:min-w-0 lg:h-full lg:w-[2px] bg-[#BCBCBC]"></span>
                    <span className="text-lg font-medium text-accent mx-4 lg:mx-2 lg:my-2">VS</span>
                    <span className="h-[2px] min-w-[150px] lg:min-w-0 lg:h-full lg:w-[2px] bg-[#BCBCBC]"></span>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-4 mx-4 sm:mx-0 w-full sm:w-[70%] md:w-[60%] lg:w-[38%] border border-white hover:border-[#097737] transition-all duration-500 hover:shadow-lg shadow-black/20 hover:shadow-emerald-500/10 hover:translate-y-[-4px]">
                    <img src={WithCRM} width={490} alt="with Lead crm" className="rounded-lg" />
                    <div className='flex gap-4 items-start'>
                        <h3 className="text-2xl font-semibold text-green mt-5">With LeadCRM</h3>
                        <span className='bg-[#E6FFF1] py-1 px-2 ml-3 rounded-xl text-green text-xs'>4+ Hours/Day Saved</span>
                    </div>

                    <ul className='w-full space-y-3 mt-5'>
                        <li className='w-full flex items-center gap-4'>
                            <img src={Bidirectional} width={38} alt="Complete Bi-Directional Sync" />
                            <div className=''>
                                <span className='text-xl font-semibold text-[#262626]'>Complete Bi-Directional Sync</span>
                                <p className='text-[#4C4C4C] font-medium text-sm mt-1'>
                                    Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.
                                </p>

                            </div>
                        </li>
                        <li className='w-full flex items-center gap-4'>
                            <img src={Contacts} width={38} alt="700M+ Contacts + Enrichment" />
                            <div className=''>
                                <span className='text-xl font-semibold text-[#262626]'>700M+ Contacts + Enrichment</span>

                                <p className='text-[#4C4C4C] font-medium text-sm mt-1'>
                                    Get verified emails and phone numbers from a vast global database.
                                </p>

                            </div>
                        </li>
                        <li className='w-full flex items-center gap-4'>
                            <img src={CRM} width={38} alt="CRM Overlay on LinkedIn" />
                            <div className=''>
                                <span className='text-xl font-semibold text-[#262626]'>CRM Overlay on LinkedIn</span>

                                <p className='text-[#4C4C4C] font-medium text-sm mt-1'>
                                    See full CRM insights directly on LinkedIn profiles without switching tabs.
                                </p>

                            </div>
                        </li>
                        <li className='w-full flex items-center gap-4'>
                            <img src={AI} width={38} alt="AI Response + Templates + Bulk Exports" />
                            <div className=''>
                                <span className='text-xl font-semibold text-[#262626]'>AI Response + Templates + Bulk Exports</span>

                                <p className='text-[#4C4C4C] font-medium text-sm mt-1'>
                                    Save time with AI-crafted replies, pre-built templates, and one-click data exports.
                                </p>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='w-full flex justify-center items-center my-4 mt-12'>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-x-24 gap-y-4">
                    <div className="relative">
                        <Button2 text="Start Using LeadCRM Now" />
                        <div className="hidden sm:block absolute -right-26 -bottom-9">
                            <img src={Arrow} alt="arrow" />
                        </div>
                    </div>
                    <span className="text-[#1D4841] text-center sm:text-left font-caveat text-2xl inline-block -translate-y-2">Save 40+ hours <br className="hidden sm:block" /> every Month</span>
                </div>
            </div>

        </section>
    )
}

export default Comparison