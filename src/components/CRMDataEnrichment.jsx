import { ChevronRight } from 'lucide-react'
import React from 'react'
import TryCrm from '../assets/img/try-crm.png'
import Waterfall from '../assets/img/waterfall.png'

const CRMDataEnrichment = () => {
  return (
    <section className='w-fill max-w-7xl mx-auto mt-4'>
      <div className='w-full flex gap-2 items-start mb-4'>
        <p className='text-para'>
          It’s hard to find the accurate contact data for every prospects by
        </p>
        <span className='text-xs text-danger p-1 rounded-xl bg-[#FFDCD4]'>
          Incomplete Data
        </span>
      </div>

      <div className='flex flex-col md:flex-row gap-4'>
        <div className='bg-[#F0F4FD] w-full md:w-[48%] rounded-lg px-4 py-5'>
          <h4 className='text-xl font-semibold text-[#262626] mb-2'>
            Here is how LeadCRM tackles that situation.
          </h4>
          <a className='text-green font-medium flex gap-2 items-center transition-all duration-300 hover:opacity-80 cursor-pointer'>
            Try LeadCRM Data Enrichment <ChevronRight />
          </a>

          <div className='mt-4'>
            <img src={TryCrm} alt="try-crm" />
          </div>

        </div>
        <div className='bg-[#F0F4FD] w-full md:w-[48%] rounded-lg px-4 py-5'>
          <p className='text-base font-semibold text-[#262626] mb-2'>
            If it does not work for you! Try our
            <a className='text-green font-medium flex gap-2 items-center transition-all duration-300 hover:opacity-80 cursor-pointer'>
              Advanced Waterfall Enrichment <ChevronRight />
            </a>
          </p>
          <div className='mt-4'>
            <img src={Waterfall} className='rounded-lg' alt="Waterfall Enrichment" />
          </div>

        </div>
      </div>

    </section>
  )
}

export default CRMDataEnrichment