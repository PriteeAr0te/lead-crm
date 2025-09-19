import { ChevronRight } from 'lucide-react'
import React from 'react'
import InstantData from '../assets/img/instant-data.png'
import ProfileVisit from '../assets/img/profile-visit.png'

const CRMDataSync = () => {
  return (
    <section className='w-fill max-w-7xl mx-auto mt-4'>
      <div className='w-full flex gap-2 items-start mb-4'>
        <p className='text-para'>
          40+ hours lost to copy-paste. Every. Single. Month..
        </p>
        <span className='text-xs text-danger p-1 rounded-xl bg-[#FFDCD4]'>
          Lost Lead Context
        </span>
      </div>

      <div className='flex flex-col md:flex-row gap-4'>
        <div className='bg-[#FFFFCE] w-full md:w-[48%] rounded-lg px-4 py-5'>
          <h4 className='text-xl font-semibold text-[#262626] mb-2'>
            The Solution? LeadCRM's Instant Data Sync.
          </h4>
          <a href='#' className='text-green font-medium flex gap-2 items-center transition-all duration-300 hover:opacity-80 cursor-pointer'>
            Try LeadCRM Data Sync <ChevronRight />
          </a>

          <div className='mt-4'>
            <img src={InstantData} alt="Instant Data" />
          </div>

        </div>
        <div className='bg-[##FFFFCE] w-full md:w-[48%] rounded-lg px-4 py-5'>
          <h4 className='text-xl font-semibold text-[#262626] mb-2'>
            Unlock instant CRM insights on every profile you visit.
          </h4>
          <a href='#' className='text-green font-medium flex gap-2 items-center transition-all duration-300 hover:opacity-80 cursor-pointer'>
            Try LeadCRM Data Overlay <ChevronRight />
          </a>
          <div className='mt-4'>
            <img src={ProfileVisit} className='rounded-lg' alt="Profile Visit" />
          </div>

        </div>
      </div>

    </section>
  )
}

export default CRMDataSync