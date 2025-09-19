import { ChevronRight } from 'lucide-react'
import React from 'react'
import ExportProfile from '../assets/img/export-profile.png'
import GSheet from '../assets/img/g-sheet.png'

const BulkExportEnrichment = () => {
  return (
    <section className='w-fill max-w-7xl mx-auto mt-4'>
      <div className='w-full flex gap-2 items-start mb-4'>
        <p className='text-para'>
          Your Sales Navigator Workflow is Broken.
        </p>
        <span className='text-xs text-danger p-1 rounded-xl bg-[#FFDCD4]'>
          Lost Productivity
        </span>
      </div>

      <div className='flex flex-col md:flex-row gap-4'>
        <div className='bg-[#ECEAFF] w-full md:w-[48%] rounded-lg px-4 py-5'>
          <h4 className='text-xl font-semibold text-[#262626] mb-2'>
            Enrich & Export 250 Profiles in Just 60 Seconds.
          </h4>
          <a href='#' className='text-green font-medium flex gap-2 items-center transition-all duration-300 hover:opacity-80 cursor-pointer'>
            Try LeadCRM Bulk Export <ChevronRight />
          </a>

          <div className='mt-4'>
            <img src={ExportProfile} alt="Export Profiles" />
          </div>

        </div>
        <div className='bg-[#ECEAFF] w-full md:w-[48%] rounded-lg px-4 py-5'>
          <h4 className='text-xl font-semibold text-[#262626] mb-2'>
            Export & enrich profiles to the CRM or G-Sheet
          </h4>
          <a href='#' className='text-green font-medium flex gap-2 items-center transition-all duration-300 hover:opacity-80 cursor-pointer'>
            Try LeadCRM Bulk Export <ChevronRight />
          </a>
          <div className='mt-4'>
            <img src={GSheet} className='rounded-lg' alt="GSheet" />
          </div>

        </div>
      </div>

    </section>
  )
}

export default BulkExportEnrichment