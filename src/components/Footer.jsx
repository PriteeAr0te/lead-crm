import React from 'react'
import Logo from '../assets/img/logo.png'
import Insta from '../assets/img/insta.png'
import X from '../assets/img/x.png'
import Facebook from '../assets/img/facebook.png'
import Linkedin from '../assets/img/linkedin.png'
import Mail from '../assets/img/mail.png'
import Contact from '../assets/img/contact.png'
import Help from '../assets/img/help.png'
import Chrome2 from '../assets/img/chrome-logo.png'
import Button2 from '../components/Button2'
import Group from '../assets/img/group.png'
import Clock from '../assets/img/clock.svg'
import Card from '../assets/img/card.svg'

const Footer = () => {
    return (
        <footer className='mt-14 pt-14 pb-8 w-full bg-[#E0F5FA] relative'>

            <div className='fixed bottom-0 left-auto z-50'>
                <div className="w-fit bg-white p-2 rounded-lg">
                    <div className="bg-[#FFEEFE] text-[#121212] flex gap-3 items-center p-2 rounded-lg">
                        <img src={Group} width={100} alt="Group" />
                        <p className="text-para font-medium mr-2">Join with our Thousands of professionals Now !</p>
                        <Button2 text="Get a Free Trial Now!" />
                    </div>

                    <div className="mt-4 flex justify-center gap-x-20 gap-y-2 items-center">
                        <div classNae="flex gap-2 items-center">
                            <span>
                                <img src={Card} alt="card" />
                            </span>
                            <p><strong>No Credit Card</strong> Required</p>
                        </div>
                        <div classNae="flex gap-2 items-center">
                            <span>
                                <img src={Clock} alt="clock" />
                            </span>
                            <p><strong>14 Days Free</strong> Trial</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full max-w-7xl mx-auto flex flex-wrap justify-between items-start gap-8 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-6 2xl:px-10'>
                <div className='space-y-8'>
                    <a href='#'>
                        <img src={Logo} alt="logo" />
                    </a>
                    <p className='text-para font-medium text-lg mt-8'>
                        LeadCRM is LinkedIn integration <br />
                        tool for your CRM.
                    </p>

                    <div className='flex gap-3 items-center'>
                        <a href='#' target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex justify-center items-center rounded-full p-2 bg-primary'>
                            <img src={Facebook} alt="facebook" />
                        </a>
                        <a href='#' target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex justify-center items-center rounded-full p-2 bg-primary'>
                            <img src={X} alt="x" />
                        </a>
                        <a href='#' target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex justify-center items-center rounded-full p-2 bg-primary'>
                            <img src={Insta} alt="insta" />
                        </a>
                        <a href='#' target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex justify-center items-center rounded-full p-2 bg-primary'>
                            <img src={Linkedin} alt="linkedin" />
                        </a>

                    </div>
                </div>

                <div className='flex flex-wrap gap-6 items-start justify-between'>
                    <div className=''>
                        <h4 className='text-accent text-lg font-semibold mb-4'>Integrations</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href='#' className='text-black/90 hover:text-[#2D96BC] transition-colors duration-300 hover:underline cursor-pointer'>HubSpot</a>
                            </li>
                            <li>
                                <a href='#' className='text-black/90 hover:text-[#2D96BC] transition-colors duration-300 hover:underline cursor-pointer'>Salesforce</a>
                            </li>
                            <li>
                                <a href='#' className='text-black/90 hover:text-[#2D96BC] transition-colors duration-300 hover:underline cursor-pointer'>Pipedrive</a>
                            </li>
                            <li>
                                <a href='#' className='text-black/90 hover:text-[#2D96BC] transition-colors duration-300 hover:underline cursor-pointer'>
                                    Close.io
                                    <span className="text-xs rounded-lg p-1 bg-[#CEFFD5] border border-white text-[#002A06] ml-2">Coming Soon </span>
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-black/90 hover:text-[#2D96BC] transition-colors duration-300 hover:underline cursor-pointer'>
                                    Insightly
                                    <span className="text-xs rounded-lg p-1 bg-[#CEFFD5] border border-white text-[#002A06] ml-2">Coming Soon </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <h4 className='text-accent text-lg font-semibold mb-4'>Alternative</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href='#' className='text-black/90 hover:text-[#2D96BC] transition-colors duration-300 hover:underline cursor-pointer'>Surfe VS LeadCRM</a>
                            </li>
                            <li>
                                <a href='#' className='text-black/90 hover:text-[#2D96BC] transition-colors duration-300 hover:underline cursor-pointer'>Linkmatch Alternative</a>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <h4 className='text-accent text-lg font-semibold mb-4'>Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href='#' className='text-black/90 hover:text-[#2D96BC] transition-colors duration-300 hover:underline cursor-pointer'>Privacy Policy</a>
                            </li>
                            <li>
                                <a href='#' className='text-black/90 hover:text-[#2D96BC] transition-colors duration-300 hover:underline cursor-pointer'>Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className=''>
                    <h4 className='text-accent text-lg font-semibold mb-4'>Contact Us</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href='mailto:support@leadcrm.io' target="_blank" rel="noopener noreferrer" className='text-black/90 flex gap-2 items-center font-normal hover:text-[#2D96BC] transition-colors duration-300 hover:underline cursor-pointer'> <img src={Mail} alt="mail" className="w-6 h-6" />
                                <span> support@leadcrm.io </span>
                            </a>
                        </li>
                        <li>
                            <a href='tel:+1 231-538-7466' target="_blank" rel="noopener noreferrer" className='text-black/90 flex gap-2 items-center font-normal hover:text-[#2D96BC] transition-colors duration-300 hover:underline cursor-pointer'> <img src={Contact} alt="contact" className="w-6 h-6" />
                                <span>+1 231-538-7466</span>
                            </a>
                        </li>
                        <li>
                            <a href='#' className='text-black/90 flex gap-2 items-center font-normal hover:text-[#2D96BC] transition-colors duration-300 hover:underline cursor-pointer'> <img src={Help} alt="help" className="w-6 h-6" />
                                <span>Help Center</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-6 2xl:px-10 mt-2">
                <div className='w-full flex justify-end items-start'>
                    <button className='rounded-lg px-4 py-3 flex gap-6 items-center text-white bg-[#373737]'>
                        <p className=''>
                            <span className='text-white/75'>Available in</span> <br />
                            <span>Chrome Web Store</span>
                        </p>

                        <span className='p-2 bg-white rounded-full'>
                            <img src={Chrome2} width={30} alt="chrome web store" />
                        </span>
                    </button>
                </div>

                <p className='text-para text-center text-sm pb-2 mt-6 border-b border-[#8D8D8D]/80'>Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All LinkedIn(tm) logos and trademarks displayed on this tool are property of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your own risk.</p>

                <p className='text-para text-center text-sm mt-6'>Copyright © 2025 LeadCRM. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer