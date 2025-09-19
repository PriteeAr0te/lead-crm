import React, { useState } from 'react'
import Automate from '../assets/img/automate.png'
import DataEnrichment from '../assets/img/data-enrichment.png'
import CRMSync from '../assets/img/crm-sync.png'
import BulkExport from '../assets/img/bulk-export.png'
import AIProductivity from '../assets/img/ai-productivity.png'
import CRMDataEnrichment from './CRMDataEnrichment'
import CRMAIProductivity from './CRMAIProductivity'
import CRMDataSync from './CRMDataSync'
import BulkExportEnrichment from './BulkExportEnrichment'

const tabs = [
    { id: "enrichment", icon: DataEnrichment, label: "CRM Data Enrichment", component: <CRMDataEnrichment /> },
    { id: "sync", icon: CRMSync, label: "CRM Data Sync", component: <CRMDataSync /> },
    { id: "bulk", icon: BulkExport, label: "Bulk Export & Enrichment", component: <BulkExportEnrichment /> },
    { id: "ai", icon: AIProductivity, label: "AI Productivity", component: <CRMAIProductivity /> },
];

const LinkedinSales = () => {
    const [activeTab, setActiveTab] = useState("enrichment");

    return (
        <section className='w-full py-12 relative mt-4'>
            <div className='absolute top-0 left-0 w-full h-full'>
                <img src={Automate} alt="automate" className='opacity-40 sm:opacity-60' />
            </div>
            <div className='w-full max-w-7xl mx-auto px-3 sm:px-5 md:px-10'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <h2 className='text-accent z-40 text-3xl sm:text-4xl font-bold mb-2 text-center'>
                        Complete LinkedIn Sales Solutions
                    </h2>
                    <p className='text-[#4C4C4C] text-center'>Everything you need for professional LinkedIn prospecting</p>
                </div>

                <div className='flex flex-col gap-y-4 sm:flex-row justify-center items-center sm:justify-between pb-0 md:border-b-4 sm:px-4 md:border-[#EDEDED] mt-5 sm:mt-8 md:mt-14'>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative pb-3 flex gap-2 items-center text-base font-medium transition-colors duration-300 focus:outline-0 w-fit sm:w-full cursor-pointer ${activeTab === tab.id ?
                                "text-accent" :
                                "text-gray-600"}`}
                        >
                            <img src={tab.icon} alt={tab.label} width={34} className='block sm:hidden md:block' />
                            <span className='text-[10px] whitespace-nowrap text-center w-full sm:w-fit sm:text-[11px] md:text-sm lg:text-base'>{tab.label}</span>
                            {activeTab === tab.id && (
                                <span className="absolute left bottom-0 sm:-bottom-1 w-full h-[3px] bg-accent rounded-md transition-all duration-300"></span>
                            )}
                        </button>
                    ))}
                </div>

                <div
                    key={activeTab}
                    className="mt-6 animate-fadeIn transition-all ease-in-out duration-300 "
                >
                    {tabs.find((tab) => tab.id === activeTab)?.component}
                </div>

            </div>
        </section>
    )
}

export default LinkedinSales